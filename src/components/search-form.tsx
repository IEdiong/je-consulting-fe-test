'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchForm({
  hasFocus = false,
}: {
  hasFocus?: boolean;
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showRecentSearch, setShowRecentSearch] = useState(false);
  const router = useRouter();
  let recentSearchQueries: [] = [];

  if (typeof window !== 'undefined') {
    // Your client-side code that uses window goes here
    recentSearchQueries = JSON.parse(
      window.localStorage.getItem('recentSearches') || '[]'
    );
  }

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

    storeRecentSearch(searchQuery);

    router.push(`/movies/?s=${searchQuery}`);
  };

  const storeRecentSearch = (searchQuery: string) => {
    let recentSearches: string[] = [];
    if (typeof window !== 'undefined') {
      recentSearches = JSON.parse(
        window.localStorage.getItem('recentSearches') || '[]'
      );
    }

    // Remove searchQuery if it already exists in recentSearches
    recentSearches = recentSearches.filter((query) => query !== searchQuery);

    // Add searchQuery to the end of recentSearches
    recentSearches.push(searchQuery);

    // Ensure recentSearches array length doesn't exceed 4
    if (recentSearches.length > 4) {
      recentSearches.shift();
    }

    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
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
      {showRecentSearch && recentSearchQueries.length > 0 && (
        <ol
          data-testid='recent-searches'
          className='absolute top-20 p-2 rounded-3xl bg-white w-[700px] flex flex-col gap-y-1'
        >
          {recentSearchQueries &&
            recentSearchQueries.map((query: string, idx: number) => (
              <li
                key={idx}
                className='px-4 py-2 hover:bg-yellow-100 rounded-3xl transition-all ease-in'
              >
                {query}
              </li>
            ))}
        </ol>
      )}
    </form>
  );
}

// TODO: 1. Add an animation to the list appearance
