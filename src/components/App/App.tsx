import { useState } from 'react';
import { initialDogs } from '../../data/dogs.ts';
import DogsList from '../DogsList/DogsList';

export default function App() {
  //   return <div>test</div>;
  const [dogs, setDogs] = useState(initialDogs);
  const handleDelete = (id: number) => {
    setDogs(dogs.filter(dog => dog.id !== id));
  };
  return <DogsList dogs={dogs} handleDelete={handleDelete} />;
}
