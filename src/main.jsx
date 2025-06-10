import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Context/CartProvider.jsx";
import { Bounce, ToastContainer } from "react-toastify";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <Auth0Provider
        domain="dev-25cy0rmp540mq5i8.us.auth0.com"
        clientId="ayYLyevIMHgo8ld2XugoieZi6wfi0wQT"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
      </Auth0Provider>
      ,
    </CartProvider>
  </BrowserRouter>
);
