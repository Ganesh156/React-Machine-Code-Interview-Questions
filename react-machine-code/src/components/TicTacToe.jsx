import { useState } from "react"
import useTicTacToe from "../hooks/use-tic-tac-toe"



const TicTacToe = ()=>{
    const {board,calculateWinner,handleClick,getStatusMessage,resetGame} = useTicTacToe()
    return (
        <div className="game">
            <div className="status">
                <span>{getStatusMessage()}</span>
                <button onClick={resetGame}>Reset Game</button>
            </div> 
            <div className="board">
                {board.map((b,index)=>{
                   return (<button className="cell" key={index} onClick={()=>{handleClick(index)}} disabled={b!==null}>{b}</button>)
                })}
            </div>
        </div>
    )
}

export default TicTacToe