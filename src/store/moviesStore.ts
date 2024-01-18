import { create } from "zustand";

export const useMoviesStore = create((set): any => ({
	page:1,
	setPage: (page:number)=> set({page}),
	favoritesMovies: [],
	setFavoritesMovies: (favoritesMovies:[]) => set({ favoritesMovies }),
	movies:{},
	setMovies:(movies:{})=> set({movies})
}));
