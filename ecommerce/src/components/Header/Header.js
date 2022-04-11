import React from 'react'
import {GiRunningShoe} from 'react-icons/gi'
import './header.css'

const Header = () =>{
    return(
        <nav>
            <div className = "leftSideNav">
                <h1>Seoh's Shoes</h1>
            </div>
            <div className='rightSideNav'>
                <h2>Home</h2>
                <h2>Our Products</h2>
                <GiRunningShoe size={60}/>
            </div>
        </nav>
    )
}

export default Header;
