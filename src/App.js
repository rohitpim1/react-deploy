import { Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import Navigation from './Navigation';
import Service from './Service';
function App() {
  return (
    <div className='App'>
    <Navigation/>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/about' exact element={<About/>}/>
      <Route path='/service' exact element={<Service/>}/>
      <Route path='/contact' exact element={<Contact/>}/>
      <Route path='*' exact element={<p>404 error</p>}/>
    </Routes>
    </div>
  );
}

export default App;
