// import react and reactDOM libs
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//get a reference to div with id root
const el=document.getElementById('root');

// tell react to take contronl 
const root=ReactDOM.createRoot(el);

// create a component

// show component on screen
root.render(<App/>);