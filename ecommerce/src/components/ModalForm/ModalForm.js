import React from "react";


const ModalForm = () =>{
return(
    <form className="ui form">
        <h4 className="ui dividing header">Shipping Information</h4>
        <div className="field">
            <label>Your Info</label>
            <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="First Name" className="field"/>
                </div>
                <div className="field">
                    <input type="text" placeholder="Last Name" className="field"/>
                </div>
            </div>
            <div className="two fields">
                <div className="field">
                    <input type="tel" placeholder="Phone Number" className="field"/>
                </div>
                <div className="field">
                    <input type="email" placeholder="Email Address" className="field"/>
                </div>
            </div>
        </div>
        <div className="field">
            <label>Shipping Address</label>
            <div className=" four fields">
                <div className="field">
                    <label>Street Address</label>
                    <input type="text"  className="field"/>
                </div>
                <div className="field">
                    <label>City</label>
                    <input type="text" className="field"/>
                </div>
                <div class="field">
                    <label>State</label>
                    <select class="ui fluid dropdown">
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
                    <input type="text" className="field"/>
                </div>


            </div>
        </div>
    </form>
)
}


export default ModalForm;