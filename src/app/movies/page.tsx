'use client';
import { MovieCard } from '@/components';
import { Movie } from '@/types';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function MovieList() {
  const [moviesData, setMoviesData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const searchQuery = useSearchParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/movies?${searchQuery}`
        );
        const data = await response.json();
        if (data.Response === 'False') {
          throw new Error(data.Error);
        }
        const { Search: search } = data;
        setMoviesData(search);
        // console.log(data);
      } catch (error: any) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [searchQuery]);

  return (
    <main className='flex min-h-screen flex-col gap-y-3 justify-start px-4 sm:px-10 pb-10 max-w-[1280px] mx-auto'>
      <h1 className='pt-7 font-semibold text-3xl'>Movie search results</h1>
      {loading ? (
        <p className='flex-1 flex text-lg mt-10 justify-center'>Loading...</p>
      ) : error ? (
        <p className='flex-1 flex text-lg mt-10 justify-center'>
          Movie could not be found. Search for another movie.
        </p>
      ) : (
        <div className='grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-x-10 gap-y-[73px] justify-between'>
          {moviesData &&
            moviesData.map((movie: Movie) => (
              <MovieCard
                key={movie.imdbID}
                id={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                type={movie.Type}
                imgUrl={movie.Poster}
              />
            ))}
        </div>
      )}
    </main>
  );
}
