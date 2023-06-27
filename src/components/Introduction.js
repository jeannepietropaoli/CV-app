import React from "react";
import "../styles/Introduction.css"

class Introduction extends React.Component {
    constructor() {
        super()
        this.state = {
            text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu viverra ex. Duis malesuada rutrum metus, a pulvinar justo faucibus non. Duis tincidunt, lacus a ornare interdum, orci augue rhoncus sapien, lobortis imperdiet leo lorem sit amet lacus. Etiam mattis enim dui, sed dapibus odio lacinia ornare. Proin ligula diam, luctus in scelerisque at, volutpat sit amet orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu orci eu tellus facilisis sagittis. Donec sollicitudin libero diam, id tincidunt magna posuere ut. Cras nunc mauris, consequat sed malesuada ac, finibus eget nisi. "
        }
    }

    render() {
        return (
            <div className="introduction">
                <h2>INTRODUCTION</h2>
                <p>{this.state.text}</p>
            </div>
        )
    }
}

export default Introduction