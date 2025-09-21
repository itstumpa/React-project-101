import React from "react";

import './Country.css'


const Country = ({ country }) => {
  console.log(country.population.population);

const handleVisited= ()=>{
  console.log('button clicked')
}



  return (
    <div>
      <img src={country.flags.flags.png} alt="" />
      <h3>Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
      <p>Capital: {country.capital.capital}</p>
      <button onClick={handleVisited}> Not Visited </button>

    </div>
  );
};
export default Country;
