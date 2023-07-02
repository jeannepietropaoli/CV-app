import React from "react";
import Section from "./Section";
import Modal from "./Modal";
import "../styles/PersonalInfos.css"
import phoneLogo from "../assets/phone.svg"
import mailLogo from "../assets/mail.png"
import profileLogo from "../assets/profile.png"
import locationLogo from "../assets/location.svg"

class PersonalInfos extends React.Component {
    constructor() {
        super()
        this.state = {
            infos : {
                firstName : "John",
                lastName: "Doe",
                title : "JUNIOR WEB DEVELOPPER",
                phoneNumber : "414-665-5632",
                email : "johndoe@gmail.com",
                city : "Quebec, QC",
                profile : "github - johndoe_here"
            },
            editMode : false
        }
    }

    editSection = (e) => {
        this.setState(prevState => {
            return ({
                    ...prevState,
                    infos : {
                        ...prevState.infos,
                        [e.target.name] : e.target.value
                    }
                })
        })
    }

    toggleEditMode = (e) => {
        e.preventDefault()
        this.setState(prevState => {
            return ({
                    ...prevState,
                    editMode : !prevState.editMode
                })
        })
    }

    render() {
        const {infos, editMode} = this.state
        const sectionElements = (
            <>
                <div className="personalInfos--name-container">
                        <h1>{`${infos.firstName} ${infos.lastName}`}</h1>
                        <h3>{infos.title}</h3>
                    </div>
                    <ul className="personalInfos--contact">
                        <li>
                            <div>
                                <img alt="phone logo" src={phoneLogo} />
                                {infos.phoneNumber}
                            </div>
                        </li>
                        <li>
                            <div>
                                <img alt="email logo" src={mailLogo} />
                                {infos.email}
                            </div>
                        </li>
                        <li>
                            <div>
                                <img alt="location logo" src={locationLogo} />
                                {infos.city}
                            </div>
                        </li>
                        <li>
                            <div>
                                <img alt="profile logo" src={profileLogo} />
                                {infos.profile}
                            </div>
                        </li>
                    </ul>
                </>
        )
        const formElements = Object.keys(this.state.infos).map((key, index) => {
            return (
                <div key={index} className="formField">
                    <label htmlFor={key}>{this.props.convertToReadableName(key)}</label>
                    <input value={infos[key]} name={key} id={key} onChange={this.props.editSection} />
                </div>
            )
        })

        return (
            <>
                <Section classToAdd="personalInfos" sectionElements={sectionElements} toggleEditMode={this.toggleEditMode}/>
                {editMode && <Modal classToAdd="personal-infos--form" formElements={formElements} toggleEditMode={this.toggleEditMode} />} 
            </>
        )
    }
}

export default PersonalInfos