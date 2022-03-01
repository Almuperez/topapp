import React from "react";
import Link from "next/Link";

const Menu = () => (
  <ul>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/topapp">Topapp info</Link>
    </li>
    <li>
      <Link href="/nanny">Soy nanny</Link>
    </li>
    <li>
      <Link href="/guarderia">Soy guardería</Link>
    </li>
    <li>
      <Link href="/padres">Soy padre</Link>
    </li>
  </ul>
);

export default Menu;
