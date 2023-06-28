import React from "react";
import "../styles/modal.css"

export default class ModalComplex extends React.Component {
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
        const formElements = this.props.data.map((detail, index) => {
            const detailElements = Object.keys(detail).map((key, index) => {
                if(key === "id") return null
                return (
                    <div key={index} className="formField">
                        <label htmlFor={key}>{this.convertToReadableName(key)}</label>
                        <input value={detail[key]} name={key} id={key} onChange={(e) => this.props.editSection(e, detail.id)} />
                    </div>
                )
            })
            return (
                <div key={detail.id}>
                    <h4>{`Program ${index + 1}`}</h4>
                    {detailElements}
                </div>
            )
        })
        

        return(
            <div className="modal-container">
                <form className="modal" onSubmit={this.props.toggleEditMode}>
                    {formElements}
                    <button type="button" onClick={this.props.addSection}>+</button>
                    <button>Submit Changes</button>
            </form>
            </div>
        )
    }
}