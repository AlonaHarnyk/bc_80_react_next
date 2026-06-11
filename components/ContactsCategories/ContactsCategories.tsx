import Link from 'next/link';

function ContactsCategories() {
  return (
    <ul>
      <li>
        <Link href={'/contacts/all'}>All contacts</Link>
      </li>
      <li>
        <Link href={'/contacts/with-job'}>Contacts with job</Link>
      </li>
      <li>
        <Link href={'/contacts/without-job'}>Contacts without job</Link>
      </li>
    </ul>
  );
}

export default ContactsCategories;
