import { useState } from "react"

export default function LudoBoard(){
    let [moves,setMoves] = useState({blue:0,yellow:0,green:0,red:0});
    // let [blueMove,setBlueMove] = useState(0);
    // let [YellowMove,setYellowMove] = useState(0);
    // let [GreenMove,setGreenMove] = useState(0);
    // let [RedMove,setRedMove] = useState(0);

    let updateBlue = ()=>{
        // moves.blue += 1;
        // setMoves({moves});

        // setMoves({...moves, blue: moves.blue +1});

        setMoves( (preMoves) => {
            return {...preMoves, blue: preMoves.blue +1}}); // to access object, we use spread
    }
    let updateYellow = ()=>{
        setMoves( (preMoves) => {
            return {...preMoves, yellow: preMoves.yellow +1}});
    }
    let updateGreen = ()=>{
        setMoves( (preMoves) => {
            return {...preMoves, green: preMoves.green +1}});
    }
    let updateRed = ()=>{
        setMoves( (preMoves) => {
            return {...preMoves, red: preMoves.red +1}});
    }
    return(
        <div>
            <p>Game Begins!</p>
            <div className="board">
                <p>Blue Moves = {moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow Moves = {moves.yellow}</p>
                <button style={{backgroundColor:"yellow", color:"black"}} onClick={updateYellow} >+1</button>
                <p>Green Moves = {moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
                <p>Red Moves = {moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}