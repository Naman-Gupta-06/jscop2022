import Navbar from './Components/Navbar';
import './App.css';
import Landing from './Components/Landing';
import About from './Components/About';
import Faq from './Components/Faq';
import Timeline from './Components/Timeline';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Landing/>
      <About/>
      <Faq/>
      <Timeline/>
    </div>
  );
}

export default App;
