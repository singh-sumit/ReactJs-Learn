import React from 'react';
import { useHistory,useParams } from 'react-router-dom';

export default function ThirdHook(){
    let history=useHistory();
    let params=useParams();
    console.log(history);
    console.log(params)
    return(
        <div>
            <p>Third HOOk.</p>
            <p>Params :{params.id}</p>
            <p>Name :{history.location.state.name}</p>
        </div>
    )
}