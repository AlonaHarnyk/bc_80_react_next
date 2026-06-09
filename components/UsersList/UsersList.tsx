'use client';
import { deleteUser } from '@/lib/usersServices';
import { User } from '@/type';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <p>name:{user.name}</p>
          <p>email:{user.email}</p>
          <button onClick={() => mutate(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
