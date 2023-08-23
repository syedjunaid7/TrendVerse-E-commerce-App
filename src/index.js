import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProviderProps } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProviderProps theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProviderProps>
  </React.StrictMode>
);
