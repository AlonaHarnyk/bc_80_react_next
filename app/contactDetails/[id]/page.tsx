import { getContactById } from '@/lib/contactsServices';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import ContactClient from './Contact.client';

interface ContactPageProps {
  params: Promise<{ id: string }>;
}

async function ContactPage({ params }: ContactPageProps) {
  const queryClient = new QueryClient();
  const id = (await params).id;

  await queryClient.prefetchQuery({
    queryKey: ['contact'],
    queryFn: () => getContactById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ContactClient />
    </HydrationBoundary>
  );
}

export default ContactPage;
