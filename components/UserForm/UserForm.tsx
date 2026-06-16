'use client';
import { useUserStore } from '@/store/userStore';

function UserForm() {
  const { draft, setUserDraft } = useUserStore();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setUserDraft({ ...draft, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(draft);
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
