import { useEffect, useState } from "react";
import ShipListItem from "./ShipListItem";

export default function ShipList() {
  const [shipList, setShipList] = useState([]);
  useEffect(() => {
    const getShipList = async () => {
      const shipData = await fetch("https://swapi.dev/api/starships");
      const data = await shipData.json();
      setShipList(data.results);
      console.log(data);
    };
    getShipList();
  }, [setShipList]);
  return (
    <>
      <h1>Star wars ships</h1>

      <ul>
        <ShipListItem />
        {shipList?.map((ship) => (
          <>
            <li key={ship.name}>Name: {ship.name}</li>
            <li key={ship.manufacturer}>Manufacturer: {ship.manufacturer}</li>
            <li key={ship.cost}>Cost: {ship.cost_in_credits}</li>
          </>
        ))}
      </ul>
    </>
  );
}
