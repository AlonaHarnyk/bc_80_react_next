import { User } from '@/type';
import axios from 'axios';

const userApi = axios.create({
  baseURL: 'https://6240d2109b450ae274385b44.mockapi.io/api',
});

export async function fetchUsers(): Promise<User[]> {
  const { data } = await userApi.get<User[]>('/users');
  return data;
}

export async function deleteUser(id: User['id']): Promise<User> {
  const { data } = await userApi.delete<User>(`/users/${id}`);
  return data;
}

export async function getUserById(userId: User['id']): Promise<User> {
  const { data } = await userApi.get<User>(`/users/${userId}`);

  return data;
}
