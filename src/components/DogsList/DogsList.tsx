import type { Dog } from '../../types';
import DogItem from '../DogItem/DogItem';

interface DogsListProps {
  dogs: Dog[];
  handleDelete: (id: number) => void;
  handleFriendlyStatusChange: (id: number) => void;
}

export default function DogsList({
  dogs,
  handleDelete,
  handleFriendlyStatusChange,
}: DogsListProps) {
  return (
    <ul>
      {dogs.map((dog) => {
        return (
          <li key={dog.id}>
            <DogItem
              dog={dog}
              handleDelete={handleDelete}
              handleFriendlyStatusChange={handleFriendlyStatusChange}
            />
          </li>
        );
      })}
    </ul>
  );
}
