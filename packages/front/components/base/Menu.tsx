import React from "react";
import Link from "next/Link";
import { Navbar } from "react-bootstrap";

const Menu = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link href="/">
      <a className="navbar-brand">Home</a>
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link href="/topapp">
            <a className="nav-link" href="#">
              Topapp <span className="sr-only">(info)</span>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/login">
            <a className="nav-link">Login</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/match">
            <a className="nav-link">Tu match</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Menu;
