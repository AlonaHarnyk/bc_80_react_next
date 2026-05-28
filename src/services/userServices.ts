import axios from 'axios';
import type { User } from '../types';

const api = axios.create({
  baseURL: `https://6240d2109b450ae274385b44.mockapi.io/api`,
});

export const getUsers = async (query: string): Promise<User[]> => {
  const { data } = await api.get<User[]>(`/users`, {
    params: { search: query },
  });

  return data;
};
