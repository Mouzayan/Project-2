import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="headerDiv">
      <nav>
        <Link className="logo" to="/about">
          refrigerator haiku
        </Link>
      </nav>
      <nav className="logIn">LOG IN</nav>
    </div>
  );
}

export default Header;
