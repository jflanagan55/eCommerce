import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './SuccessOrderPage.css'
const SuccessOrderPage  =()=>{
    const navigate = useNavigate()
    useEffect(()=>{
        setTimeout(()=>navigate('/'),5000)
})
    
    
    return(
        <div className="successPage">
            <div className="ui active dimmer">
                <div className="ui indeterminate text loader">
                    <h2>Thank you for your order</h2>
                    <h4>You are now being redirected to the home page</h4>
                    </div>
            </div>
        </div>
    )
}

export default SuccessOrderPage;