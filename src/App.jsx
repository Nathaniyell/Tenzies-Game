import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import './App.css'
import Die from './Components/Die'

export default function App() {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(()=>{
    console.log("Dice state changed")
    // const allHeld = dice.every(die => die.isHeld === true)
     const allHeld = dice.every(die => die.isHeld)
    //the javascript .every() checks if every item in an array meets a specified condition, if it does, it returns the value true

    const firstValue = dice[0].value;
    const allSameValue = dice.every(die => die.value === firstValue)
    if(allHeld && allSameValue){
      setTenzies(true)
      console.log(`You won with ${count} rolls`)
    }
  }, [dice])

  function createNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }


  function allNewDice() {
    //create an empty array
    const diceArray = []
    for (let i = 0; i < 10; i++) { //loop 10times

      //push random numbers between 1 and 6 into the array as you         loop
      // diceArray.push(Math.ceil(Math.random() * 6))
      diceArray.push(createNewDie())
    }
    //the function should finally return the array of numbers
    return diceArray
  }


  function rollDice() {
  setCount(count + 1)
    
     //setDice(allNewDice())
    //generate new numbers and save them to state
    if(!tenzies){
      //map through the dice array and check if any of the isheld property is true, return that die as is, if it is false, run the function that creates a new dice
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? die : createNewDie()
    }))
    }else{
      setTenzies(false)
      setDice(allNewDice())
    }
   
  }
  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? { ...die, isHeld: !die.isHeld } : die
    }))
    //if the id of the clicked die matches the id of any die, change the isheld property of that die to the opposite.
  }
  const diceElements = dice.map(die => {
    return <Die
      value={die.value}
      key={die.id}
      id={die.id}
      isheld={die.isHeld}
      clickHandler={holdDice}
    />
  })

  return (
    //The confetti is a cool animation component by react that displays when the game is won
    <main>
      {tenzies && <Confetti />}
  {tenzies && <div className={`win ${tenzies && 'show-win'}`}> 
  <h1>Hurray!!! You WON with {count} Rolls</h1>
  </div>}
      <header>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p></header>
      <section>
        {diceElements}
      </section>
      <button className='roll' onClick={rollDice}>{tenzies ? 'New Game' : 'Roll'}</button>
    </main>
  )
}
