import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as validation from "../RegEx";
import { connect } from "react-redux";
import { resetCart } from "../../redux/Shopping/ShoppingActions";

const ModalForm = ({ totalPrice, setOpenModal, resetCart }) => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [homeState, setHomeState] = useState("");
  const [zip, setZip] = useState("");
  const [card, setCard] = useState("");
  const [cvv, setCvv] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [error, setError] = useState("");
  useEffect(()=>{
   alert(error)
  },[error])

  
  const handleSubmit =  (e) => {
    e.preventDefault();
    setError("")
    let date = new Date();
    let currentYear = date.getFullYear();

    if (validation.firstNameCheck.test(firstName) === false) {
      setError("Invalid First Name");
    } else if (validation.lastNameCheck.test(lastName) === false) {
      setError("Invalid Last Name");
    } else if (validation.phoneNumberCheck.test(phone) === false) {
      setError("Invalid Phone Number");
    } else if (validation.emailCheck.test(email) === false) {
      setError("Invalid Email");
    } else if (validation.streetAddressCheck.test(address) === false) {
      setError("Invalid Street Address");
    } else if (validation.cityCheck.test(city) === false) {
      setError("Invalid City");
    } else if (validation.zipCheck.test(zip) === false) {
      setError("Invalid Zip Code");
    } else if (validation.cardCheck.test(card) === false) {
      setError("Invalid Card Number");
    } else if (validation.cvvCheck.test(cvv) === false) {
      setError("Invalid Cvv");
    } else if (homeState === "") {
      setError("Please Select a State");
    } else if (expMonth === "" || expYear === "") {
      setError("Please Fill in Expiration Date");
     
    } else if (parseInt(expYear) === currentYear) {
      let currentMonth = date.getMonth();
      if (parseInt(expMonth) < currentMonth) {
        setError("Invalid Expiration Date");
      }
    } 
    console.log(error)
    // else {
    //   navigate("/orderConfirmation");
    //   document.querySelector("#checkoutForm").submit();
    //   resetCart();
    // }
  };
  return (
    <form className="ui form" id="checkoutForm" onSubmit={handleSubmit}>
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
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="field" id="lastNameContainer">
            <input
              type="text"
              placeholder="Last Name"
              className="field"
              id="lastName"
              value={lastName}
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="two fields">
          <div className="field" id="phoneContainer">
            <input
              type="tel"
              placeholder="Phone Number"
              className="field"
              value={phone}
              id="phoneNumber"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="field" id="emailContainer">
            <input
              type="email"
              value={email}
              placeholder="Email Address"
              className="field"
              id="emailAddress"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="field">
        <label>Shipping Address</label>
        <div className=" four fields">
          <div className="field" id="streetAddressContainer">
            <label>Street Address</label>
            <input
              type="text"
              className="field"
              value={address}
              id="streetAddress"
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="field" id="cityContainer">
            <label>City</label>
            <input
              type="text"
              className="field"
              id="city"
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="field" id="stateContainer">
            <label>State</label>
            <select
              className="ui fluid dropdown"
              value={homeState}
              id="stateSelect"
              required
              onChange={(e) => setHomeState(e.target.value)}
            >
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
          <div className="field" id="zipCodeContainer">
            <label>Zip Code</label>
            <input
              type="text"
              className="field"
              id="zipCode"
              value={zip}
              required
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label>Payment Info</label>
          <div className="four fields">
            <div className="field" id="cardNumberContainer">
              <label>Card Number</label>
              <input
                type="text"
                className="field"
                id="cardNumber"
                value={card}
                required
                onChange={(e) => setCard(e.target.value)}
              />
            </div>
            <div className="field" id="cvvContainer">
              <label>CVV/CVC</label>
              <input
                type="text"
                className="field"
                id="cvv"
                value={cvv}
                required
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
            <div className="field" id="expMonthContainer">
              <label>Exp. Month</label>
              <select
                className="ui fluid search dropdown"
                value={expMonth}
                id="expMonthSelect"
                required
                onChange={(e) => setExpMonth(e.target.value)}
              >
                <option value="">Month</option>
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
              <select
                className="ui fluid search dropdown"
                value={expYear}
                id="expYearSelect"
                required
                onChange={(e) => setExpYear(e.target.value)}
              >
                <option value="">Year</option>
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
          <button
            className="negative ui button"
            type="button"
            onClick={() => setOpenModal(false)}
          >
            Back to cart
          </button>
          <button className="positive ui button" type="submit">
            Checkout
          </button>
        </div>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetCart: () => dispatch(resetCart()),
  };
};

export default connect(null, mapDispatchToProps)(ModalForm);
