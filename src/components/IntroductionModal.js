import React from "react";
import { nanoid } from "nanoid";
import "../styles/modal.css"

export default class IntroductionModal extends React.Component {
    render() {
        return(
            <div className="modal-container">
                <form className="modal" onSubmit={this.props.submitChanges}>
                    <div className="formField">
                        <label htmlFor="text">Introduction</label>
                        <textarea value={this.props.text} name="text" onChange={this.props.editSection} />
                    </div>
                    <button>Submit Changes</button>
            </form>
            </div>
        )
    }
}