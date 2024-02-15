import Image from 'next/image';

type IMovieCard = {
  title: string;
  year: string;
  type: string;
  imgUrl: string;
};

export default function MovieCard({ title, year, type, imgUrl }: IMovieCard) {
  return (
    <div className='w-full bg-white rounded-xl overflow-hidden'>
      <div>
        <Image
          className='object-fill w-full'
          src={imgUrl === 'N/A' ? 'https://placehold.co/300x444/png' : imgUrl}
          alt='movie'
          width={300}
          height={444}
          priority
        />
      </div>
      <div className='p-4'>
        <p className='text-sm text-gray-700'>{year}</p>
        <h2 className='mt-2 text-lg font-bold'>{title}</h2>
        <span className='mt-6 inline-block bg-slate-200 px-3 py-1 uppercase text-xs rounded-full font-semibold'>
          {type}
        </span>
      </div>
    </div>
  );
}
