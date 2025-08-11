import { useContext } from "react";
import { DataContext } from "@/context";
export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("No Context found.");
    }
    return context;
};
