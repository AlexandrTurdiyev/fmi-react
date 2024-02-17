import React from "react";
import { Link } from "react-router-dom";
import styles from './Navigation.module.css'

const Navigation = () => {
    return (
      <nav className={styles.nav}>
        <ul>
            <li> 
                <h1>
                    <Link to="/">FM Interiors</Link>       
                </h1>
            </li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/publications">Publications</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    );
  };
  
  export default Navigation;