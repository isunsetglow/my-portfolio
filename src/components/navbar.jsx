import React from "react";
import "./navbar.css";
import githubImage from "../assets/github.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
  <nav>
    <link href="https://fonts.googleapis.com/css2?family=Signika+Negative:wght@300..700&display=swap" rel="stylesheet"/>
    {/* <Link to="/" className="title">Maria Hernandez</Link> */}
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/projects">Projects</Link>
        </li>
        <li>
            <Link to="/photography">Photography</Link>
        </li>
        <li>
            <Link to="/resume">Resume</Link>
        </li>
        <li>
            <a href="https://github.com/isunsetglow"><img src={githubImage}/></a>
        </li>
    </ul>
  </nav>
  )
}