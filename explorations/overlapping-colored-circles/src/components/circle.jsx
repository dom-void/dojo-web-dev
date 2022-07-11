import { useEffect, useState } from 'react';
import './circle.css'

const Circle = () => {
    const initStyle = {
        width: 'min(10vw, 10vh)',
        height: 'min(10vw, 10vh)',
        top: 0,
        left: 0,
    };

    const [position, setPosition] = useState({x: 0, y: 0});
    const [style, setStyle] = useState(initStyle);

/* 
    const { innerWidth, innerHeight } = window;
    const calculatePosition = (x, y) => {

    };
*/

    useEffect(() => {
        let intervalId = setInterval(() => {
            setPosition((position) => ({...position, x: ++position.x, y: ++position.y}))
            setStyle((style) => ({ ...style, top: `${position.y}px`, left: `${position.y}px` }));
            console.log(style);
        }, 100);
        return () => clearInterval(intervalId);
    }, [position, style]);

    return (
        <div className='circle' style={style}></div>
    );
}

export default Circle;