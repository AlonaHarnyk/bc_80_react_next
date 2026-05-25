import axios from 'axios';
import type { User } from '../types';
axios.defaults.baseURL = 'https://6240d2109b450ae274385b44.mockapi.io/api';
export const getUsers = async (): Promise<User[]> => {
    const { data: users } = await axios.get<User[]>('/users');
    return users;
};
