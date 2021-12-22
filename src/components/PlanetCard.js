import React from "react";

class PlanetCard extends React.Component {
  render () {
    const {planetName, planetImage} = this.props;
    return (
      <div data-testid="planet-card" className='planet-card' id={planetName.replace('ú','u').replace('ê','e')}>
        <img src={planetImage} alt={`Planeta ${planetName}`} />
        <span data-testid="planet-name" className='planet-name'>{planetName}</span>
      </div>
    );
  }
}

export default PlanetCard;