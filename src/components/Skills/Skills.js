import React from "react";
import "../../styles/Skills.css"
import { nanoid } from "nanoid";
import ModalSkills from "./ModalSkills";
import pencilLogo from "../../assets/pencil.png"

class Skills extends React.Component {
    constructor() {
        super()
        this.state = {
            skills : [
                {
                    category : "TECH STACK",
                    list : [
                        "Html",
                        "CSS",
                        "JS"
                    ],
                    id:nanoid()
                },
                {
                    category : "TOOLS",
                    list : [
                        "Github",
                        "VSCode"
                    ],
                    id:nanoid()
                },
                {
                    category : "LANGUAGES",
                    list : ["English", "French"],
                    id:nanoid()
                },
                {
                    category : "SOFT-SKILLS",
                    list : [
                        "persistent",
                        "patiente",
                        "passionate"
                    ], 
                    id:nanoid()
                }
            ],
            editMode : false
        }
    }

    toggleEditMode = (e) => {
        e.preventDefault()
        this.setState(prevState => {
            return ({editMode : !prevState.editMode})
        })
    }

    editCategory = (e, skillId) => {
        this.setState(prevState => {
            return ({
                ...prevState,
                skills : prevState.skills.map(prevSkill => {
                    return prevSkill.id === skillId
                        ? {...prevSkill, category : e.target.value}
                        : prevSkill
                })
            })
        })
    }

    editList = (e, skillId, skillIndex) => {
        this.setState(prevState => {
            return ({
                ...prevState,
                skills : prevState.skills.map(prevSkill => {
                    if(prevSkill.id === skillId) {
                        const newList = prevSkill
                        newList.list.splice(skillIndex, 1, e.target.value)
                        return newList
                    }
                    else return prevSkill
                })
            })
        })
    }

    render() {
        const {skills, editMode} = this.state
        const skillsElements = this.state.skills.map(skillset => {
            return (
                <div key={nanoid()} className="skill">
                    <h3>{skillset.category}</h3>
                    <ul>
                        {skillset.list.map(skillDetail => <li key={nanoid()}>{skillDetail}</li>)}
                    </ul>
                </div>
            )
        })

        return (
            <div className="skills">
                <h2>SKILLS</h2>
                {skillsElements}
                {!editMode && <button className="edit-section-button" onClick={this.toggleEditMode}><img alt="edit button" src={pencilLogo}/></button>}
                {editMode && <ModalSkills skills={skills} editList={this.editList} editCategory={this.editCategory} toggleEditMode={this.toggleEditMode} />}
            </div>
        )
    }
}

export default Skills