import React from "react";
import "../styles/section.css"
import pencilLogo from "../assets/pencil.png"

class SectionTest extends React.Component {
    render() {
        return (
            <div className={`section ${this.props.classToAdd}`}>
                {this.props.title && <h2>{this.props.title.toUpperCase()}</h2>}
                {this.props.sectionElements}
                {!this.props.editMode && <button className="edit-section-button" onClick={this.props.toggleEditMode}><img alt="edit button" src={pencilLogo}/></button>}
            </div>
        )
    }
}

export default SectionTest