import React from "react"
import './homepage.css'
import {Link} from 'react-router-dom'

const HomePage = () =>{
    return(
        <div className="homePageContainer">
            <div className="forHomePageBlackOverlay">
                <div className="centerContent">
                    <h2 id="shoeTitle">Seoh's Shoes</h2>
                    <p id="shoeDes">Shoes for Everyone</p>
                    <Link to='/products'>
                        <button className="ui inverted massive blue button">Shop Now!</button>
                    </Link>
                   
                </div>
            </div>
        </div>
    )
}

export default HomePage;