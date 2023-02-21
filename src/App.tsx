import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from "redux-persist/integration/react";
import '@aws-amplify/ui-react/styles.css';

// CONFIG
import { ApolloClient } from "@apolloConfig";
import { CartContextProvider } from "@contexts";
import { router } from "@/router";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloClient>
          <CartContextProvider>
            <RouterProvider router={router} />
          </CartContextProvider>
        </ApolloClient>
      </PersistGate>
    </Provider>
  );
}

export default App;
