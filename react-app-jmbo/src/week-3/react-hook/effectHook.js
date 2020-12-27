import React, { useEffect, useState } from 'react';

export default function EffectHook(){

    const [count,setCount] = useState(0);
    const [isCalled, setIsCalled] = useState(false);
    const [isCalledAgain, setIsCalledAgain] = useState(false);

    // using useEffect 
    useEffect(()=>{
        console.log('This is use effect hook');
    },[isCalled,isCalledAgain]);
    return(
        <div>
            <p>Examples of Effect Hook.</p>
            <p>Count :{count}</p>
            <button onClick={()=>setCount(count+1)}>Click</button>
            <button onClick={()=>setIsCalled(true)}>Call Effect</button>
            <button onClick={()=>setIsCalledAgain(true)}>Call Effect Again</button>
        </div>
    )
}