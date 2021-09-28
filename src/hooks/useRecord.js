import { useState, useEffect } from 'react';

export const useRecord = (init) => {
    const [ currentColor, setCurrentColor ] = useState(init);
    const [ colorHistory, setColorHistory ] = useState([init]);
    const [ currentIndex, setIndex ] = useState(0);

    useEffect(() => {
        setIndex(colorHistory.indexOf(currentColor));
    }, [currentColor] );

    const record = (newColor) => {
        setColorHistory((previousColor) => [
            ...previousColor.slice(0, currentIndex + 1),
            newColor,
            ...previousColor.slice(currentIndex + 1),
        ]);
        setCurrentColor(newColor);

    };

    const undoColor = () => {
        setCurrentColor(colorHistory[currentIndex -1])
    };

    return { currentColor, record, undoColor };
}