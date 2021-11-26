import React, { useState } from 'react';

import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [allPlanetsList, setAllPlanetsList] = useState([]);
  const [toShowPlanetsList, setToShowPlanetsList] = useState([]);
  const [columnsList, setColumnsList] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);
  const [filtersList, setFiltersList] = useState({
    filterByName: '',
    filterByNumericValues: [
      'opa', 'funcionou',
    ],
  });

  function fetchPlanets() {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json()
        .then((results) => {
          setAllPlanetsList(results.results);
          setToShowPlanetsList(results.results);
        }));
  }

  function filterPlanets() {
    setToShowPlanetsList(
      allPlanetsList.filter((planet) => (
        planet.name.toLowerCase()
          .includes(filtersList.filterByName.toLowerCase())
      ))
    );
  }

  const contextValue = {
    allPlanetsList,
    toShowPlanetsList,
    filtersList,
    columnsList,
    fetchPlanets,
    filterPlanets,
    setFiltersList,
    setColumnsList,
    setToShowPlanetsList,
  };

  return (
    <PlanetsContext.Provider
      value={ { ...contextValue } }
    >
      { children }
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
