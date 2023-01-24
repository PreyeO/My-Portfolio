import React from 'react'
import CountDown from '../CountDown/CountDown'

const WelcomeScreen = () => {
  return (
    <>
       <div>
        <CountDown seconds={5}/>
        </div>
    </>
  )
}

export default WelcomeScreen
