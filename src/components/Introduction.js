import React from "react";
import Modal from "./Modal";
import Section from "./Section";
import "../styles/Introduction.css"

class Introduction extends React.Component {
    constructor() {
        super()
        this.state = {
            text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu viverra ex. Duis malesuada rutrum metus, a pulvinar justo faucibus non. Duis tincidunt, lacus a ornare interdum, orci augue rhoncus sapien, lobortis imperdiet leo lorem sit amet lacus. Etiam mattis enim dui, sed dapibus odio lacinia ornare. Proin ligula diam, luctus in scelerisque at, volutpat sit amet orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu orci eu tellus facilisis sagittis. Donec sollicitudin libero diam, id tincidunt magna posuere ut. Cras nunc mauris, consequat sed malesuada ac, finibus eget nisi. ",
            editMode : false
        }
    }

    editSection = (e) =>{
        this.setState(prevState => {
            return ({
                    ...prevState,
                    text : e.target.value
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
        const {text, editMode} = this.state
        const sectionElements = (<p>{this.state.text}</p>)
        const formElements = (
            <div>
                <div className="formField">
                    <label htmlFor="text">Introduction</label>
                    <textarea id="text" value={this.state.text} name="text" onChange={this.editSection} />
                </div>
            </div>
    )

        return (
            <>
                <Section title="introduction" classToAdd="introduction" sectionElements={sectionElements} toggleEditMode={this.toggleEditMode}/>
                {editMode && <Modal classToAdd="introduction--form" formElements={formElements} toggleEditMode={this.toggleEditMode} />} 
            </>
        )
    }
}

export default Introduction