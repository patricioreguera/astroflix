import type {  Movies } from "../interfaces/movies_interface";
import {apiInterceptor} from "../interceptors/apiResult.interceptor"

const bearerKey: string = import.meta.env.BEARER_KEY;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${bearerKey}`,
  },
};



export async function getMovies(page:number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=es-ES&page=${page}`,

    options
  );

  const movies: Movies = await response.json();
  const formatApiResponse = (apiInterceptor(movies))
  return formatApiResponse

  
}