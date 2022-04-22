interface Response {
  status_message?: string;
  success?: boolean;
  status_code?: number;
}

type Movie = {
  adult?: boolean;
  backdrop_path?: string | null;
  belongs_to_collection?: null | object;
  budget?: number;
  genres?: Array<{ id: number; name: string }>;
  genre_ids?: Array<number>;
  homepage?: string | null;
  id?: number;
  imdb_id?: string | null;
  original_language?: string;
  original_title?: string;
  overview?: string | null;
  popularity?: number;
  poster_path?: string | null;
  production_companies?: Array<{
    name: string;
    id: number;
    logo_path: string | null;
    origin_country: string;
  }>;
  production_countries?: Array<{
    iso_3166_1: string;
    name: string;
  }>;
  release_date?: string;
  revenue?: number;
  runtime?: number | null;
  spoken_languages?: Array<{
    iso_639_1: string;
    name: string;
  }>;
  status?: string;
  tagline?: string | null;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
};

export interface MovieList extends Response {
  dates?: {
    maximum: string;
    minimum: string;
  };
  page?: number;
  results?: Movie[];
  total_pages?: number;
  total_results?: number;
}

export interface MovieDetals extends Response, Movie {}

type Person = {
  adult?: boolean;
  gender?: number;
  id?: number;
  known_for_department?: string;
  name?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: null | string;
  cast_id?: number;
  character?: string;
  credit_id?: string;
  order?: number;
  department?: string;
  job?: string;
};

export interface MovieCredits extends Response {
  id?: number;
  cast?: Person[];
  crew?: Person[];
}

type Image = {
  aspect_ratio?: number;
  file_path?: string;
  height?: number;
  iso_639_1?: null | string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
};

export interface MovieImages extends Response {
  id?: number;
  backdrops?: Image[];
  posters?: Image[];
}

type Video = {
  iso_639_1?: string;
  iso_3166_1?: string;
  name?: string;
  key?: string;
  site?: string;
  size?: number;
  type?: string;
  official?: boolean;
  published_at?: Date;
  id?: string;
};
export interface MovieVideos extends Response {
  id?: number;
  results?: Video[];
}
