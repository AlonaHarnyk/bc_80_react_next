import type { Dog } from '../../types';
import Button from '../Button/Button';

interface DogItemProps {
  dog: Dog;
  handleDelete: (id: number) => void;
}

export default function DogItem({ dog: { name, age, breed, avatar, id }, handleDelete }: DogItemProps) {
  const onViewProfile = () => {
    console.log(id);
  };
  const onDelete = () => handleDelete(id);
  return (
    <>
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <p> Age:{age}</p>
      <p>{breed}</p>
      <Button textContent="View profile" clickHandler={onViewProfile} />
      <Button textContent="Delete" clickHandler={onDelete} />
    </>
  );
}
