import { RouterProvider } from "react-router-dom";

// CONFIG
import { ApolloClient } from "@apolloConfig";
import { CartContextProvider } from "@contexts";
import { router } from "@/router";

function App() {
  return (
    <ApolloClient>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </ApolloClient>
  );
}

export default App;
