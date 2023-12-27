import React, { useEffect, useState } from 'react'




function Automaticcounter() {

    const[count,setCount]=useState(0);
  

    useEffect(() =>{
        const intervalId = setInterval(() =>{
            setCount((prevCount)=>prevCount +1);
        },1000);
        return ()=>clearInterval(intervalId);
    })
   function reset(){
    setCount(0)
   } 
   
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'200px'}}>
    <div  style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'lavender',flexDirection:'column',width:'400px',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} >
        <h1 style={{marginBottom:'50px'}}>Automatic Counter App</h1>
        <h3><b>count:{count} Seconds</b></h3>
        <button  style={{
            backgroundColor:'black',
            color:'white',
            padding:'5px',
            margin:'5px',
            border:'transparent',
            borderRadius:'3PX',
            marginBottom:'50px'
            }} 
            onClick={reset}>Reset</button>

    </div>
    </div>
  )
}

export default Automaticcounter