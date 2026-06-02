interface SearchUserInputProps {
  searchUser: (query: string) => void;
  query: string;
}

export default function SearchUserInput({
  searchUser,
  query,
}: SearchUserInputProps) {
  return (
    <input
      type="text"
      name="search"
      defaultValue={query}
      onChange={(e) => searchUser(e.target.value)}
    />
  );
}
