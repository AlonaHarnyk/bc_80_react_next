'use client';
import { addUser } from '@/lib/usersServices';
import { useUserStore } from '@/store/userStore';
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

function UserForm() {
  const { draft, setUserDraft, clearUserDraft } = useUserStore();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      clearUserDraft();
    },
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setUserDraft({ ...draft, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(draft);
    mutate({
      ...draft,
      isOnline: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          name="name"
          type="text"
          value={draft.name}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          name="email"
          type="text"
          value={draft.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
