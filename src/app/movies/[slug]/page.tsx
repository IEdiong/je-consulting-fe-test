export default function MovieDetail({ params }: { params: { slug: string } }) {
  return (
    <main className='min-h-screen relative'>
      <div className='pt-[240px]'>
        <div className='max-w-[1024px] mx-auto'>
          <div className='flex items-start gap-x-10'>
            <div className='w-[240px] rounded-xl overflow-hidden shrink-0'>
              <img
                className='object-fill w-full'
                src='https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg'
                alt=''
              />
            </div>
            <div className='flex flex-col gap-y-5 pt-4'>
              <h1 className='text-3xl font-semibold'>Avengers: Endgame</h1>
              <div className='flex gap-x-2'>
                <div className='inline-block bg-slate-200 px-3 py-1 uppercase text-xs rounded-full font-semibold'>
                  imdb: 8.4/10
                </div>
                <div className='inline-block bg-slate-200 px-3 py-1 uppercase text-xs rounded-full font-semibold'>
                  rotten tomato: 94%
                </div>
                <div className='inline-block bg-slate-200 px-3 py-1 uppercase text-xs rounded-full font-semibold'>
                  metascore: 94%
                </div>
              </div>
              <div>
                <h2 className='font-semibold'>Overview:</h2>
                <p className='mt-2'>
                  After the devastating events of Avengers: Infinity War (2018),
                  the universe is in ruins. With the help of remaining allies,
                  the Avengers assemble once more in order to reverse Thanos'
                  actions and restore balance to the universe.
                </p>
              </div>
              <div className='flex items-start gap-x-20'>
                <ul>
                  <li>
                    <span className='font-semibold'>Rated: </span>PG-13
                  </li>
                  <li>
                    <span className='font-semibold'>Release date: </span>26 Apr
                    2019
                  </li>
                  <li>
                    <span className='font-semibold'>Genre: </span>Action,
                    Adventure, Drama
                  </li>
                  <li>
                    <span className='font-semibold'>Casts: </span>Robert Downey
                    Jr., Chris Evans, Mark Ruffalo
                  </li>
                </ul>
                <ul>
                  <li>
                    <span className='font-semibold'>Duration: </span>181 min
                  </li>
                  <li>
                    <span className='font-semibold'>Country: </span>United
                    States
                  </li>
                  <li>
                    <span className='font-semibold'>Director: </span>Anthony
                    Russo, Joe Russo
                  </li>
                  <li>
                    <span className='font-semibold'>Language: </span>English,
                    Japanese, Xhosa, German
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
