import React from "react";
import '../styles/modal.css'

class ModalTemplate extends React.Component {
    render() {
        return (
            <div className="modal-container">
                <form className={`modal ${this.props.classToAdd}`} onSubmit={this.props.toggleEditMode}>
                    {this.props.formElements}
                    {this.props.addSection && <button type="button" onClick={this.props.addSection}>+</button>}
                    <button>Submit Changes</button>
            </form>
            </div>
        )
    }
}

export default ModalTemplate