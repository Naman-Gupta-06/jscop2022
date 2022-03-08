import './App.css';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import About from './Components/About';
import Faq from './Components/Faq';
import Timeline from './Components/Timeline';
import Speakers from './Components/Speakers';
// import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Sponsors from './Components/Sponsors';


function App() {
  return (
    <div className="app">
      <Navbar/>
      <Landing/>
      <About/>
      <Speakers/>
      <Faq/>
      <Timeline/>
      <Contact/>
      {/* <Gallery/> */}
      {/* <Sponsors/> */}


    </div>
  );
}

export default App;
