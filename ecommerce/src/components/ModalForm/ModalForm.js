import React from "react";
import { Link } from "react-router-dom";
import * as validation from '../RegEx'

const validateForm = () =>{
    let firstName = document.querySelector('#firstName').value
    let lastName = document.querySelector('#lastName').value
    let phoneNumber = document.querySelector('#phoneNumber').value
    let emailAddress = document.querySelector('#emailAddress').value

    let streetAddress = document.querySelector('streetAddress').value
    let city = document.querySelector('#city').value
    let zipCode = document.querySelector('#zipCode').value
    let cardNumber = document.querySelector('#cardNumber').value
    let cvv = document.querySelector('#cvv').value

}
const ModalForm = ({totalPrice}) =>{
return(
    <form className="ui form">
        <h4 className="ui dividing header">Shipping Information</h4>
        <div className="field">
            <label>Your Info</label>
            <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="First Name" className="field" id = "firstName"/>
                </div>
                <div className="field">
                    <input type="text" placeholder="Last Name" className="field" id = "lastName" />
                </div>
            </div>
            <div className="two fields">
                <div className="field">
                    <input type="tel" placeholder="Phone Number" className="field" id="phoneNumber"/>
                </div>
                <div className="field">
                    <input type="email" placeholder="Email Address" className="field" id= "emailAddress"/>
                </div>
            </div>
        </div>
        <div className="field">
            <label>Shipping Address</label>
            <div className=" four fields">
                <div className="field">
                    <label>Street Address</label>
                    <input type="text"  className="field" id="streetAddress"/>
                </div>
                <div className="field">
                    <label>City</label>
                    <input type="text" className="field" id = "city"/>
                </div>
                <div className="field">
                    <label>State</label>
                    <select className="ui fluid dropdown">
                    <option value=""></option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                    </select>
                </div>
                <div className="field">
                    <label>Zip Code</label>
                    <input type="text" className="field" id="zipCode"/>
                </div>
            </div>
            <div className="field">
                <label>Payment Info</label>
                <div className="four fields">
                    <div className="field">
                        <label>Card Number</label>
                        <input type="text" className="field" id="cardNumber" />
                    </div>
                    <div className="field">
                        <label>CVV/CVC</label>
                        <input type="text" className="field" id = "cvv"/>
                    </div>
                    <div className="field">
                        <label>Exp. Month</label>
                        <select className="ui fluid search dropdown">
                            <option value="">Month</option>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                    </div>
                    <div className="field">
                        <label>Exp. Year</label>
                        <select className="ui fluid search dropdown">
                            <option value="">Year</option>
                            <option value="1">2022</option>
                            <option value="2">2023</option>
                            <option value="3">2024</option>
                            <option value="4">2025</option>
                            <option value="5">2026</option>
                            <option value="6">2027</option>
                            <option value="7">2028</option>
                        </select>
                    </div>
                </div>

            </div>


        </div>
        <div className="ui segment">
            <div>
                <p><b>Subtotal: ${totalPrice.toFixed(2)}</b></p>
                <p><b>Tax: ${(totalPrice*.0635).toFixed(2)}</b></p>
                <p><b>Total: ${(totalPrice*1.0635).toFixed(2)}</b></p>

            </div>
            <div>
                <button className="negative ui button">
                        Back to cart 
                </button>
                <button className="positive ui button" onClick={(validateForm)}>
                    Checkout
                </button>
            </div>
        </div>
    </form>
    
)
}


export default ModalForm;