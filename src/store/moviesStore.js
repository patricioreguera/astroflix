import { create } from "zustand";

export const useMoviesStore = create((set) => ({
	favoritesMovies: [],
	setFavoritesMovies: (favoritesMovies) => set({ favoritesMovies }),
}));
