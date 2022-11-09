import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import ViewUser from './components/ViewUser';

function App() {
  return (
    <div className="App bg-secondary pb-2 overflow-hidden " style={{minHeight: "100vh"}}>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="About" element={<About />} />
        <Route path="User/add" element={<AddUser />} />
        <Route path="User/edit/:id" element={<EditUser />} />
        <Route path="User/:id" element={<ViewUser />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
