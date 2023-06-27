import React from "react";
import "../styles/PersonalInfos.css"
import phoneLogo from "../assets/phone.svg"
import mailLogo from "../assets/mail.png"
import profileLogo from "../assets/profile.png"
import locationLogo from "../assets/location.svg"
import PersonalInfosModal from "./PersonalInfosModal";
import pencilLogo from "../assets/pencil.png"

class PersonalInfos extends React.Component {
    constructor() {
        super()
        this.state = {
            infos : {
                firstName : "John",
                lastName: "Doe",
                title : "JUNIOR WEB DEVELOPPER",
                phoneNumber : "XXX-XXX-XXXX",
                email : "johndoe@gmail.com",
                city : "Quebec, QC",
                profile : "github - johndoe_here"
            },
            editMode : false
        }

        this.editSection = this.editSection.bind(this)
        this.submitChanges = this.submitChanges.bind(this)
        this.switchToEditMode = this.switchToEditMode.bind(this)
    }

    editSection(e) {
        this.setState(prevState => {
            return (
                {
                    ...prevState,
                    infos : {
                        ...prevState.infos,
                        [e.target.name] : e.target.value
                    }
                }
            )
        })
    }

    submitChanges(e) {
        e.preventDefault()
        console.log('submit')
        this.setState(prevState => {
            return (
                {
                    ...prevState,
                    editMode : false
                }
            )
        })
    }

    switchToEditMode() {
        this.setState(prevState => {
            return (
                {
                    ...prevState,
                    editMode : true
                }
            )
        })
    }

    render() {
        const {infos, editMode} = this.state

        return (
            <div className="personalInfos">
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
                {!editMode && <button className="edit-section-button" onClick={this.switchToEditMode}><img alt="edit button" src={pencilLogo}/></button>}
                {editMode && <PersonalInfosModal infos={this.state.infos} editSection={this.editSection} submitChanges={this.submitChanges} />}
            </div>
        )
    }
}

export default PersonalInfos