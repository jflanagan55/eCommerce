import React from "react";
import {Link} from 'react-router-dom'


const IncorrectPath = () =>{
    return(
        <div className="homePageContainer">
            <div className="forHomePageBlackOverlay">
                <div className="centerContent">
                    <h2 style={{color: "white"}}>Uh oh, we couldn't find the page you were looking for</h2>
                    <h2 style={{color: "white"}}>Sorry about that</h2>
                    <Link to='/products'>
                        <button className="ui inverted massive blue button">Back Home</button>
                    </Link>
                   
                </div>
            </div>
        </div>
    )

}

export default IncorrectPath
