import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PrimaryLayout from "../components/layouts/PrimaryLayout";

//me traigo las props que trae por defecto la app next, todo bajo el marco de una funcion . como componentes traremos component, pageprops y router.
const MyApp = ({ Component, pageProps, router, hello }) => {
  console.log("router", router.asPath);
  console.log("hola", hello);
  console.log("component", Component);
  console.log("pageProps", pageProps);
  return (
    <PrimaryLayout>
      {/* camibar estilos, puesto estos para no olvidar . lo que hacen es ir desapareciendo*/}
      <style jsx>
        {`
          main {
            position: relative;
            overflow: hidden;
          }
          .page {
            transition: 0.5s all;
            grid-row-start: 1;
            grid-column-start: 1;
          }
          .exit-active {
            transform: translateX(-100%);
          }
        `}
      </style>

      {/* estilos para el menu */}
      <main>
        <TransitionGroup className="todo-list" style={{ display: "grid" }}>
          <CSSTransition
            key={router.asPath}
            timeout={1500}
            transitionname="app-page"
          >
            <div className="page">
              <Component {...pageProps} />
            </div>
          </CSSTransition>
        </TransitionGroup>
      </main>
    </PrimaryLayout>
  );
};

export default MyApp;
