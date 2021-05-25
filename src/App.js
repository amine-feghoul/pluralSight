
import './App.css';
import Navbar from './components/navbar/Navbar';
import Landing from './components/landing/Landing';
import DevLanguageCard from './components/dev-languages/DevLanguageCard';
import DevLanguages from './components/dev-languages/DevLanguages';
import LatestFeatures from './components/latest-features/LatestFeatures';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Landing/>
        <DevLanguages/>
        <LatestFeatures/>
    </div>
  );
}

export default App;
