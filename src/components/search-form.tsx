'use client';

export default function SearchForm({
  hasFocus = false,
}: {
  hasFocus?: boolean;
}) {
  return (
    <form role='search'>
      <input
        type='search'
        placeholder='Search for a movie'
        {...(hasFocus ? { autoFocus: true } : {})}
      />
    </form>
  );
}
