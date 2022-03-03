import React from "react";
import Link from "next/Link";
import { Nav } from "react-bootstrap";

const Menu = () => (
  // <ul>
  //   <li>
  //     <Link href="/topapp">Topapp info</Link>
  //   </li>
  //   <li>
  //     <Link href="/nanny">Soy nanny</Link>
  //   </li>
  //   <li>
  //     <Link href="/guarderia">Soy guardería</Link>
  //   </li>
  //   <li>
  //     <Link href="/padres">Soy padre</Link>
  //   </li>
  // </ul>

  // <Nav className="navbar navbar-expand-lg navbar-light bg-ligh">
  //   <div className="container">
  // <Link href="/">
  //   <a className="navbar-brand">Home</a>
  // </Link>
  //   </div>
  //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //     <ul className="navbar-nav mr-auto">
  //       <li className="nav-item active">
  // <Link href="/topapp">
  //   <a className="nav-link">Topapp</a>
  // </Link>
  //       </li>
  //       <li className="nav-item">
  // <Link href="/nanny">
  //   <a className="nav-link">Soy nanny</a>
  // </Link>
  //       </li>
  //       <li className="nav-item">
  // <Link href="/guarderia">
  //   <a className="nav-link">Soy guarderia</a>
  // </Link>
  //       </li>
  //       <li className="nav-item dropdown ">
  //         <Link
  //           href="/padres"
  //           id="navbarDropdownMenuLink"
  //           data-toggle="dropdown"
  //           aria-haspopup="true"
  //           aria-expanded="false"
  //         >
  //           <a className="nav-link dropdown-toggle">Soy padre</a>
  //         </Link>
  //         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
  //           <Link href="/match">
  //             <a className="dropdown-item">Match</a>
  //           </Link>
  //           <div className="dropdown-divider"></div>
  //         </div>
  //       </li>
  //     </ul>
  //   </div>
  // </Nav>

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
          <Link href="/nanny">
            <a className="nav-link">Soy nanny</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/guarderia">
            <a className="nav-link">Soy guardería</a>
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link href="/padres">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Soy padre
            </a>
          </Link>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <Link href="/match">
              <a className="dropdown-item" href="#">
                Match
              </a>
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <Link href="/match">
            <a className="nav-link">Haz tu match</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Menu;
