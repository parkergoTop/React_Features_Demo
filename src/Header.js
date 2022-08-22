import React from "react";
import './Header.css';
import logo from './logo.svg';

export default function Header(){
  return(
    <nav className="nav-bar">
       
            <img src= {logo} className="logo-icon"/>
            <h1 className="nav-title">ReactFacts</h1>

            <h3 className="project-info">React Course - Project 1</h3>
    </nav>
  );
}