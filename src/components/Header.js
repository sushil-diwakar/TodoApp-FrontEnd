import React from 'react';
import { Link } from "react-router-dom";


const Header = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode==='dark'?'dark':'light'} bg-${props.mode==='dark'?'dark':'light'}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                </li>
                
            </ul>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>props.toggleMode()}/> 
                <label style={{color:`${props.mode==='dark'?'white':'black'}`}}>Enable {props.mode==='dark'?'Light':'Dark'} Mode</label>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Header