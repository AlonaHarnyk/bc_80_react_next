import ContactsList from '@/components/ContactsList/ContactsList';
import { getContacts } from '@/lib/contactsServices';
import { mapCategory } from '@/lib/utils';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string[] }>;
}
// case 'with-job':
//           return true
//       case 'without-job':
//           return false

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = await params;
  const category = slug[0];
  const title =
    category === 'all'
      ? 'All contacts'
      : category === 'with-job'
        ? 'Contacts with job'
        : 'Contacts without job';

  return {
    title,
    description: 'Page of contacts',
  };
};
export default async function Contacts({ params }: Props) {
  const { slug } = await params;
  const category = slug[0];
  const param = mapCategory(category);
  const contacts = await getContacts(param);
  return <ContactsList contacts={contacts} />;
}
