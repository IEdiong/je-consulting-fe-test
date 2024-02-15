import { Movie } from '@/types';

async function getData(id: string) {
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&i=${id}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function MovieDetail({
  params,
}: {
  params: { slug: string };
}) {
  const data: Movie = await getData(params.slug);
  console.log(data);
  const {
    Poster: imgUrl,
    Title: title,
    Plot: overview,
    Rated: rated,
    Released: released,
    Genre: genre,
    Actors: casts,
    Runtime: duration,
    Country: country,
    Director: director,
    Language: language,
    Ratings: ratings,
  } = data;

  return (
    <main className='min-h-screen relative'>
      <div className='pt-[240px]'>
        <div className='max-w-[1024px] px-6 mx-auto'>
          <div className='flex items-start gap-x-10'>
            <div className='w-[240px] rounded-xl overflow-hidden shrink-0'>
              <img
                className='object-fill w-full'
                src={
                  imgUrl === 'N/A' ? 'https://placehold.co/300x444/png' : imgUrl
                }
                alt=''
              />
            </div>
            <div className='flex flex-col gap-y-5 pt-4'>
              <h1 className='text-3xl font-semibold'>{title}</h1>
              <div className='flex gap-x-2'>
                {ratings.length > 0 &&
                  ratings.map((rating, idx) => {
                    if (rating.Source === 'Internet Movie Database') {
                      return (
                        <div className='inline-block bg-slate-200 px-3 py-1 uppercase text-xs rounded-full font-semibold'>
                          imdb: {rating.Value}
                        </div>
                      );
                    } else if (rating.Source === 'Rotten Tomatoes') {
                      return (
                        <div className='inline-block bg-slate-200 px-3 py-1 uppercase text-xs rounded-full font-semibold'>
                          rotten tomato: {rating.Value}
                        </div>
                      );
                    } else if (rating.Source === 'Metacritic') {
                      return (
                        <div className='inline-block bg-slate-200 px-3 py-1 uppercase text-xs rounded-full font-semibold'>
                          metascore: {rating.Value}
                        </div>
                      );
                    }
                  })}
              </div>
              <div>
                <h2 className='font-semibold'>Overview:</h2>
                <p className='mt-2'>{overview}</p>
              </div>
              <div className='flex items-start gap-x-20'>
                <ul>
                  <li>
                    <span className='font-semibold'>Rated: </span>
                    {rated}
                  </li>
                  <li>
                    <span className='font-semibold'>Release date: </span>
                    {released}
                  </li>
                  <li>
                    <span className='font-semibold'>Genre: </span>
                    {genre}
                  </li>
                  <li>
                    <span className='font-semibold'>Casts: </span>
                    {casts}
                  </li>
                </ul>
                <ul>
                  <li>
                    <span className='font-semibold'>Duration: </span>
                    {duration}
                  </li>
                  <li>
                    <span className='font-semibold'>Country: </span>
                    {country}
                  </li>
                  <li>
                    <span className='font-semibold'>Director: </span>
                    {director}
                  </li>
                  <li>
                    <span className='font-semibold'>Language: </span>
                    {language}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
