import './App.css';
import './index.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Git from "./Components/Assets/git.PNG"
import Food from "./Components/Assets/e.PNG"
import Love from "./Components/Assets/love.PNG"
import 'react-toastify/dist/ReactToastify.css'
import LandingPage from './Pages/LandingPage/LandingPage';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import { Fragment} from 'react';




function App() {

  

  const projectData=[
    {
      id:1,
      title:'Food App',
      image:Food,
      languages:'React and styled-component',
      description:'Displays modals like: dashboard, cart, orders and checkout.',
      github:"https://github.com/PreyeO/food-app",
      demo:"https://food-app-mocha.vercel.app"
    },
  
    {

      id:2,
      title:'GitHub Profile Guru',
      image:Git,
      languages:'Vuejs, composition API and CSS',
      description:'Displays GitHub profiles searched with their usernames .',
      github:"https://github.com/PreyeO/Profile-Guru",
      demo:"https://profile-guru.vercel.app/"
      
    },
    {

      id:3,
      title:'Cupid Dating App',
      image:Love,
      description:'This dating app is currently using data fetched from an API.',
      languages:'React and CSS',
      github:"https://github.com/PreyeO/CUPID-DATING-APP",
      demo:"https://cupid-dating-app-pre.vercel.app"
    },
  
  ]

 
  return (
    <Fragment>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/myportfolio' element={<MyPortfolio projectData={projectData}/>}/>
      </Routes>
    </Router>
    </Fragment>
   
  

    
  );
}

export default App;
