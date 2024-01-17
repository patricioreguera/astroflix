import { useMoviesStore } from "../store/moviesStore";
import type { Movie } from "../interfaces/movies_interface";

const Demo = ({ movie }: { movie: Movie }) => {
	const { favoritesMovies, setFavoritesMovies } = useMoviesStore(
		(state: any) => state
	);
	const changeDemo = () => {
		// Verifica si el movie.id ya está en favoritesMovies
		if (favoritesMovies.includes(movie.id)) {
			// Si está presente, filtra el elemento del array
			const newResult = favoritesMovies.filter((id: number) => id !== movie.id);
			setFavoritesMovies(newResult);
		} else {
			// Si no está presente, agrégalo al array
			setFavoritesMovies([...favoritesMovies, movie.id]);
		}
		console.log(favoritesMovies);
	};

	return (
		<div>
			<button
				className={`border border-red-600 px-5 py-1 rounded-lg ${
					favoritesMovies.includes(movie.id)
						? "border-stone-500 "
						: "border-red-600"
				}`}
				onClick={() => changeDemo()}
			>
				{favoritesMovies.includes(movie.id) ? "Remove" : "Add "}
			</button>
		</div>
	);
};

export default Demo;
