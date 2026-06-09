'use client';

import { User } from '@/type';
import Link from 'next/link';

interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  return (
    <ul>
      {users.map(({ name, id }) => (
        <li key={id}>
          <Link href={`/users/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
}
