import './App.css';
import './index.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Git from "./Components/Assets/git.PNG"
import Food from "./Components/Assets/e.PNG"
import Love from "./Components/Assets/love.PNG"
import 'react-toastify/dist/ReactToastify.css'
import LandingPage from './Pages/LandingPage/LandingPage';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import ErrorBoundary from './Components/Error/ErrorBoundary';
import { Fragment} from 'react';




function App() {

  

  const projectData=[
    {
      id:1,
      title:'Food App',
      image:Food,
      languages:'ReactJs, CSS, Styled component',
      description:'This app was built to display major e-commerce modals like: dashboard, cart, orders and checkout.',
      github:"https://github.com/PreyeO/food-app",
      demo:"https://food-app-mocha.vercel.app"
    },
  
    {

      id:2,
      title:'GitHub Profile Finder',
      image:Git,
      languages:'ReactJs and CSS',
      description:'This app searches and displays GitHub profiles searched with thier usernames .',
      github:"https://github.com/PreyeO/GitHub-profi",
      demo:"https://github-profile-finder-sepia.vercel.app/"
      
    },
    {

      id:3,
      title:'Cupid Dating App',
      image:Love,
      description:'This is a dating app demo that is currently using data fetched from an API.',
      languages:'ReactJs, CSS',
      github:"https://cupid-dating-app-pre.vercel.app",
      demo:"https://github.com/PreyeO/CUPID-DATING-APP"
    },
  
  ]

 
  return (
    <Fragment>
    <ErrorBoundary>
    
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/myportfolio' element={<MyPortfolio projectData={projectData}/>}/>
      </Routes>
    </Router>
    </ErrorBoundary>
    </Fragment>
   
  

    
  );
}

export default App;
