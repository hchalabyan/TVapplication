import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import './App.css';
import { Home } from "@/components/Home";
import { useHandleResize } from "@/hooks";
function App() {
    const fontSize = useHandleResize();
    useEffect(() => {
        document.documentElement.style.fontSize = `${fontSize}px`;
    }, [fontSize]);
    return (_jsx("main", { children: _jsx(Home, {}) }));
}
export default App;
