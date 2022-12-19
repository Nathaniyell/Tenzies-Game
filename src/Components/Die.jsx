import React from 'react'

const Die = (props)=>{
const styles = {
  backgroundColor: props.isheld ? '#59E391' : '#fff'
}
  
  return <button 
           className='dice-face' 
           style={styles}
           onClick={()=>props.clickHandler(props.id)}
           >
    {props.value}
  </button>
}

export default Die