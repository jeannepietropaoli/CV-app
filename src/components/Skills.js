import React from "react";
import Modal from "./Modal"
import Section from "./Section"
import "../styles/Skills.css"
import { nanoid } from "nanoid"

class Skills extends React.Component {
    constructor() {
        super()
        this.state = {
            skills : [
                {
                    category : "TECH STACK",
                    list : [
                        {id : nanoid(), skill : "Html"},
                        {id : nanoid(), skill : "CSS"},
                        {id : nanoid(), skill : "JS"}
                    ],
                    id:nanoid()
                },
                {
                    category : "TOOLS",
                    list : [
                        {id : nanoid(), skill : "Github"},
                        {id : nanoid(), skill : "VSCode"}
                    ],
                    id:nanoid()
                },
                {
                    category : "LANGUAGES",
                    list : [
                        {id : nanoid(), skill : "English"},
                        {id : nanoid(), skill : "French"}
                    ],
                    id:nanoid()
                },
                {
                    category : "SOFT-SKILLS",
                    list : [
                        {id : nanoid(), skill : "persistent"},
                        {id : nanoid(), skill : "patiente"},
                        {id : nanoid(), skill : "passionate"}
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

    editCategory = (e, skillsetId) => {
        this.setState(prevState => {
            return ({
                ...prevState,
                skills : prevState.skills.map(prevSkillset => {
                    return prevSkillset.id === skillsetId
                        ? {...prevSkillset, category : e.target.value}
                        : prevSkillset
                })
            })
        })
    }

    editList = (e, skillsetId, skillId) => {
        this.setState(prevState => {
            return ({
                ...prevState,
                skills : prevState.skills.map(prevSkillset => {
                    return prevSkillset.id === skillsetId
                        ? {...prevSkillset, list : prevSkillset.list.map(prevSkill => {
                            return prevSkill.id === skillId
                                ? {...prevSkill, skill : e.target.value}
                                : prevSkill
                        })}
                        : prevSkillset
                })
            })
        })
    }

    render() {
        const {skills, editMode} = this.state
        const sectionElements = this.state.skills.map(skillset => {
            return (
                <div key={nanoid()} className="skill">
                    <h3>{skillset.category}</h3>
                    <ul>
                        {skillset.list.map(skillDetail => <li key={skillDetail.id}>{skillDetail.skill}</li>)}
                    </ul>
                </div>
            )
        })
        const formElements = this.state.skills.map(skillset => {
            return (
                <div key={skillset.id}>
                    <label>Category</label>
                    <input name="category" value={skillset.category} onChange={(e) => this.editCategory(e,skillset.id)}/>
                    <ul>
                        {skillset.list.map((skillDetail, index) => {
                            return (<li key={skillDetail.id}><input value={skillDetail.skill} onChange={(e) => this.editList(e,skillset.id, skillDetail.id)}/></li>)
                        })}
                    </ul>
                </div>
            )
        })

        return (
            <>
                <Section title="skills" classToAdd="skills" sectionElements={sectionElements} toggleEditMode={this.toggleEditMode}/>
                {editMode && <Modal classToAdd="skills--form" formElements={formElements} toggleEditMode={this.toggleEditMode} />} 
            </>
        )
    }
}

export default Skills