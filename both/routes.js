import React from "react"; //React needed for the <Component /> Syntax
import { App } from "../imports/App";
const routes = [
  {
    path: "*",
    action() {
      return {
        title: "ViewModel",
        component: <App />
      };
    }
  }
];

export default routes;
