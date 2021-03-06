import React from "react";
import Header from "./components/Header";
import Content from "./components/Content"
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import SuccessOrderPage from "./components/SuccessOrderPage";
import HideNav from "./components/HideNav";
import ShowNav from "./components/ShowNav";
import IncorrectPath from "./components/IncorrectPath";

 const App = () =>{
     
     return (
         
         <BrowserRouter>
            <div>   
                <Routes>
                <Route element={<ShowNav/>}>
                        <Route exact path="/" element={<HomePage />} />
                        <Route exact path="products" element={<Content />} />
                        <Route exact path ="/cart" element={<Cart />} />
                    </Route>
                    <Route element={<HideNav/>}>
                        <Route path ="/orderConfirmation" element={<SuccessOrderPage />} />
                        <Route path = "*" element={<IncorrectPath/>}/>
                    </Route>
                    
                </Routes>
            </div>
         </BrowserRouter>
         
     )
 }

//  /

 export default App;