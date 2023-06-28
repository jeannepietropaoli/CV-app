import React from "react";
import "../../styles/modal.css"

export default class ModalSkills extends React.Component {
    render() {
        const {skills} = this.props
        const formElements = skills.map(skill => {
            return (
                <div key={skill.id}>
                    <label>Category</label>
                    <input name="category" value={skill.category} onChange={(e) => this.props.editCategory(e,skill.id)}/>
                    <ul>
                        {skill.list.map((element, index) => {
                            return (<li><input value={element} onChange={(e) => this.props.editList(e,skill.id, index)}/></li>)
                        })}
                    </ul>
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