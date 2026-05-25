import { useState } from "react";
import type { User } from "../../types";
import { getUsers } from "../../services/api";
import Button from '../Button/Button';
import AddForm from '../AddForm/AddForm';

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

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
    {!users.length && <Button title="Show users" clickHandler={showUsers} />}
    {loading && <p>Loading...</p>}
      { isError && <p>Error!</p> }
    {users.length > 0 && <ul>
  {users.map((user) => (
    <li key={user.id}>{user.name}</li>
  ))}
      </ul> }
      { users.length > 0 && !isFormOpen && <Button title="Add user" clickHandler={ () => setIsFormOpen(true) } /> }
      {isFormOpen && <AddForm onClose={() => setIsFormOpen(false)} />}
  </>
);
}