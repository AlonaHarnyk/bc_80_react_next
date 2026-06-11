import ContactsList from "@/components/ContactsList/ContactsList";
import { getContacts } from "@/lib/contactsServices";

export default async function Contacts() {
  const contacts = await getContacts();
  
  return <ContactsList contacts={contacts}/>;
}
