import axios from 'axios';
import type { User, UserData, UserStatus } from '../types';

const api = axios.create({
  baseURL: `https://6240d2109b450ae274385b44.mockapi.io/api`,
});

interface ToggleStatusParams {
  userStatus: UserStatus;
  id: User['id'];
}

export const getUsers = async (query: string): Promise<User[]> => {
  const { data } = await api.get<User[]>(`/users`, {
    params: { search: query },
  });

  return data;
};

export const addUser = async (userData: UserData) => {
  const { data } = await api.post<User>(`/users`, userData);
  return data;
};

export const deleteUser = async (id: User['id']): Promise<User> => {
  const { data } = await api.delete<User>(`/users/${id}`);
  return data;
};

export const toggleStatus = async ({ userStatus, id }: ToggleStatusParams) => {
  const { data } = await api.put<User>(`/users/${id}`, userStatus);

  return data;
};
