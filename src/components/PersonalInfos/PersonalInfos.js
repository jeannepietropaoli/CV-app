import React from "react";
import "../../styles/PersonalInfos.css"
import phoneLogo from "../../assets/phone.svg"
import mailLogo from "../../assets/mail.png"
import profileLogo from "../../assets/profile.png"
import locationLogo from "../../assets/location.svg"
import ModalPersonalInfos from "./ModalPersonalInfos";
import pencilLogo from "../../assets/pencil.png"

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
    }

    editSection = (e) => {
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

    toggleEditMode = (e) => {
        e.preventDefault()
        this.setState(prevState => {
            return (
                {
                    ...prevState,
                    editMode : !prevState.editMode
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
                {!editMode && <button className="edit-section-button" onClick={this.toggleEditMode}><img alt="edit button" src={pencilLogo}/></button>}
                {editMode && <ModalPersonalInfos infos={infos} editSection={this.editSection} toggleEditMode={this.toggleEditMode} />}
            </div>
        )
    }
}

export default PersonalInfos