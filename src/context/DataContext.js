import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useCallback, useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
export const DataContext = createContext(undefined);
export const DataProvider = ({ children }) => {
    const [featuredData, setFeaturedData] = useState(null);
    const [trendingData, setTrendingData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchCalledRef = useRef(false);
    const getStoredOrder = () => {
        const stored = sessionStorage.getItem("clickedMovieOrder");
        return stored ? JSON.parse(stored) : [];
    };
    const saveOrder = (order) => {
        sessionStorage.setItem("clickedMovieOrder", JSON.stringify(order));
    };
    const sortByClickedOrder = (movies, order) => {
        const ordered = [];
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
            const res = await axios.get("/data/data.json");
            const clickedOrder = getStoredOrder();
            setFeaturedData(res.data.Featured);
            setTrendingData(sortByClickedOrder(res.data.TendingNow, clickedOrder));
        }
        catch (err) {
            setError("Failed to load data");
            console.error(err);
        }
        finally {
            fetchCalledRef.current = false;
            setLoading(false);
        }
    }, []);
    useEffect(() => {
        if (fetchCalledRef.current)
            return;
        fetchCalledRef.current = true;
        fetchProfileData();
    }, [fetchProfileData]);
    const onMovieClick = (id) => {
        const clickedMovie = trendingData.find((movie) => movie.Id === id);
        if (!clickedMovie)
            return;
        setFeaturedData(clickedMovie);
        let order = getStoredOrder();
        order = order.filter((storedId) => storedId !== id);
        order.unshift(id);
        saveOrder(order);
        setTrendingData(sortByClickedOrder(trendingData, order));
    };
    const value = useMemo(() => ({
        featuredData,
        trendingData,
        loading,
        error,
        onMovieClick,
        setFeatured: setFeaturedData,
    }), [featuredData, trendingData, loading, error]);
    return _jsx(DataContext.Provider, { value: value, children: children });
};
