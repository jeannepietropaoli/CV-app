import React from "react";
import "../styles/Education.css"
import { nanoid } from "nanoid";

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
            ]
        }
    }

    render() {
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
            </div>
        )
    }
}

export default Education