import { useEffect, useState } from "react"
import './Style.css'
import Some from "./freind"
 export default function Uses(){
    const [uses, setUses] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data=>setUses(data))
    },[])

    return (
        <div className="box">
            <h3>First-User: {uses.length}</h3>
            {
                uses.map(friend => <Some friend={friend}></Some>)
            }
        </div>
    )
}