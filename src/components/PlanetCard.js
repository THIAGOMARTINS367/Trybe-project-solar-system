import React from "react";

class PlanetCards extends React.Component {
  render () {
    const {planetName, planetImage} = this.props;
    return (
      <div data-testid="planet-card">
        <span data-testid="planet-name">{planetName}</span>
        <image src={planetImage} alt={`Planeta ${planetName}`}></image>
      </div>
    );
  }
}