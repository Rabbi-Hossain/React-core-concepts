import { useState } from "react"

export default function Playears(){
    const [player, setPlayer] = useState(10)

    function addHandel(){
        const newAdd = player + 1;
        setPlayer(newAdd)
    }
    function removeHandel(){
        const removeHandelValue = player - 1;
        setPlayer(removeHandelValue)
    }

    const styles = {
        border:"2px solid tomato",
        margin:'20px',
        borderRadius:'15px'
    }
    return(
        <div style={styles}>
            <h3>Players: {player}</h3>
            <button onClick={addHandel}>inc+</button>
            <button onClick={removeHandel}>Dic-</button>
        </div>
    )
}