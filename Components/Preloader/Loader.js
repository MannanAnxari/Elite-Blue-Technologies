import React, { useEffect, useRef, useState } from 'react';
// import './Loading.css';


function useInterval(callback, delay, counter) {

    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        let id = setInterval(() => {
            if (savedCallback.current() >= 100) {
                return clearInterval(id);
            }
            else {
                savedCallback.current();
            }
        }, delay);

    }, [delay]);
}

export default function Loader() {
    const [counter, setCounter] = useState(0);
    useInterval(() => {
        setCounter(counter + 1);
        return counter;
    }, 9, counter);

    return (
        <div class={`${counter >= 100 && "active"} preloader`} id="preloader">
            <div className="progresss" id="prgrs" style={{ width: `${counter}%` }}></div>
            <div class={`counter ${counter >= 40 && "hideLoader"}`} id="preloaderCounter">
                {counter}
            </div>
        </div>
    )
}
