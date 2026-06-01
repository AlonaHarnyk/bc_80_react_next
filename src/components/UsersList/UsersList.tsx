import { deleteUser, toggleStatus } from '../../services/userServices';
import type { User, UserStatus } from '../../types';
import Button from '../Button/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface UsersListProps {
  users: User[];
}

export default function UsersList({ users }: UsersListProps) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const handleDelete = (id: User['id']) => {
    mutate(id);
  };

  const mutation = useMutation({
    mutationFn: toggleStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users'],
      });
    },
  });

  const handleChangeStatus = (id: User['id'], userStatus: UserStatus) => {
    mutation.mutate({ id, userStatus });
  };

  return (
    <ul>
      {users.map(({ id, name, isOnline }) => {
        return (
          <li key={id}>
            <p>{name}</p>
            <p>IsOnline: {isOnline ? 'Online' : 'Offline'}</p>
            <Button title="Delete user" clickHandler={() => handleDelete(id)} />
            <Button
              title="Toggle status"
              clickHandler={() =>
                handleChangeStatus(id, { isOnline: !isOnline })
              }
            />
          </li>
        );
      })}
    </ul>
  );
}

// Додати компоненту UserItem параграф, в якому виводити інформацію про те, чи користувач онлайн.
// Додати компоненту UserItem кнопку Toggle status, ми натисанні на яку
// на бекенд має відправлятись put-запит для зміни статусу на протилежний.
