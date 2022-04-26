import React from "react";
import Header from "./components/Header";
import Content from "./components/Content"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

 const App = () =>{
     return (
         <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="home" element={<HomePage />} />
                    <Route path="products" element={<Content />} />
                </Routes>
            </div>
         </BrowserRouter>
     )
 }

 export default App;