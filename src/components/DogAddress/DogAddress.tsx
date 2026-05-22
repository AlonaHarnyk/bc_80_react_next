import type { DogAddress } from '../../types';

interface DogAddressProps {
  address: DogAddress;
}

export default function DogAddress({
  address: { street, city, country },
}: DogAddressProps) {
  return (
    <>
      <p>Street: {street}</p>
      <p>City: {city}</p>
      <p>Country: {country}</p>
    </>
  );
}
