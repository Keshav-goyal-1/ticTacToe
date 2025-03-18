import React from 'react'
import { useState } from 'react';



function Square({val,onSquareCLick}){
  // const [value,setValue] = useState("");
  // function handleClick(){
  //   console.log("Clicked");
  //   setValue("X");
  // }
  return(
    <button className="w-24 h-24 border border-black text-4xl font-bold flex items-center justify-center" onClick={onSquareCLick} >{val}</button>
  )
}

export default function Board(){
  const [square,setSquare] = useState(Array(9).fill(null))
  const [xIsNext,setXIsNext] = useState(true);
  const handleClick = (i)=>{
    const nextSquare = square.slice();
    if(xIsNext){
     nextSquare[i] = "X"
    }
    else{
      nextSquare[i] = 'O';
    }
    setXIsNext(!xIsNext);
    setSquare(nextSquare);
  }

  return(
    <div className='mt-60 ml-100'>
      <div className='board-row flex'>
        <Square val={square[0]} onSquareCLick = {()=> handleClick(0)}/>
        <Square val={square[1]} onSquareCLick = {()=> handleClick(1)} />
        <Square val={square[2]} onSquareCLick = {()=> handleClick(2)} />
      </div>
      <div className='board-row flex'>
        <Square val={square[3]} onSquareCLick = {()=> handleClick(3)} />
        <Square val={square[4]} onSquareCLick = {()=> handleClick(4)} />
        <Square val={square[5]} onSquareCLick = {()=> handleClick(5)} />
      </div>
      <div className='board-row flex'>
        <Square val={square[6]} onSquareCLick = {()=> handleClick(6)} />
        <Square val={square[7]} onSquareCLick = {()=> handleClick(7)} />
        <Square val={square[8]} onSquareCLick = {()=> handleClick(8)} />
        
      </div>
    </div>
  )
}