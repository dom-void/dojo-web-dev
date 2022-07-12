import { useCallback, useEffect, useState } from 'react';
import './circle.css'

const Circle = () => {
    const initStyle = {
        width: 'min(10vw, 10vh)',
        height: 'min(10vw, 10vh)',
        top: 0,
        left: 0,
    };

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [direction, setDirection] = useState({ x: 1, y: 1 });
    const [style, setStyle] = useState(initStyle);

    let innerWidth, innerHeight;
    const calculatePosition = useCallback((x, y) => {
        if (y === innerWidth - 0.1 * innerWidth || y === -1) {
            setDirection((direction) => ({ ...direction, y: -1 * direction.y }))
        }
        if (x === innerHeight - 0.1 * innerHeight || x === -1) {
            setDirection((direction) => ({ ...direction, x: -1 * direction.x }))
        }
        return {
            x: x + direction.x,
            y: y + direction.y,
        };
    }, [direction, innerHeight, innerWidth]);

    useEffect(() => {
        ({ innerWidth, innerHeight } = window);
    }, []);

    useEffect(() => {
        console.log(innerWidth, innerHeight);
        let intervalId = setInterval(() => {
            const { x, y } = calculatePosition(position.x, position.y);
            setPosition((position) => ({ ...position, x, y }));
            setStyle((style) => ({ ...style, top: `${position.y}px`, left: `${position.y}px` }));
            console.log(style);
        }, 30);
        return () => clearInterval(intervalId);
    }, [calculatePosition, position, style, innerHeight, innerWidth]);

    return (
        <div className='circle' style={style}></div>
    );
}

export default Circle;