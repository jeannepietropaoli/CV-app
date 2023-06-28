import React from "react";
import "../styles/Education.css"
import { nanoid } from "nanoid";
import ModalComplex from "./ModalComplex";
import pencilLogo from "../assets/pencil.png"

class Education extends React.Component {
    constructor() {
        super()
        this.state = {
            education : [
                {
                    diploma : "DEC METIERS D'ART",
                    school : "CEGEP Limoilou",
                    location : "Quebec",
                    time : "June 2020",
                    contribution : "perseverance, patience",
                    id : nanoid()
                },
                {
                    diploma : "ODIN PROJECT",
                    school : "Online",
                    location : "Remote",
                    time : "2022-2023",
                    contribution : "technical programming skills",
                    id : nanoid()
                }
            ],
            editMode : false
        }
    }

    editSection = (e, programId) => {
        this.setState(prevState => {
            return (
                {
                    ...prevState,
                    education : prevState.education.map(program => {
                        return program.id === programId
                            ? {...program, [e.target.name] : e.target.value}
                            : program
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
                    education : [
                        ...prevState.education,
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
        const {education, editMode} = this.state
        const educationElements = this.state.education.map(program => {
            return (
                <div key={program.id} className="education--item">
                    <h3>{program.diploma}</h3>
                    <p>{program.school} |  {program.location}  |  {program.time}</p>
                    <p>{`--> what this program brought me : ${program.contribution}`}</p>
                </div>
            )
        })
        return (
            <div className="education">
                <h2>EDUCATION</h2>
                {educationElements}
                {!editMode && <button className="edit-section-button" onClick={this.toggleEditMode}><img alt="edit button" src={pencilLogo}/></button>}
                {editMode && <ModalComplex data={education} editSection={this.editSection} toggleEditMode={this.toggleEditMode} addSection={this.addSection} />}
          
            </div>
        )
    }
}

export default Education