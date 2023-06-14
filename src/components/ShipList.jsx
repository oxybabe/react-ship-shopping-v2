import { useEffect, useState } from "react";

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
      <h1>Star wars ship</h1>

      <ul>
        {shipList?.map((ship) => (
          <li key={ship.name}>{ship.name}</li>
        ))}
      </ul>
    </>
  );
}
