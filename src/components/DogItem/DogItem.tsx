import { useState } from 'react';
import type { Dog } from '../../types';
import Button from '../Button/Button';
import DogAddress from '../DogAddress/DogAddress';

interface DogItemProps {
  dog: Dog;
  handleDelete: (id: number) => void;
  handleFriendlyStatusChange: (id: number) => void;
}

export default function DogItem({
  dog: { name, age, breed, avatar, id, isFriendly, address },
  handleDelete,
  handleFriendlyStatusChange,
}: DogItemProps) {
  const [isAddressVisible, setIsAddressVisible] = useState(false);

  const onViewProfile = () => {
    console.log(id);
  };
  const onDelete = () => handleDelete(id);

  const onChangeFriendlyStatus = () => {
    handleFriendlyStatusChange(id);
  };

  const handleShowAddress = () => {
    setIsAddressVisible(!isAddressVisible);
  };

  return (
    <>
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <p> Age:{age}</p>
      <p>{breed}</p>
      <p>Friendly: {isFriendly ? 'Yes' : 'No'}</p>
      {isAddressVisible && <DogAddress address={address} />}
      <Button textContent="View profile" clickHandler={onViewProfile} />
      <Button textContent="Delete" clickHandler={onDelete} />
      <Button
        textContent="Change status of friendliness"
        clickHandler={onChangeFriendlyStatus}
      />
      <Button
        textContent={isAddressVisible ? 'Hide address' : 'Show address'}
        clickHandler={handleShowAddress}
      />
    </>
  );
}
