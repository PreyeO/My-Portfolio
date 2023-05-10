import classes from '../LandingPage/LandingPage.module.css'
import CountDown from '../../Components/CountDown/CountDown'
import DocumentTitle from "react-document-title";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import {useState} from 'react'



const LandingPage = () => {

  const [isLoading, setIsLoading] =useState(false)

 
  return (
   <DocumentTitle title='My-Portfolio'>
    {isLoading? (
      <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
    ):(

      <section className={classes.landing_page}>
      <h2>I am glad to have you here🤗</h2>
     <div className='container'>
     <CountDown seconds={5} />
     </div>
   </section>
    )}
    
   
    
    </DocumentTitle>
   


  )
}



export default LandingPage
