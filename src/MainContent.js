import React from "react";
import './MainContent.css'


export default function MainContent(){
  return(
    <section className="hero">
    <h1 className="content-title">Fun Facts About React</h1>
    <ul className="list">
        <li>Was First Released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprice apps, including mobile apps</li>
    </ul>
    </section>
  );

}