import React, {useState} from "react";

import './Country.css';


const Country = ({ country }) => {
 const [visited, setVisited] = useState(false);
  // console.log(country.population.population);

const handleVisited= () => {
  // setVisited(visited ? false : true)
  setVisited(!visited)
}



  return (
    <div className={`country ${visited && `country-visited`}`}>
      <img className="height" src={country.flags.flags.png} alt="" />
      <h3>Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
      <p>Capital: {country.capital.capital}</p>
      <button onClick={handleVisited}> 
        {visited ? 'Visited' : 'Not Visited'}
      </button>

    </div>
  );
};
export default Country;
