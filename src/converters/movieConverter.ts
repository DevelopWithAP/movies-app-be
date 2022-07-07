const PREFIX: string = 'https://image.tmdb.org/t/p/w500'; 

export const movieConverter = (tmdbMovie: TmdbMovie): Movie => {
    return {
        movieId: tmdbMovie.id,
        title: tmdbMovie.title,
        releaseDate: tmdbMovie.release_date,
        backdropPath: `${PREFIX}/${tmdbMovie.backdrop_path}`,
        posterPath: `${PREFIX}/${tmdbMovie.poster_path}`,
        voteAverage: tmdbMovie.vote_average,
    };
}; 