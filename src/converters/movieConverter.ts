const PREFIX: string = 'https://image.tmdb.org/t/p/w500';
const MOVIES_PREFIX: string = 'https://image.tmdb.org/t/p/original'; 


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

const convertProdCompany = (prodComp: TmdbProductionCompany): ProductionCompany => {
    return {
        id: prodComp.id,
        logoPath: prodComp.logo_path,
        name: prodComp.name,
        originCountry: prodComp.origin_country
    };
};

const convertProdCountry = (prodCountry: TmdbProductionCountry): ProductionCountry => {
    return {
        iso: prodCountry.iso_3166_1,
        name: prodCountry.name
    };
};

const convertSpokenLang = (spokenLang: TmdbSpokenLanguage): SpokenLanguage => {
    return {
        englishName: spokenLang.english_name,
        iso: spokenLang.iso_639_1,
        name: spokenLang.name
    };
};


export const convertToMovieDetails = (movieDetails: TmdbMovieDetails): MovieDetails => {
    return {
        ...movieConverter(movieDetails), 
        backdropPath: `${MOVIES_PREFIX}/${movieDetails.backdrop_path}`,
        budget: movieDetails.budget,
        genres: movieDetails.genres,
        originalLanguage: movieDetails.original_language,
        originalTitle: movieDetails.original_title,
        overview: movieDetails.overview,
        productionCompanies: movieDetails.production_companies.map(convertProdCompany),
        productionCountries: movieDetails.production_countries.map(convertProdCountry),
        revenue: movieDetails.revenue,
        runtime: movieDetails.runtime,
        spokenLanguages: movieDetails.spoken_languages.map(convertSpokenLang),
        status: movieDetails.status,
        tagline: movieDetails.tagline,
        title: movieDetails.title,
        posterPath: `${MOVIES_PREFIX}/${movieDetails.poster_path}`,
        voteAverage: movieDetails.vote_average,
        voteCount: movieDetails.vote_count,
        releaseDate: movieDetails.release_date,
        homepage: movieDetails.homepage
    };
};
