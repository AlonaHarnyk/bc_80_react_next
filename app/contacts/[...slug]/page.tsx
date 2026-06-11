import ContactsList from '@/components/ContactsList/ContactsList';
import { getContacts } from '@/lib/contactsServices';
import { mapCategory } from '@/lib/utils';

interface Props {
  params: Promise<{ slug: string[] }>;
}
export default async function Contacts({ params }: Props) {
  const { slug } = await params;
  const category = slug[0];
  const param = mapCategory(category);
  const contacts = await getContacts(param);
  return <ContactsList contacts={contacts} />;
}
