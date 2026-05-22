import { useState } from 'react'
import {initialDogs} from '../../data/dogs.js'
import DogsList from '../DogsList/DogsList.js'


export default function App() {
  //   return <div>test</div>;
  const [dogs, setDogs] = useState(initialDogs)
  return (
    <DogsList dogs={dogs}/>
  )
}
