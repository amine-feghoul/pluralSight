
import './App.css';
import Navbar from "./components/navbar/Navbar"
import HomePage from './pages/HomePage';
import {BrowserRouter as Router ,Route,Switch } from "react-router-dom"
import Footer from './components/footer/Footer';

function App() {

const routes =[
  {
    path:"/",
    page: HomePage,
  },

]
const serveRoutes = routes.map((route)=>{<Route exact path={route.path} component={route.page}></Route>})
const displayPage =()=>{
  return(
    routes.map((route)=><Route path={route.path} exact component={route.page}>
  
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
