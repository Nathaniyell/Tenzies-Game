import React from 'react'

const Die = (props)=>{
  return <button className='dice-face' style={{props.isheld && background: '#59E391'}}>
    {props.value}
  </button>
}

export default Die