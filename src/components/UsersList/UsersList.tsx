import type { User } from '../../types';

interface UsersListProps {
  users: User[];
}

export default function UsersList({ users }: UsersListProps) {
  return (
    <ul>
      {users.map(({ id, name }) => {
        return (
          <li key={id}>
            <p>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}
