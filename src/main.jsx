import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.jsx";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CLIENT_ID } from "./utils/constants.jsx";

const clientId = CLIENT_ID;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <Provider store={appStore}>
        <App />
      </Provider>
    </GoogleOAuthProvider>
  </StrictMode>
);
