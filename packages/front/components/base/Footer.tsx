import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Footer1 = styled.footer`
  font-family: nunito-sans, sans-serif;
  text-align: center;
  margin-top: 100px;
`;

const Footer = () => (
  <div>
    <Footer1>
      <Image src="/img/family.png" width={80} height={80} />
      <p>&copy;2022 Topapp by Almudena Pérez</p>
      <a href="https://github.com/Almuperez/topapp">Almudena/Topapp Github</a>
    </Footer1>
  </div>
);

export default Footer;
