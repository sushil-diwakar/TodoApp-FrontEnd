import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  const [mode,setMode] = useState('light');

  //Toggle Mode
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#635985";
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <Router>
      <Header title="To-Do App" mode={mode} toggleMode={toggleMode}/>  
      <Routes>
          <Route exact path="/" element={<Main mode={mode}/>}/>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/contact" element={<Contact mode={mode}/>}/>
      </Routes>
      <Footer mode={mode}/>
    </Router>
    
  );
}

export default App;
