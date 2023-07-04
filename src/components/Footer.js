import React from 'react'
import { Link } from "react-router-dom";

const Footer = ({mode}) => {
  return (
    <div className="footer-basic">
        <footer style={{color:`${mode==='dark'?'white':'black'}`}}>
            <ul className="list-inline">
                <li className="list-inline-item"><Link to="/">Home</Link></li>
                <li className="list-inline-item"><Link to="/about">About</Link></li>
                <li className="list-inline-item"><Link to="/contact">Contact</Link></li>
            </ul>
            <p className="copyright">ToDo App - Create By <a href="https://in.linkedin.com/in/sushil-diwakar" target="_blank">Sushil Diwakar</a> © 2023</p>
        </footer>
    </div>
  )
}

export default Footer