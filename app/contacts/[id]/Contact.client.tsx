'use client';

import ContactItem from '@/components/ContactItem/ContactItem';
import { getContactById } from '@/lib/contactsServices';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

export default function ContactClient() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['contact'],
    queryFn: () => getContactById(id),
  });

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Sorry, 404</p>}
      {data && <ContactItem contact={data} />}
    </div>
  );
}
