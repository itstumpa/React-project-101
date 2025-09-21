

// - rafc 
import React from 'react'
// import App from '../App';
import { use } from 'react'

const countries = ({countriesPromise}) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  console.log(countries);
  return (
    <div>
      <h1>In the countries: {countries.length}</h1>
    </div>
  )
}

export default countries;
