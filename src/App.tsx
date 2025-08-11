import React, {useEffect} from "react";
import './App.css'
import {Home} from "@/components/Home";
import {useHandleResize} from "@/hooks";

function App() {
    const fontSize = useHandleResize()

    useEffect(() => {
        document.documentElement.style.fontSize = `${fontSize}px`
    }, [fontSize])


    return (
        <main>
            <Home/>
        </main>
    )
}

export default App
