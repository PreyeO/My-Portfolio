import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Git from "./Components/Assets/git.PNG";
import Food from "./Components/Assets/e.PNG";
import baby from "./Components/Assets/babe.PNG";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import { Fragment } from "react";

function App() {
  const projectData = [
    {
      id: 1,
      title: "Food App",
      image: Food,
      languages: "React and styled-component",
      description:
        "Displays modals like: dashboard, cart, orders and checkout.",
      github: "https://github.com/PreyeO/food-app",
      demo: "https://food-app-mocha.vercel.app",
    },

    {
      id: 2,
      title: "GitHub Profile Finder",
      image: Git,
      languages: "React and CSS",
      description: "Displays GitHub profiles searched with their usernames .",
      github: "https://github.com/PreyeO/GitHub-profile-finder",
      demo: "https://github-profile-finder-sepia.vercel.app/",
    },
    {
      id: 3,
      title: "Baby-cry-translator",
      image: baby,
      description: "used for understanding babies feelings starting on day 0.",
      languages: "ReactJS, Machine learning",
      github: "https://baby-cry-translator.vercel.app/",
      demo: "https://baby-cry-translator.vercel.app/",
    },
  ];

  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/myportfolio"
            element={<MyPortfolio projectData={projectData} />}
          />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
