'use client';

import Modal from '@/components/Modal/Modal';
import UserDetails from '@/components/User/User';
import { getUserById } from '@/lib/usersServices';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

export default function UserDetailsClient() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['user', { id }],
    queryFn: () => getUserById(id),
  });

  return (
    <>
      {data && (
        <Modal>
          <UserDetails user={data} />
          {isLoading && <div>Loading...</div>}
          {isError && <div>Some error, try again later...</div>}
        </Modal>
      )}
    </>
  );
}
