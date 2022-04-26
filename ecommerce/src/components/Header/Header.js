import React from 'react'
import {GiRunningShoe} from 'react-icons/gi'
import './header.css'
import {Link} from 'react-router-dom'

const Header = () =>{
    return(
        <nav>
            <div className = "leftSideNav">
                <h1>Seoh's Shoes</h1>
            </div>
            <div className='rightSideNav'>
                <Link to="/home">Home</Link>
                <Link to="/products">Our Products</Link>
                <GiRunningShoe size={60}/>
            </div>
        </nav>
    )
}

export default Header;
