import React, { useState } from 'react'
import './App.css'
import Die from './Components/Die'

export default function App() {
const [dice, setDice] = useState(allNewDice())
  const diceElements = dice.map((die, index) =>{
    return <Die value={die} key={index} />
  })
  
  function allNewDice() {
    //create an empty array
    const diceArray = []
    for (let i = 0; i <10; i++) { //loop 10times

      //push random numbers between 1 and 6 into the array as you         loop
      diceArray.push(Math.ceil(Math.random() * 6))
    }
    //the function should finally return the array of numbers
    return diceArray
  }
  // console.log(allNewDice())
function rollDice(){
  setDice(allNewDice())
  //generate new numbers and save them to state
}
  
  return (
    <main>
      <section>
        {diceElements}
      </section>
      <button className='roll' onClick={rollDice}>Roll</button>
    </main>
  )
}
