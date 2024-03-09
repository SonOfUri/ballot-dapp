import React from "react";
import ReactDOM from "react-dom/client";
import { Theme } from "@radix-ui/themes";
import App from "./App.jsx";
import "./index.css";
import {ToastContainer} from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Theme>
            <App />
            <ToastContainer />
        </Theme>
    </React.StrictMode>
);
