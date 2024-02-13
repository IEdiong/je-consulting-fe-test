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
    <form role='search' onSubmit={handleSubmit} className='relative w-[700px]'>
      <input
        className='w-[700px] h-16 rounded-full ps-10 focus:outline-none focus-visible:outline-yellow-500 focus-visible:outline-offset-4 focus-visible:outline-2'
        type='search'
        name='search'
        placeholder='Search for a movie'
        {...(hasFocus ? { autoFocus: true } : {})}
        onChange={handleChange}
      />
      <button
        className='absolute h-12 px-8 flex items-center bg-yellow-400 rounded-full top-2 right-2'
        type='submit'
      >
        Search
      </button>
      {showRecentSearch && (
        <ol data-testid='recent-searches'>
          <li>Captain America</li>
          <li>Avengers</li>
        </ol>
      )}
    </form>
  );
}
