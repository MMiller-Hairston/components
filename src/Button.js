import React, { Component } from "react";

class Button extends Component {

    log = () => {
        console.log("hello");
    };

    render() {
        return (
            <button onClick={this.log}>
                Click Me!
            </button>
        )
    }
}
/*
    1. Create a functional component Named Button.
    2. Make the button console.log hello when pressed. 
    (put the console log inside a function so you can test it.)
    3. Add a disabled prop to toggle if the button is active or not.
*/

export default Button;