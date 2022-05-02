import React, {useState, useEffect} from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import './header.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
const Header = ({cart}) =>{
    const [cartCount, setCartCount] = useState(0)

    useEffect (() => {
        let count = 0;
        cart.forEach(item =>{
            count += item.qty
        })
        setCartCount(count)
    }, [cart, cartCount])
    return(
        <nav>
            <div className = "leftSideNav">
                <h1>Seoh's Shoes</h1>
            </div>
            <div className='rightSideNav'>
                <Link to="/">Home</Link>
                <Link to="/products">Our Products</Link>
                <Link to="/cart">
                    <FaShoppingCart size = {30} />
                    <span>{cartCount}</span>
                </Link>
                
            </div>
        </nav>
    )
}

const mapStateToProps = state =>{
    return{
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Header);
