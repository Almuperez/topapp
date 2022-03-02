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

  <Nav className="nnavbar navbar-expand-lg navbar-ligth bg-ligth">
    <div className="container">
      <Link href="/">
        <a className="navbar-brand">Home</a>
      </Link>
    </div>
    <div className="collapse navbar-collapse" id="navbarsExample07XL">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link href="/topapp">
            <a className="nav-link">Topapp</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/nanny">
            <a className="nav-link">Soy nanny</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/guarderia">
            <a className="nav-link">Soy guarderia</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/padres">
            <a className="nav-link">Soy padre</a>
          </Link>
        </li>
      </ul>
    </div>
  </Nav>
);

export default Menu;
