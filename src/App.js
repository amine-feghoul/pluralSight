import React from 'react'
import './App.css';
import Navbar from "./components/navbar/Navbar"
import HomePage from './pages/HomePage';
import {BrowserRouter as Router ,Route,Switch } from "react-router-dom"
import Footer from './components/footer/Footer';
import Skills from './pages/skills/Skills';


function App() {

const routes =[
  {
    path:"/",
    page: HomePage,
    id: 1
  },
  {
    path:"/products",
    page: Skills,
    id: 2
  }

]

const displayPage =()=>{
  return(
    routes.map((route)=><Route key = {route.id} path={route.path} exact component={route.page}>
  
    </Route>)
    )
}
  return (
    <div className="App">

      
      <Router>  
      <Navbar/>
        <Switch>

          {
            displayPage()
          }
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
