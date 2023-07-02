import React from "react";
import Section from "./Section";
import Modal from "./Modal"
import "../styles/Experience.css"
import { nanoid } from "nanoid";

class Experience extends React.Component {
    constructor() {
        super()
        this.state = {
            experiences : [
                {
                    title : {value : "Employment title", id : nanoid()},
                    company : {value : "Company", id : nanoid()},
                    location : {value : "Location", id : nanoid()},
                    time : {value : "June 2020 - 2023", id : nanoid()},
                    details : {value : [{id : nanoid(), detail : "Details about that experience such as key responsabilies."}, {id : nanoid(), detail : "Another detail about that experience."}], id : nanoid()},
                    id : nanoid()
                },
                {
                    title : {value : "Employment title", id : nanoid()},
                    company : {value : "Company", id : nanoid()},
                    location : {value : "Location", id : nanoid()},
                    time : {value : "2020", id : nanoid()},
                    details : {value : [{id : nanoid(), detail : "Details about that experience such as key responsabilies."}], id : nanoid()},
                    id : nanoid()
                }
            ],
            editMode : false
        }
    }

    editDetailsSection(e, experienceId, detailId) {
        this.setState(prevState => {
            return ({
                ...prevState,
                experiences : prevState.experiences.map(experience => {
                    return experience.id === experienceId
                        ? {...experience, details : {...experience.details, value : experience.details.value.map(detail => {
                            return detail.id === detailId
                                ? {...detail, detail : e.target.value}
                                : detail
                        })} }
                        : experience
                })
            })
        })
    }

    editSection = (e, experienceId) => {
        this.setState(prevState => {
            return ({
                    ...prevState,
                    experiences : prevState.experiences.map(experience => {
                        return experience.id === experienceId
                            ? {...experience, [e.target.name] : {...experience[e.target.name], value : e.target.value}}
                            : experience
                    })
                })
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
                            title : {value : "", id : nanoid()},
                            company : {value : "", id : nanoid()},
                            location : {value : "", id : nanoid()},
                            time : {value : "", id : nanoid()},
                            details : {value : [{id : nanoid(), detail : ""}], id : nanoid()},
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
        const sectionElements = this.state.experiences.map(experience => {
            const detailElements = experience.details.value.map(detail => {
                return <li key={`${detail.id}`}>{detail.detail}</li>
            })
            return (
                <div key={experience.id} className="experience">
                    <h3>{experience.title.value.toUpperCase()}</h3>
                    <p>{experience.company.value} |  {experience.location.value}  |  {experience.time.value}</p>
                    <ul>
                        {detailElements}
                    </ul>
                </div>
            )
        })
        const formElements = experiences.map((experience, index) => {
            const detailElements = experience.details.value.map(detail => {
                return <textarea key={detail.id} value={detail.detail} onChange={(e) => this.editDetailsSection(e, experience.id, detail.id)}/>
            })
            const experienceElements = Object.keys(experience).map((key, index) => {
                if(key === "id") return null
                return (
                    <div key={experience[key].id} className="formField">
                        <label htmlFor={key}>{this.props.convertToReadableName(key)}</label>
                        {key === "details" && detailElements}
                        {key !== "details" && <input value={experience[key].value} name={key} onChange={(e) => this.editSection(e, experience.id)} />}
                    </div>
                )
            })
            return (
                <div key={experience.id}>
                    <h4>{`Experience ${index + 1}`}</h4>
                    {experienceElements}
                </div>
            )
        })

        return (
            <>
            <Section title="experiences" classToAdd="experiences" sectionElements={sectionElements} toggleEditMode={this.toggleEditMode}/>
            {editMode && <Modal classToAdd="experience--form" formElements={formElements} toggleEditMode={this.toggleEditMode} addSection={this.addSection}/>}
            </>
        )
    }
}

export default Experience