import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import TableItem from './TableItem';

function PlanetsTable() {
  const { toShowPlanetsList, fetchPlanets, filterPlanets } = useContext(PlanetsContext);

  const tableComlumnsTitles = [
    'Name', 'Rotation Period', 'Orbital Period', 'Diameter','Climate', 'Gravity', 'Terrain',
    'Surface Water', 'Population', 'Films', 'Created', 'Edited', 'URL',
  ];

  useEffect(() => {
    fetchPlanets();
    filterPlanets();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          { tableComlumnsTitles.map((title, key) => (
            <th key={ key }>{ title }</th>
          )) }
        </tr>
      </thead>
      <tbody>
        { toShowPlanetsList.map((planet, index) => (
          <TableItem key={ index } planet={ planet } />
        )) }
      </tbody>
    </table>
  );
}

export default PlanetsTable;
