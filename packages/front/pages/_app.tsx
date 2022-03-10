import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { UserProvider } from "@auth0/nextjs-auth0";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import configureStore from "../lib/redux/store";
import PrimaryLayout from "../components/base/layouts/PrimaryLayout";

import { ChakraProvider } from "@chakra-ui/react";

const { store, persistor } = configureStore();

//me traigo las props que trae por defecto la app next, todo bajo el marco de una funcion . como componentes traremos component, pageprops y router.
const MyApp = ({ Component, pageProps, router, initialUser, hello }) => {
  console.log("router", router.asPath);
  console.log("hola", hello);
  console.log("component", Component);
  console.log("pageProps", pageProps);
  return (
    // engloba la app bajo redux
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* //toda la app esta englobada por userProvider que lo da auth0 */}
        <UserProvider user={initialUser}>
          {/* //PrimaryLayaout es donde generemos todo el menu  */}
          <PrimaryLayout>
            {/* camibar estilos, puesto estos para no olvidar . lo que hacen es ir desapareciendo*/}
            {/* <style jsx>
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
            </style> */}

            {/* estilos para el menu */}
            <main>
              <TransitionGroup
                className="todo-list"
                style={{ display: "grid" }}
              >
                <CSSTransition
                  key={router.asPath}
                  timeout={1500}
                  transitionname="app-page"
                >
                  <div className="page">
                    {/* <ChakraProvider> */}
                    <Component {...pageProps} />
                    {/* </ChakraProvider> */}
                  </div>
                </CSSTransition>
              </TransitionGroup>
            </main>
          </PrimaryLayout>
        </UserProvider>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
