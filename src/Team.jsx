import { useState } from "react"

export default function Players(){
    const obj ={
        border:'2px solid purple',
        margin: '20px',
        padding: '15px',
        borderRadius:'10px',
        fontSize:'24px'
    }
    const [count,setCount] = useState(11);
    const addHandler = ()=>{
        const newCount = count+1;
        setCount(newCount);
    }
    return(
        <div style = {obj}>
            <h3>Players:{count}</h3>
            <button onClick={addHandler}>Player Add</button>
        </div>
    )
}