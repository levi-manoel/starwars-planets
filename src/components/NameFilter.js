import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function NameFilter() {
  const [nameInputValue, setNameInputValue] = useState('');

  const { filterPlanets, filtersList, setFiltersList } = useContext(PlanetsContext);

  useEffect(() => {
    setFiltersList({
      filterByName: nameInputValue,
      filterByNumericValues: [
        ...filtersList.filterByNumericValues,
      ],
    });
    filterPlanets();
  }, [nameInputValue]);

  return (
    <label>
      Nome:
      <input
        type="text"
        value={ nameInputValue }
        onChange={ (event) => {
          setNameInputValue(event.target.value);
        } }
      />
    </label>  
  );
}

export default NameFilter;
