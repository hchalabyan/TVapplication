import {useEffect, useState} from 'react'

export function useHandleResize() {
    const [fontSize, setFontSize] = useState(16)
    const handleResize = () => {
        let newFontSize = (window.innerWidth * 16) / 1440 // Adjust as needed

        if (newFontSize > 16) {
            newFontSize = 16
        }
        if (newFontSize < 10) {
            newFontSize = 10
        }
        setFontSize(newFontSize)
    }
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return fontSize
}
