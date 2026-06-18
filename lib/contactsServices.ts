import { Contact } from '@/type';
import axios from 'axios';

const contactsApi = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getContacts = async (hasWork?: boolean): Promise<Contact[]> => {
  const { data } = await contactsApi.get<Contact[]>('/contacts', {
    params: { hasWork },
  });
  return data;
};

export const getContactById = async (id: string): Promise<Contact> => {
  const { data } = await contactsApi.get<Contact>(`/contacts/${id}`);
  return data;
};
