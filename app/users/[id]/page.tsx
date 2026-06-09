import { getUserById } from '@/lib/usersServices';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import UserClient from './User.client';

interface UserDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function UserDetailsPage({
  params,
}: UserDetailsPageProps) {
  const queryClient = new QueryClient();

  const { id } = await params;

  await queryClient.prefetchQuery({
    queryKey: ['user', id],
    queryFn: () => getUserById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UserClient />
    </HydrationBoundary>
  );
}
