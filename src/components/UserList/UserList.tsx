import type { User } from "../../types";
interface UsersListProps {
  users: User[];
}
export default function UserList({ users }: UsersListProps) {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </li>
        );
      })}
    </ul>
  );
}
