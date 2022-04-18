import { Timer } from './Timer';
import { useState } from 'react';

export const TimerParent = () => {

    const [milliseconds, setMilliseconds] = useState(1000);

    return (
        <>
            <span>Milliseconds {1000}</span>
            <br />
            <button className='btn btn-outline-success'
                onClick={() => setMilliseconds(1000)}
            >
                1000
            </button>
            <button className='btn btn-outline-success'
                onClick={() => setMilliseconds(2000)}
            >
                2000
            </button>
            <Timer milliseconds={milliseconds}/>
        </>
    )
}