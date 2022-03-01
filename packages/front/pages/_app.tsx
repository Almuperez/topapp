import React from "react";
import Menu from "../components/Menu";

const MyApp = ({ Component, pageProps }) => (
  <>
    <header>
      <Menu />
    </header>
    <main>
      {/* // pintamos un component para renderizar todas las páginas y le pasamos un pageprops por si nos hiciera falta */}
      <Component {...pageProps} />
    </main>
  </>
);

export default MyApp;
