import { deleteUser } from '../../services/userServices';
import type { User } from '../../types';
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
  return (
    <ul>
      {users.map(({ id, name }) => {
        return (
          <li key={id}>
            <p>{name}</p>
            <Button title="Delete user" clickHandler={() => handleDelete(id)} />
          </li>
        );
      })}
    </ul>
  );
}
