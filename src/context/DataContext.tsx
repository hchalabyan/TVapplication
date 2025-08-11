import React, {createContext, useCallback, useEffect, useMemo, useRef, useState} from "react";
import axios from "axios";
import {IFeaturedProps} from "@/components/Featured/types";

export interface IResponseData {
    Featured: IFeaturedProps;
    TendingNow: IFeaturedProps[];
}

export interface DataContextValue {
    featuredData: IFeaturedProps | null;
    trendingData: IFeaturedProps[];
    loading: boolean;
    error: string | null;
    onMovieClick: (id: string) => void;
    setFeatured: React.Dispatch<React.SetStateAction<IFeaturedProps | null>>;
}

export const DataContext = createContext<DataContextValue | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [featuredData, setFeaturedData] = useState<IFeaturedProps | null>(null);
    const [trendingData, setTrendingData] = useState<IFeaturedProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchCalledRef = useRef(false);

    const getStoredOrder = (): string[] => {
        const stored = sessionStorage.getItem("clickedMovieOrder");
        return stored ? JSON.parse(stored) : [];
    };

    const saveOrder = (order: string[]) => {
        sessionStorage.setItem("clickedMovieOrder", JSON.stringify(order));
    };

    const sortByClickedOrder = (movies: IFeaturedProps[], order: string[]) => {
        const ordered: IFeaturedProps[] = [];
        const unordered = [...movies];

        order.forEach((id) => {
            const idx = unordered.findIndex((m) => m.Id === id);
            if (idx !== -1) {
                ordered.push(unordered[idx]);
                unordered.splice(idx, 1);
            }
        });

        return [...ordered, ...unordered];
    };

    const fetchProfileData = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await axios.get<IResponseData>("/data/data.json");

            const clickedOrder = getStoredOrder();

            setFeaturedData(res.data.Featured);
            setTrendingData(sortByClickedOrder(res.data.TendingNow, clickedOrder));
        } catch (err) {
            setError("Failed to load data");
            console.error(err);
        } finally {
            fetchCalledRef.current = false;
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (fetchCalledRef.current) return;
        fetchCalledRef.current = true;
        fetchProfileData();
    }, [fetchProfileData]);

    const onMovieClick = (id: string) => {
        const clickedMovie = trendingData.find((movie) => movie.Id === id);
        if (!clickedMovie) return;

        setFeaturedData(clickedMovie);

        let order = getStoredOrder();
        order = order.filter((storedId) => storedId !== id);
        order.unshift(id);
        saveOrder(order);

        setTrendingData(sortByClickedOrder(trendingData, order));
    };

    const value = useMemo(
        () => ({
            featuredData,
            trendingData,
            loading,
            error,
            onMovieClick,
            setFeatured: setFeaturedData,
        }),
        [featuredData, trendingData, loading, error]
    );

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
