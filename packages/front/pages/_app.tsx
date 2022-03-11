import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { UserProvider } from "@auth0/nextjs-auth0";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "../lib/redux/store";
import PrimaryLayout from "../components/base/layouts/PrimaryLayout";
import { ChakraProvider } from "@chakra-ui/react";

const { store, persistor } = configureStore();

//Props que trae por defecto app de next. Componentes traremos component, pageprops y router.
const MyApp = ({ Component, pageProps, router, initialUser, hello }) => {
  // console.log("router", router.asPath);
  // console.log("hola", hello);
  // console.log("component", Component);
  // console.log("pageProps", pageProps);
  return (
    // Provider de redux: engloba la app
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* userProvider: hace que ath0 englboe la app */}
        <UserProvider user={initialUser}>
          {/* //PrimaryLayaout:generemos todo el menu  */}
          <PrimaryLayout>
            <main>
              <div className="page">
                <ChakraProvider>
                  <Component {...pageProps} />
                </ChakraProvider>
              </div>
            </main>
          </PrimaryLayout>
        </UserProvider>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
