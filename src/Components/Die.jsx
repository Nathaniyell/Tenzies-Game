import React from 'react'

const Die = (props)=>{
const styles = {
  backgroundColor: props.isheld ? '#52050A' : '#fff',
  color: props.isheld ? '#fff' : '#000'
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