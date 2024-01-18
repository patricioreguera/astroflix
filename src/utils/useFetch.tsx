import { getMovies } from "../api/upcomingMovies";

export const useFetch = async (id: any) => {
	const movies = await getMovies(id);

	return { movies };
};
