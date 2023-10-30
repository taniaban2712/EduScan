import React from "react";
import ReactDOMClient from "react-dom/client";
import { StudentLogin } from "./screens/StudentLogin";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<StudentLogin />);
