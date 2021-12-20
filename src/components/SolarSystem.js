import React from "react";
import Title from "./Title.js";

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline='Planetas' />
      </div>
    )
  }
}

export default SolarSystem;