import { getUserById } from '@/lib/usersServices';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import UserClient from './User.client';
import { Metadata } from 'next';

interface UserDetailsPageProps {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({
  params,
}: UserDetailsPageProps): Promise<Metadata> => {
  const { id } = await params;
  const user = await getUserById(id);

  return {
    title: user.name,
    description: `Details about ${user.name} `,
  };
};
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
