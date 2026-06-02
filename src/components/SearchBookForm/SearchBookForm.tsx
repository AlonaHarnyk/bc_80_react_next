interface SearchBookFormProps {
  setQuery: (value: string) => void;
  query: string;
}

function SearchBookForm({ setQuery, query }: SearchBookFormProps) {
  return (
    <input
      type="text"
      name="searchBook"
      defaultValue={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default SearchBookForm;
