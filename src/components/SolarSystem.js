import React from "react";
import Title from "./Title.js";
import PlanetCard from "./PlanetCard.js";
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className='solar-system'>
          <Title headline='Planetas' />
        <section className='list-planets'>
          {
            Planets.map((element) => 
              <PlanetCard key={element.name} planetName={element.name} planetImage={element.image}/>)
          }
        </section>
      </div>
    )
  }
}

export default SolarSystem;