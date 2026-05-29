import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../../services/userServices';
import Loading from '../Loading/Loading';
import ErrorNotification from '../ErrorNotification/ErrorNotification';
import UsersList from '../UsersList/UsersList';
import { useState } from 'react';
import SearchUserInput from '../SearchUserInput/SearchUserInput';
import AddUserForm from '../AddUserForm/AddUserForm';

export default function Users() {
  const [query, setQuery] = useState('');

  const searchUser = (query: string) => {
    setQuery(query);
  };

  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['users', query],
    queryFn: () => getUsers(query),
  });

  return (
    <>
      <AddUserForm />
      <SearchUserInput searchUser={searchUser} />
      {users && users.length > 0 && <UsersList users={users} />}
      {isLoading && <Loading />}
      {isError && <ErrorNotification />}
    </>
  );
}
