// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header title="ToDo App"/>  
      <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
