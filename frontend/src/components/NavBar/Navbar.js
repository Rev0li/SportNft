import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img-svg/logo.svg";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Site Name
      </Link>

      <img src={Logo} alt="logo" />
      <ul>
        <Link to="/">Accueil</Link>
        <Link to="/about">About</Link>

        <Link to="/Contact">Contact</Link>
      </ul>
    </nav>
  );
}
