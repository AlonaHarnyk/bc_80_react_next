import { fetchUsers } from '@/lib/usersServices';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import UsersClient from './UsersClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Users',
  description: 'List of Users',
};
export default async function Users() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UsersClient />
    </HydrationBoundary>
  );
}
