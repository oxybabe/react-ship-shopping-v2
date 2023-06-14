import { useState } from "react";
import "./App.css";
import ShipList from "./components/ShipList";
import ShipListItem from "./components/ShipListItem";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ShipList />
    </>
  );
}

export default App;
