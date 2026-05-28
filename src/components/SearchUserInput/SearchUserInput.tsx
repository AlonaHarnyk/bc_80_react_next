interface SearchUserInputProps {
  searchUser: (query: string) => void;
}

export default function SearchUserInput({ searchUser }: SearchUserInputProps) {
  const handleSubmit = (formData: FormData) => {
    const searchQuery = formData.get('search') as string;
    const trimmedValue = searchQuery.trim();

    if (trimmedValue.length > 0) {
      searchUser(trimmedValue);
    }
  };

  return (
    <form action={handleSubmit}>
      <input type="text" name="search" />
      <button type="submit">search user</button>
    </form>
  );
}
