'use client';

import UserList from '@/components/UsersList/UsersList';
import { fetchUsers } from '@/lib/usersServices';
import { useQuery } from '@tanstack/react-query';

export default function UsersClient() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    refetchOnMount: false,
  });

  if (isLoading) return <div>Loading ...</div>;
  if (isError) return <div>Some error, try again...</div>;

  return <>{data && data.length > 0 && <UserList users={data} />}</>;
}
