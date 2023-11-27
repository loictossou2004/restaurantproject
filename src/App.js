import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Order from "./components/Order";
import Contact from "./components/Contact";
import Menu from "./components/Menu";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Order" element={<Order/>}/>        
        <Route path="/Contact" element={<Contact/>}/>        
        <Route path="/Menu" element={<Menu/>}/>        
      </Routes>
    </React.Fragment>
  );
}

export default App;
