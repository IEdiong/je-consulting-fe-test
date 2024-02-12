'use client';

import { useState } from 'react';

export default function SearchForm({
  hasFocus = false,
}: {
  hasFocus?: boolean;
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showRecentSearch, setShowRecentSearch] = useState(false);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    setSearchQuery(value);
    setShowRecentSearch(value.trim().length > 0);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    // handle form submission
    if (searchQuery === '') {
      return;
    }
    alert(`Request sent to the backend`);
  };

  return (
    <form role='search' onSubmit={handleSubmit}>
      <input
        type='search'
        name='search'
        placeholder='Search for a movie'
        {...(hasFocus ? { autoFocus: true } : {})}
        onChange={handleChange}
      />
      {showRecentSearch && (
        <ol data-testid='recent-searches'>
          <li>Captain America</li>
          <li>Avengers</li>
        </ol>
      )}
    </form>
  );
}
