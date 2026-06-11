import { Contact } from '@/type';
import Link from 'next/link';

interface ContactsListProps {
  contacts: Contact[];
}

function ContactsList({ contacts }: ContactsListProps) {
  return (
    <ul>
      {contacts.map(el => {
        return <li key={el.id}><Link href={`/contacts/${el.id}`} >{el.name}</Link></li>;
      })}
    </ul>
  );
}

export default ContactsList;
