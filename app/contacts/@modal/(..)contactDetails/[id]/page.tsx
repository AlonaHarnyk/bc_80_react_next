import ContactItem from '@/components/ContactItem/ContactItem';
import Modal from '@/components/Modal/Modal';
import { getContactById } from '@/lib/contactsServices';
interface ModalContactDetailsProps {
  params: Promise<{ id: string }>;
}
export default async function ModalContactDetails({
  params,
}: ModalContactDetailsProps) {
  const { id } = await params;
  const data = await getContactById(id);
  return (
    <Modal>
      <ContactItem contact={data} />
    </Modal>
  );
}
