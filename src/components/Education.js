import React from "react";
import "../styles/Education.css"

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
                    contribution : "perseverance, patience"
                },
                {
                    diploma : "ODIN PROJECT",
                    school : "Online",
                    location : "Remote",
                    time : "2022-2023",
                    contribution : "technical programming skills"
                }
            ]
        }
    }

    render() {
        const educationElements = this.state.education.map(program => {
            return (
                <div className="education--item">
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