import { User, UserData } from '@/type';
import axios from 'axios';

const userApi = axios.create({
  baseURL: 'http://localhost:3000/api',
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

export async function addUser(userData: UserData) {
  const { data } = await userApi.post<User>('/users', userData);
  return data;
}
