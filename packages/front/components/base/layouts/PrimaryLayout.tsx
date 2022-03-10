import { useUser } from "@auth0/nextjs-auth0";
import React from "react";
import Head from "next/head";
import Menu from "../Menu";
import Footer from "../Footer";
//cuando realice el login auth0 importar aqui y todo lo ques conlleva la modificacion del archivo.

//recibe props children (palabra reservada) exclusivamente que es un componente de react, FC signica function component.
//usamos head para usar las etiquetas de next de head y aqui podemos añadir boostrap.

const PrimaryLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useUser();
  console.log(user);
  return (
    <>
      <div>
        <Head>
          <title>TOPAPP</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossOrigin="anonymous"
          ></link>
          <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
            integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
            integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
            crossOrigin="anonymous"
          ></script>
        </Head>
      </div>
      <div className="container">
        <Menu />
        <main>{children}</main>
      </div>
      <div className="container">
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default PrimaryLayout;
