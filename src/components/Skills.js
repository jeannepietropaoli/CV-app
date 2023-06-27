import React from "react";
import "../styles/Skills.css"
import { nanoid } from "nanoid";

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
                    ]
                },
                {
                    category : "TOOLS",
                    list : [
                        "Github",
                        "VSCode"
                    ]
                },
                {
                    category : "LANGUAGES",
                    list : ["English", "French"]
                },
                {
                    category : "SOFT-SKILLS",
                    list : [
                        "persistent",
                        "patiente",
                        "passionate"
                    ]
                }
            ]
        }
    }

    render() {
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
            </div>
        )
    }
}

export default Skills