import { useState } from 'react';
import { getUsers } from '../../services/api';
import Button from '../Button/Button';
import { type User } from '../../types';
import UserList from '../UserList/UserList';
import Loading from '../Loading/Loading';
import ErrorNotification from '../ErrorNotification/ErrorNotification';

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const showUsers = async () => {
    try {
      setIsError(false);
      setLoading(true);
      const data = await getUsers();
      setUsers(data);
    } catch {
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {users.length > 0 ? <UserList users={users} /> : <Button title="Show users" clickHandler={showUsers} />}
      {loading && <Loading />}
      {isError && <ErrorNotification />}
    </>
  );
}

// // Створити компонент App, в якому рендерити кнопку Show users, при натисканні на яку робити запит
// на бекенд за адресою https://6240d2109b450ae274385b44.mockapi.io/api/users і рендерити список користувачів.
//  Кнопка Show users має зникнути після того, як список відрендериться.
