import React, { useState } from "react";

function MyFirstHook() {
  // declare state variable
  const [counter, setCounter] = useState(0);
  const [imgUrl, setImgUrl] = useState('https://www.bra.org/wp-content/uploads/guide-glass-lightbulb.jpg');
  const [isLightOn, setIsLightOn]=useState(false);

  function handleLight(){
    if(isLightOn){
      //display off image
      setImgUrl('https://www.bra.org/wp-content/uploads/guide-glass-lightbulb.jpg');
    }else{
      //display on image
      setImgUrl('https://static3.depositphotos.com/1004468/179/v/600/depositphotos_1799575-stock-illustration-lightbulb.jpg');
    }
    //reverse switch 
    setIsLightOn(!isLightOn);
  }
  return (
    <div>
      <div>My First Hook</div>
      <div>
        Counter :{counter}
        <button onClick={()=> setCounter(counter+1)}>Click</button><br />
        <img src={imgUrl} style={{width: '30%'}} onClick={()=>handleLight()}></img>

      </div>

    </div>
  );
}

export default MyFirstHook;
