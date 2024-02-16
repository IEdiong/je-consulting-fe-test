import Image from 'next/image';
import Link from 'next/link';

type IMovieCard = {
  id: string;
  title: string;
  year: string;
  type: string;
  imgUrl: string;
};

export default function MovieCard({
  id,
  title,
  year,
  type,
  imgUrl,
}: IMovieCard) {
  return (
    <Link
      href={`/movies/${id}`}
      className='w-full bg-white rounded-xl overflow-hidden group hover:shadow-xl'
    >
      <div className='h-[444px] overflow-hidden relative'>
        <Image
          className='object-cover h-full w-full'
          src={imgUrl === 'N/A' ? 'https://placehold.co/300x444/png' : imgUrl}
          alt='movie'
          width={300}
          height={444}
          priority
        />
      </div>
      <div className='p-4'>
        <p className='text-sm text-gray-700'>{year}</p>
        <h2 className='mt-2 text-lg font-bold group-hover:text-yellow-500'>
          {title}
        </h2>
        <span className='mt-6 inline-block bg-slate-200 px-3 py-1 uppercase text-xs rounded-full font-semibold'>
          {type}
        </span>
      </div>
    </Link>
  );
}
