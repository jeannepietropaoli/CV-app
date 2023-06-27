import React from "react";
import "../styles/Introduction.css"
import IntroductionModal from "./IntroductionModal";
import pencilLogo from "../assets/pencil.png"

class Introduction extends React.Component {
    constructor() {
        super()
        this.state = {
            text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu viverra ex. Duis malesuada rutrum metus, a pulvinar justo faucibus non. Duis tincidunt, lacus a ornare interdum, orci augue rhoncus sapien, lobortis imperdiet leo lorem sit amet lacus. Etiam mattis enim dui, sed dapibus odio lacinia ornare. Proin ligula diam, luctus in scelerisque at, volutpat sit amet orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu orci eu tellus facilisis sagittis. Donec sollicitudin libero diam, id tincidunt magna posuere ut. Cras nunc mauris, consequat sed malesuada ac, finibus eget nisi. ",
            editMode : false
        }
        this.submitChanges = this.submitChanges.bind(this)
        this.editSection = this.editSection.bind(this)
        this.switchToEditMode = this.switchToEditMode.bind(this)
    }

    submitChanges() {
        this.setState(prevState => {
            return (
                {
                    ...prevState,
                    editMode : false
                }
            )
        })
    }

    editSection(e) {
        this.setState(prevState => {
            return (
                {
                    ...prevState,
                    text : e.target.value
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
        const {text, editMode} = this.state
        return (
            <div className="introduction">
                <h2>INTRODUCTION</h2>
                <p>{this.state.text}</p>
                {!editMode && <button className="edit-section-button" onClick={this.switchToEditMode}><img alt="edit button" src={pencilLogo}/></button>}
                {editMode && <IntroductionModal text={text} submitChanges={this.submitChanges} editSection={this.editSection} />} 
            </div>
        )
    }
}

export default Introduction