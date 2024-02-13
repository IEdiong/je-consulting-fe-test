import { SearchForm } from '@/components';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col gap-y-3 justify-start items-center p-24 pt-[320px]'>
      <h1 className='text-5xl font-semibold tracking-tighter'>Movie Search</h1>
      <SearchForm hasFocus={true} />
    </main>
  );
}
