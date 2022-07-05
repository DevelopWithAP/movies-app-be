const PREFIX: string = 'https://image.tmdb.org/t/p/w500'; 

export const movieConverter = (movieTitle: TmdbMovie): Movie => {
    return {
        movieId: movieTitle.id,
        title: movieTitle.title,
        releaseDate: movieTitle.release_date,
        backdropPath: `${PREFIX}/${movieTitle.backdrop_path}`,
        posterPath: `${PREFIX}/${movieTitle.poster_path}`,
        voteAverage: movieTitle.vote_average,
    };
}; 