import React from "react";
import Section from "./Section";
import Modal from "./Modal"
import "../styles/Education.css"
import { nanoid } from "nanoid";

class Education extends React.Component {
    constructor() {
        super()
        this.state = {
            education : [
                {
                    diploma : {value : "Diploma", id : nanoid()},
                    school : {value : "School", id : nanoid()},
                    location : {value : "Location", id : nanoid()},
                    time : {value : "June 2020", id : nanoid()},
                    details : {value : [{id : nanoid(), detail : "Details about that course, such as specific courses,  specialization etc"}], id : nanoid()},
                    id : nanoid()
                },
                {
                    diploma : {value : "Diploma", id : nanoid()},
                    school : {value : "School", id : nanoid()},
                    location : {value : "Location", id : nanoid()},
                    time : {value : "June 2020", id : nanoid()},
                    details : {value : [{id : nanoid(), detail : "Details about that course, such as specific courses,  specialization etc"}, {id : nanoid(), detail : "Details"}], id : nanoid()},
                    id : nanoid()
                }
            ],
            editMode : false
        }
    }

    editDetailsSection(e, courseId, detailId) {
        this.setState(prevState => {
            return ({
                ...prevState,
                education : prevState.education.map(course => {
                    return course.id === courseId
                        ? {...course, details : {...course.details, value : course.details.value.map(detail => {
                            return detail.id === detailId
                                ? {...detail, detail : e.target.value}
                                : detail
                        })} }
                        : course
                })
            })
        })
    }

    editSection = (e, courseId) => {
        this.setState(prevState => {
            return ({
                    ...prevState,
                    education : prevState.education.map(course => {
                        return course.id === courseId
                            ? {...course, [e.target.name] : {...course[e.target.name], value : e.target.value}}
                            : course
                    })
                })
        })
    }

    addSection = () => {
        this.setState(prevState => {
            return ({
                    ...prevState,
                    education : [
                        ...prevState.education,
                        {
                            diploma : {value : "", id : nanoid()},
                            school : {value : "", id : nanoid()},
                            location : {value : "", id : nanoid()},
                            time : {value : "", id : nanoid()},
                            details : {value : [{id : nanoid(), detail : ""}], id : nanoid()},
                            id : nanoid()
                        }
                    ]
                })
        })
    }

    toggleEditMode = (e) => {
        e.preventDefault()
        this.setState(prevState => {
            return ({editMode : !prevState.editMode})
        })
    }

    render() {
        const {education, editMode} = this.state
        const sectionElements = this.state.education.map(course => {
            const detailElements = course.details.value.map(detail => {
                return <li key={`${detail.id}`}>{detail.detail}</li>
            })
            return (
                <div key={`${course.id}`} className="education--item">
                    <h3>{course.diploma.value.toUpperCase()}</h3>
                    <p>{course.school.value} |  {course.location.value}  |  {course.time.value}</p>
                    <ul>
                        {detailElements}
                    </ul>
                </div>
            )
        })
        const formElements = education.map((course, index) => {
            const detailElements = course.details.value.map(detail => {
                return <textarea key={detail.id} value={detail.detail} onChange={(e) => this.editDetailsSection(e, course.id, detail.id)}/>
            })
            const courseElements = Object.keys(course).map(key => {
                if(key === "id") return null
                return (
                    <div key={`${course[key].id}`} className="formField">
                        <label htmlFor={key}>{this.props.convertToReadableName(key)}</label>
                        {key === "details" && detailElements}
                        {key !== "details" && <input value={course[key].value} name={key} id={key} onChange={(e) => this.editSection(e, course.id)} />}
                    </div>
                )
            })
            return (
                <div key={`${course.id}`}>
                    <h4>{`Course ${index + 1}`}</h4>
                    {courseElements}
                </div>
            )
        })

        return (
            <>
            <Section title="education" classToAdd="education" sectionElements={sectionElements} toggleEditMode={this.toggleEditMode}/>
            {editMode && <Modal classToAdd="education--form" formElements={formElements} toggleEditMode={this.toggleEditMode} addSection={this.addSection} />}
            </>
        )
    }
}

export default Education