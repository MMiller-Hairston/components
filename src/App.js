import React, { Component } from "react";
import Button from "./Button";
// import Buttons from "./Button";

// const log = () => console.log("hello");
class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          This will be your workspace. Develop the component here and then move
          it.
        </p>

        <Button />

      {/* <Buttons onClick={log} /> */}

      </div>
    );
  } 
}

export default App;
