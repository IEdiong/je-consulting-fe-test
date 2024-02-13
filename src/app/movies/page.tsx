import { MovieCard } from '@/components';

export default function MovieList() {
  const numberList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <main className='flex min-h-screen flex-col gap-y-3 justify-start px-4 sm:px-10 max-w-[1280px] mx-auto'>
      <h1>Movie search results</h1>
      <div className='grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-x-10 gap-y-[73px] justify-between'>
        {numberList.map((val: number, idx: number) => (
          <MovieCard key={idx} />
        ))}
      </div>
    </main>
  );
}
