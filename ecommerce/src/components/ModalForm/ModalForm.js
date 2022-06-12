import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as validation from "../RegEx";
import {connect} from 'react-redux'
import { resetCart } from "../../redux/Shopping/ShoppingActions";



const ModalForm = ({ totalPrice, setOpenModal, resetCart} ) => {
    const navigate = useNavigate();
    const errorCreator = (incorrectVal) => {
        let errorMessage = `Please enter a valid ${incorrectVal}`;
        let errorDiv = document.createElement("div");
        errorDiv.innerText = errorMessage;
        errorDiv.style.color = "#cc0000";
        errorDiv.classList.add("inputError");
        return errorDiv;
      };
      
      
      
      const validateForm = (event) => {
        event.preventDefault();
        let date = new Date()
        let year = date.getFullYear()
        let firstName = document.querySelector("#firstName").value;
        let lastName = document.querySelector("#lastName").value;
        let phoneNumber = document.querySelector("#phoneNumber").value;
        let emailAddress = document.querySelector("#emailAddress").value;
        let streetAddress = document.querySelector("#streetAddress").value;
        let city = document.querySelector("#city").value;
        let zipCode = document.querySelector("#zipCode").value;
        let cardNumber = document.querySelector("#cardNumber").value;
        let cvv = document.querySelector("#cvv").value;
      
        if (document.contains(document.querySelector(".inputError"))) {
          document.querySelector(".inputError").remove();
        }
      
        if (validation.firstNameCheck.test(firstName) === false) {
          let error = errorCreator("first name");
          let firstNameContainer = document.querySelector("#firstNameContainer");
          firstNameContainer.append(error);
        } else if (validation.lastNameCheck.test(lastName) === false) {
          let error = errorCreator("last name");
          let lastNameContainer = document.querySelector("#lastNameContainer");
          lastNameContainer.append(error);
        } else if (validation.phoneNumberCheck.test(phoneNumber) === false) {
          let error = errorCreator("phone number");
          let phoneContainer = document.querySelector("#phoneContainer");
          phoneContainer.append(error);
        } else if (validation.emailCheck.test(emailAddress) === false) {
          let error = errorCreator("email address");
          let emailContainer = document.querySelector("#emailContainer");
          emailContainer.append(error);
        } else if (validation.streetAddressCheck.test(streetAddress) === false) {
          let error = errorCreator("street address");
          let streetAddressContainer = document.querySelector("#streetAddressContainer");
          streetAddressContainer.append(error);
        } else if (validation.cityCheck.test(city) === false) {
          let error = errorCreator("city");
          let cityContainer = document.querySelector("#cityContainer");
          cityContainer.append(error);
        } else if (validation.zipCheck.test(zipCode) === false) {
          let error = errorCreator("zip code");
          let zipCodeContainer = document.querySelector("#zipCodeContainer");
          zipCodeContainer.append(error);
        } else if (validation.cardCheck.test(cardNumber) === false) {
          let error = errorCreator("card number");
          let cardNumberContainer = document.querySelector("#cardNumberContainer");
          cardNumberContainer.append(error);
        } else if (validation.cvvCheck.test(cvv) === false) {
          let error = errorCreator("cvv/cvc");
          let cvvContainer = document.querySelector("#cvvContainer");
          cvvContainer.append(error);
          
        } else if(document.querySelector('#stateSelect').value == "blank"){
            let errorDiv = document.createElement('div');
            errorDiv.innerText = "Please select a State"
            let stateContainer = document.querySelector('#stateContainer')
            stateContainer.append(errorDiv)
            errorDiv.style.color = "#cc0000";
            errorDiv.classList.add("inputError");
        }
        else if(document.querySelector('#expMonthSelect').value === "blank" || document.querySelector('#expYearSelect').value === "blank"){
          let errorDiv = document.createElement('div');
          errorDiv.innerText = "Please select a Complete Expiration Date"
          let expMonthContainer = document.querySelector('#expMonthContainer')
          expMonthContainer.append(errorDiv)
          errorDiv.style.color = "#cc0000";
          errorDiv.classList.add("inputError");
        }
      
        else if(parseInt(document.querySelector('#expYearSelect').value)===year){
            let date = new Date()
            let month = date.getMonth()
            if(parseInt(document.querySelector('#expMonthSelect').value) < month ){
              let errorDiv = document.createElement('div');
              errorDiv.innerText = "Please select a Valid Expiration Date"
              let expMonthContainer = document.querySelector('#expMonthContainer')
              expMonthContainer.append(errorDiv)
              errorDiv.style.color = "#cc0000";
              errorDiv.classList.add("inputError");
            }
        }
        else {
            navigate('/orderConfirmation')
            document.querySelector("#checkoutForm").submit();
            resetCart();
         
        }
      };
  return (
    <form className="ui form"  id="checkoutForm">
      <h4 className="ui dividing header">Shipping Information</h4>
      <div className="field">
        <label>Your Info</label>
        <div className="two fields">
          <div className="field" id="firstNameContainer">
            <input
              type="text"
              placeholder="First Name"
              className="field"
              id="firstName"
              required
            />
          </div>
          <div className="field" id="lastNameContainer">
            <input
              type="text"
              placeholder="Last Name"
              className="field"
              id="lastName"
              required
            />
          </div>
        </div>
        <div className="two fields">
          <div className="field" id="phoneContainer">
            <input
              type="tel"
              placeholder="Phone Number"
              className="field"
              id="phoneNumber"
              required
            />
          </div>
          <div className="field" id="emailContainer">
            <input
              type="email"
              placeholder="Email Address"
              className="field"
              id="emailAddress"
              required
            />
          </div>
        </div>
      </div>
      <div className="field">
        <label>Shipping Address</label>
        <div className=" four fields">
          <div className="field" id="streetAddressContainer">
            <label>Street Address</label>
            <input type="text" className="field" id="streetAddress" required/>
          </div>
          <div className="field" id="cityContainer">
            <label>City</label>
            <input type="text" className="field" id="city" required/>
          </div>
          <div className="field" id="stateContainer">
            <label>State</label>
            <select className="ui fluid dropdown" id= "stateSelect" required>
              <option value="blank"></option>
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
          <div className="field" id="zipCodeContainer">
            <label>Zip Code</label>
            <input type="text" className="field" id="zipCode" required/>
          </div>
        </div>
        <div className="field">
          <label>Payment Info</label>
          <div className="four fields">
            <div className="field" id="cardNumberContainer">
              <label>Card Number</label>
              <input type="text" className="field" id="cardNumber" required/>
            </div>
            <div className="field" id="cvvContainer">
              <label>CVV/CVC</label>
              <input type="text" className="field" id="cvv" required/>
            </div>
            <div className="field" id="expMonthContainer">
              <label>Exp. Month</label>
              <select className="ui fluid search dropdown" id="expMonthSelect" required>
                <option value="blank">Month</option>
                <option value="0">January</option>
                <option value="1">February</option>
                <option value="2">March</option>
                <option value="3">April</option>
                <option value="4">May</option>
                <option value="5">June</option>
                <option value="6">July</option>
                <option value="7">August</option>
                <option value="8">September</option>
                <option value="9">October</option>
                <option value="10">November</option>
                <option value="11">December</option>
              </select>
            </div>
            <div className="field" id="expYearContainer">
              <label>Exp. Year</label>
              <select className="ui fluid search dropdown" id="expYearSelect" required>
                <option value="blank">Year</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="ui segment">
        <div>
          <p>
            <b>Subtotal: ${totalPrice.toFixed(2)}</b>
          </p>
          <p>
            <b>Tax: ${(totalPrice * 0.0635).toFixed(2)}</b>
          </p>
          <p>
            <b>Total: ${(totalPrice * 1.0635).toFixed(2)}</b>
          </p>
        </div>
        <div>
          <button className="negative ui button" type="button" onClick ={()=>setOpenModal(false)} >Back to cart</button>
          <button className="positive ui button" type="submit" onClick={validateForm}>Checkout</button>
        </div>
      </div>
    </form>
  );
};

const mapDispatchToProps = dispatch => {
    return {
        resetCart: ()=> dispatch(resetCart())
    }
}

export default connect(null, mapDispatchToProps)(ModalForm);
