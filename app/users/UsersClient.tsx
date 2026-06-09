'use client';

import UserList from '@/components/UsersList/UsersList';
import { fetchUsers } from '@/lib/usersServices';
import { useQuery } from '@tanstack/react-query';

export default function UsersClient() {
  const { data } = useQuery({ queryKey: ['users'], queryFn: fetchUsers });

  return <>{data && data.length > 0 && <UserList users={data} />}</>;
}
