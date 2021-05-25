
import './App.css';
import Navbar from "./components/navbar/Navbar"
import Landing from './components/landing/Landing'
import DevLanguages from "./components/dev-languages/DevLanguages"
import LatestFeatures from "./components/latest-features/LatestFeatures"
import HomePage from './pages/HomePage';
import {BrowserRouter as Router ,Route,Switch } from "react-router-dom"

function App() {

const routes =[
  {
    path:"/",
    page: HomePage,
  },

]
const serveRoutes = routes.map((route)=>{<Route exact path={route.path} component={route.page()}></Route>})

  return (
    <div className="App">

      
      <Router>  
      <Navbar/>
        <Switch>
        <Route path='/' exact component={HomePage}/>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
