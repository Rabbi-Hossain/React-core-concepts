import { useState } from "react"

export default function Count(){
    const [count,setCount] = useState(0)
    function add(){
        const newValue = count + 1;
        setCount(newValue)
    }

    function Remove(){
        const removeValue = count - 1;
        setCount(removeValue)
    }
    return(
        <div>
            <h3>Count: {count}</h3>
            <button onClick={add}>Add</button>
            <button onClick={Remove}>Remove</button>
        </div>
    )
}