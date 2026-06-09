'use client';

import UserDetails from '@/components/User/User';
import { getUserById } from '@/lib/usersServices';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

export default function UserClient() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['user', id],
    queryFn: () => getUserById(id),
    refetchOnMount: false,
  });

  if (isLoading) return <div>Loading ...</div>;
  if (isError) return <div>Some error, try again...</div>;

  return <>{data && <UserDetails user={data} />}</>;
}
