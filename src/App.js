import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="About" element={<About />}></Route>
        <Route exact path="Contact" element={<Contact />}></Route>
        <Route exact path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
