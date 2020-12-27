import React from 'react';

export default function MySecondHook(props){
    console.log(props.imageLoc);
    return (
        <div>
            This is second Component.
            <img src={props.imageLoc} style={{width: '30%'}}></img>
            <p>{props.name}</p>
            <img src={props.localImage}></img>
        </div>
    )
}