import React, { useEffect, useState } from 'react'


const Advice = () => {

const [advice , setAdvice] = useState("Please Click Button to get Advice");
const [count, setCount] = useState(0);

async function getAdvice(){

    const res = await fetch("https://api.adviceslip.com/advice");
    const data =await res.json();
    setAdvice(data.slip.advice);
    setCount((c)=>c+1)

}



  return (
    <>
    <div className='app-container'>
        <h4>{advice}</h4>
        <button onClick={getAdvice}>Get Advice</button>
        <Counter count = {count}/>
    </div>
    </>
  )
}

function Counter(props){
    return(

        <p>You have read <b>{props.count}</b> pieces of advice</p>


    )



}

export default Advice
