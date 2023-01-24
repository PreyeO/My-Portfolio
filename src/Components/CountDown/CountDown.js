import React, {useEffect, useRef, useState}from 'react'
import { Navigate} from 'react-router-dom'

const CountDown = ({seconds}) => {



const timerId=useRef()

const [countDown, setCountDown] = useState(seconds)

  useEffect(()=>{
timerId.current= setInterval(()=>{
  setCountDown(prev =>prev-1)
  if(countDown===2){
     document.body.style.color='red'

  }

}, 1000)
return() => clearInterval(timerId.current)

  }, [countDown])

  useEffect(()=>{
    if(countDown === -1) {
      clearInterval(timerId.current)

    }
  }, [countDown])
  return (
    <>
    <div className='count_time_content'>
    <div className='count_time'>
     <div className= {countDown === -1? 'countdown' : '' || countDown=== 2? 'color_two' : ''|| countDown=== 3? 'color_three' : ''|| countDown=== 4? 'color_four' : ''|| countDown=== 1? 'color_one' : ''|| countDown=== 0? 'color_zero' : ''|| countDown=== 5? 'color_five' : ''}>
     <h1>{countDown}</h1>
     </div>
     </div>
     {countDown === -1? (
      <Navigate to='/myportfolio'/>):null
     }
     
    </div>
  

    </>
  )
}

export default CountDown
