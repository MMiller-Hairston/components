import React, { Component } from "react";

class Button extends Component {
    constructor() {
        super()
        this.state = {disabled: true}; 
    }

    log = () => {
        console.log("hello");
    };

    render() {
        return (
                <button disabled={this.state.disabled} onClick={this.log}>
                    Click Me!
                </button>
        )

    }
}
// function Buttons({onClick}) {
//     return (
//         <button onClick={onClick}>Click Me!</button>
//     )
// }

/*
    1. Create a functional component Named Button.
    2. Make the button console.log hello when pressed. 
    (put the console log inside a function so you can test it.)
    3. Add a disabled prop to toggle if the button is active or not.
*/

export default Button;
