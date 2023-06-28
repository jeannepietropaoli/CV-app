import React from "react";
import "../../styles/modal.css"

export default class ModalPersonalInfos extends React.Component {
    convertToReadableName(key) {
        const words = key.split(/(?=[A-Z])/)
        const readable = []
        words.forEach((word, index) => {
            const splitWord = word.split('')
            index === 0 ? splitWord.splice(0, 1, splitWord[0].toUpperCase()) : splitWord.splice(0, 1, splitWord[0].toLowerCase())
            readable.push(splitWord.join(''))
        })
        return readable.join(' ')
    }

    render() {
        const {infos} = this.props
        const formElements = Object.keys(infos).map((key, index) => {
            return (
                <div key={index} className="formField">
                    <label htmlFor={key}>{this.convertToReadableName(key)}</label>
                    <input value={infos[key]} name={key} id={key} onChange={this.props.editSection} />
                </div>
            )
        })

        return(
            <div className="modal-container">
                <form className="modal" onSubmit={this.props.toggleEditMode}>
                    {formElements}
                    <button>Submit Changes</button>
            </form>
            </div>
        )
    }
}