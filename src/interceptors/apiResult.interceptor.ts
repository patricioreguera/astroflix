export const apiInterceptor = (response: any) => {

	const newResults = response.results
	//Filtra los resultados primero para asegurarnos que tenga poster
	  .filter((result: any) =>  result.poster_path )
	  .map((result: any) => ({
		id: result.id,
		backdrop: result.backdrop_path && `https://image.tmdb.org/t/p/original${result.backdrop_path}` ,
		title: result.title,
		description: result.overview,
		poster: result.poster_path &&`https://image.tmdb.org/t/p/original${result.poster_path}` ,
	  }));
	 
	return{
	  dates: response.dates,
	  page: response.page,
	  results: newResults,
	  pages: response.total_pages,
	  total_results: response.total_results,
	};
  
  };