import { getContactById } from '@/lib/contactsServices';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import ContactClient from './Contact.client';
import { Metadata } from 'next';

interface ContactPageProps {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({
  params,
}: ContactPageProps): Promise<Metadata> => {
  const id = (await params).id;
  const contact = await getContactById(id);
  return {
    title: contact.name,
    description: 'Detail of contact',
  };
};

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
