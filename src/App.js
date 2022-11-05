import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import AddUser from './components/AddUser';

function App() {
  return (
    <div className="App bg-secondary pb-2">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="About" element={<About />} />
        <Route exact path="Contact" element={<Contact />} />
        <Route exact path="/User/add" element={<AddUser />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
