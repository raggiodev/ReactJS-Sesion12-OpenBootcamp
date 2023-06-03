import { useState } from 'react';
import './App.css';

const App = () => {
    const [color, setColor] = useState('black');
    const [intervalId, setIntervalId] = useState(null);

    const handleMouseEnter = () => {
        setColor(getRandomColor());
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
        return `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`;
    };

    const getRandomValue = () => {
        return Math.floor(Math.random() * 256);
    };

    return (
        <div className="container">
            <div className="container"
                style={{
                    width: '255px',
                    height: '255px',
                    backgroundColor: color,
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onDoubleClick={handleDoubleClick}
            />
        </div>
    );
};

export default App;