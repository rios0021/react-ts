import { useEffect, useRef, useState } from 'react';

type TimerArgs = {
    milliseconds:number
}


export const Timer = ({milliseconds}:TimerArgs) => {
    const [seconds, setseconds] = useState( 0 );

    const ref = useRef<NodeJS.Timeout>();
    
    
    useEffect(() => {
        ref.current && clearInterval(ref.current);
        ref.current = setInterval(() =>  setseconds(s => s+1), milliseconds);
    }, [milliseconds]);
    

    return (
        <>
            <h4>Timer: <small>{seconds}</small></h4>
        </>
    )
}