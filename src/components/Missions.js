import React from "react";
import Title from "./Title.js";
import missions from '../data/missions';
import MissionCard from "./MissionCard.js";

class Missions extends React.Component {
  render () {
    return (
      <div data-testid="missions">
        <Title headline='Missões' />
        <section>
          {
            missions.map((element) => {
              const {name, year, country, destination} = element;
              return <MissionCard name={name} year={year} country={country} destination={destination} />
            })
          }
        </section>
      </div>
    );
  }
}

export default Missions;