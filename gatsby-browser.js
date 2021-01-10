import "./src/css/style.css";

import React from "react";
import { Provider as AuthProvider } from "./src/context/AuthContext";

export const wrapRootElement = ({ element }) => {
  return <AuthProvider>{element}</AuthProvider>;
};
