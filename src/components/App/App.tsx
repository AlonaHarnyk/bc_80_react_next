import { useState } from "react";
import { initialDogs } from "../../data/dogs.ts";
import DogsList from "../DogsList/DogsList";

export default function App() {
  //   return <div>test</div>;
  const [dogs, setDogs] = useState(initialDogs);
  return <DogsList dogs={dogs} />;
}
