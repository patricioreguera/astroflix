export interface MoviesAPI {
    dates: Dates;
    page: number;
    results: MovieAPI[];
    total_pages: number;
    total_results: number;
  }
  
  export interface Dates {
    maximum: Date;
    minimum: Date;
  }
  
  export interface Movies {
    dates: Dates;
    page: number,
		results: Movie[],
		pages: number,
		total_results: number,

  }
  export interface Movie {
    id:number,
    backdrop: string,
		title: string,
		description: string,
		poster: string

  }
  export interface MovieAPI {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: Date;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }