import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import Die from './Components/Die'

export default function App() {
const [dice, setDice] = useState(allNewDice()) 
  function allNewDice() {
    //create an empty array
    const diceArray = []
    for (let i = 0; i <10; i++) { //loop 10times

      //push random numbers between 1 and 6 into the array as you         loop
      // diceArray.push(Math.ceil(Math.random() * 6))
      diceArray.push({
        value: Math.ceil(Math.random() * 6),
      isHeld: true,
        id:nanoid()
      })
    }
    //the function should finally return the array of numbers
    return diceArray
  }
  // console.log(allNewDice())
function rollDice(){
  setDice(allNewDice())
  //generate new numbers and save them to state
}
  const diceElements = dice.map(die =>{
    return <Die value={die.value} key={die.id} isheld={die.isHeld} />
  })
  
  return (
    <main>
      <section>
        {diceElements}
      </section>
      <button className='roll' onClick={rollDice}>Roll</button>
    </main>
  )
}
