import React from "react";
import "../styles/Experience.css"
import { nanoid } from "nanoid";
import ModalComplex from "./ModalComplex";
import pencilLogo from "../assets/pencil.png"

class Experience extends React.Component {
    constructor() {
        super()
        this.state = {
            experiences : [
                {
                    title : "WORKSHOP EMPLOYEE",
                    company : "Traf's",
                    location : "Quebec",
                    time : "June 2020 - 2023",
                    contribution : "perseverance, patience",
                    id : nanoid()
                },
                {
                    title : "LOREM IPSUM",
                    company : "ti - expert",
                    location : "Quebec",
                    time : "2020",
                    contribution : "perseverance, patience",
                    id : nanoid()
                }
            ],
            editMode : false
        }
    }

    editSection = (e, experienceId) => {
        this.setState(prevState => {
            return (
                {
                    ...prevState,
                    experiences : prevState.experiences.map(experience => {
                        return experience.id === experienceId
                            ? {...experience, [e.target.name] : e.target.value}
                            : experience
                    })
                }
            )
        })
    }

    addSection = () => {
        this.setState(prevState => {
            return (
                {
                    ...prevState,
                    experiences : [
                        ...prevState.experiences,
                        {
                            diploma : "",
                            school : "",
                            location : "",
                            time : "",
                            contribution : "",
                            id : nanoid()
                        }
                    ]
                }
            )
        })
    }

    toggleEditMode = (e) => {
        e.preventDefault()
        this.setState(prevState => {
            return ({editMode : !prevState.editMode}
            )
        })
    }

    render() {
        const {experiences, editMode} = this.state
        const experienceElements = this.state.experiences.map(experience => {
            return (
                <div key={experience.id} className="experience">
                    <h3>{experience.title}</h3>
                    <p>{experience.company} |  {experience.location}  |  {experience.time}</p>
                    <p>{`--> what this program brought me : ${experience.contribution}`}</p>
                </div>
            )
        })
        return (
            <div className="experiences">
                <h2>EXPERIENCE</h2>
                {experienceElements}
                {!editMode && <button className="edit-section-button" onClick={this.toggleEditMode}><img alt="edit button" src={pencilLogo}/></button>}
                {editMode && <ModalComplex data={experiences} editSection={this.editSection} toggleEditMode={this.toggleEditMode} addSection={this.addSection} />}
                </div>
        )
    }
}

export default Experience