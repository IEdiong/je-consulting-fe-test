export type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
  Plot: string;
  Rated: string;
  Released: string;
  Genre: string;
  Actors: string;
  Runtime: string;
  Country: string;
  Director: string;
  Language: string;
  Ratings: Rating[];
};

export type Rating = { Source: RatingSource; Value: string };

type RatingSource =
  | 'Internet Movie Database'
  | 'Rotten Tomatoes'
  | 'Metacritic';
