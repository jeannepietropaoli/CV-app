import React from "react";
import "../styles/Experience.css"
import { nanoid } from "nanoid";

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
            ]
        }
    }

    render() {
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
            </div>
        )
    }
}

export default Experience