'use client';

import { deleteUser } from '@/lib/usersServices';
import type { User } from '@/type';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface UserDetailsProps {
  user: User;
}

export default function UserDetails({ user }: UserDetailsProps) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  return (
    <>
      <p>name:{user.name}</p>
      <p>email:{user.email}</p>
      <button onClick={() => mutate(user.id)}>Delete</button>
    </>
  );
}
