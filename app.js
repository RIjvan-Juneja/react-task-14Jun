import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './componants/style.css'

// const element = React.createElement("h1",{id : "heading"},"Rijvan Juneja");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element)

ReactDOM.createRoot(document.getElementById('root')).render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>
) 

// automatic reload : HMR -> Hot module Replacement 
// File Watcher Algorithm  -> c++