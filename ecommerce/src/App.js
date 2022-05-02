import React from "react";
import Header from "./components/Header";
import Content from "./components/Content"
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

 const App = () =>{
     return (
         <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="products" element={<Content />} />
                    <Route path ="/cart" element={<Cart />} />
                </Routes>
            </div>
         </BrowserRouter>
     )
 }

 export default App;