import React from 'react';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <h3 data-testid="mission-name">{name}</h3>
        <ul>
          <li data-testid="mission-year">{year}</li>
          <li data-testid="mission-country">{country}</li>
          <li data-testid="mission-destination">{destination}</li>
        </ul>
      </div>
    );
  }
}

export default MissionCard;
