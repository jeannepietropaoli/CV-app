import React from "react";
import "../styles/PersonalInfos.css"
import phoneLogo from "../assets/phone.svg"
import mailLogo from "../assets/mail.png"
import profileLogo from "../assets/profile.png"
import locationLogo from "../assets/location.svg"

class PersonalInfos extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName : "John",
            lastName: "Doe",
            title : "JUNIOR WEB DEVELOPPER",
            phoneNumber : "XXX-XXX-XXXX",
            email : "johndoe@gmail.com",
            city : "Quebec, QC",
            profile : "github - johndoe_here"
        }
    }

    render() {
        return (
            <div className="personalInfos">
                <div className="personalInfos--name-container">
                    <h1>{`${this.state.firstName} ${this.state.lastName}`}</h1>
                    <h3>{this.state.title}</h3>
                </div>
                <ul className="personalInfos--contact">
                    <li>
                        <p>
                            <img alt="phone logo" src={phoneLogo} />
                            {this.state.phoneNumber}
                        </p>
                    </li>
                    <li>
                        <p>
                            <img alt="email logo" src={mailLogo} />
                            {this.state.email}
                        </p>
                    </li>
                    <li>
                        <p>
                            <img alt="location logo" src={locationLogo} />
                            {this.state.city}
                        </p>
                    </li>
                    <li>
                        <p>
                            <img alt="profile logo" src={profileLogo} />
                            {this.state.profile}
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default PersonalInfos