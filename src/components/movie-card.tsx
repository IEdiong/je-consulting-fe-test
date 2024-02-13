import Image from 'next/image';

export default function MovieCard() {
  return (
    <div className='w-full bg-white rounded-xl overflow-hidden'>
      <div>
        <Image
          className='object-fill w-full'
          src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
          alt='movie'
          width={300}
          height={444}
          priority
        />
      </div>
      <div className='p-4'>
        <p className='text-sm text-gray-700'>2012</p>
        <h2 className='mt-2 text-lg font-bold'>The Avengers</h2>
        <span className='mt-6 inline-block bg-slate-200 px-3 py-1 uppercase text-xs rounded-full font-semibold'>
          movie
        </span>
      </div>
    </div>
  );
}
