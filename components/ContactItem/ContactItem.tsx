import { Contact } from '@/type';

interface ContactProps {
  contact: Contact;
}

function ContactItem({ contact }: ContactProps) {
  return (
    <div>
      <h2>{contact.name}</h2>
      <p>{contact.email}</p>
    </div>
  );
}

export default ContactItem;
