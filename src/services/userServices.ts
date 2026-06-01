import axios from 'axios';
import type { User, UserData } from '../types';

const api = axios.create({
  baseURL: `https://6240d2109b450ae274385b44.mockapi.io/api`,
});

export const getUsers = async (query: string): Promise<User[]> => {
  const { data } = await api.get<User[]>(`/users`, {
    params: { search: query },
  });

  return data;
};

export const addUser = async (userData: UserData) => {
  const { data } = await api.post<User>(`/users`, userData);
  return data;
}

// Реалізувати запит на додавання юзера 
// (має викликатись при сабміті форми UserForm)