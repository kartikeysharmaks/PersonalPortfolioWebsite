import "./index.css";
import "./styles/global.scss";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { PortfolioProvider } from "./context/PortfolioContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <PortfolioProvider>
        <Suspense fallback={null}>
          <App />
        </Suspense>
      </PortfolioProvider>
    </HelmetProvider>
  </React.StrictMode>
);
