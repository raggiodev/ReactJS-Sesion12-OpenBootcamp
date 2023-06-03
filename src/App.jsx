import React, { useState } from 'react';

const App = () => {
    const [color, setColor] = useState('black');
    const [intervalId, setIntervalId] = useState(null);

    const handleMouseEnter = () => {
        const newColor = getRandomColor();
        setColor(newColor);
        startColorChange();
    };

    const handleMouseLeave = () => {
        stopColorChange();
    };

    const handleDoubleClick = () => {
        stopColorChange();
    };

    const startColorChange = () => {
        if (intervalId) return;

        const id = setInterval(() => {
            setColor(getRandomColor());
        }, 500);
        setIntervalId(id);
    };

    const stopColorChange = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

    const getRandomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    };

    return (
        <div
            style={{
                width: '255px',
                height: '255px',
                backgroundColor: color,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onDoubleClick={handleDoubleClick}
        />
    );
};

export default App;