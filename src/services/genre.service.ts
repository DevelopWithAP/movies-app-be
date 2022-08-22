import axios from 'axios';

const API_KEY: string = process.env.API_KEY as string

let genresCache: Genre[] = [];

export const fetchGenres = async(): Promise<Genres> => {
    const genresEndpoint = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;

    if(genresCache.length === 0) {
        const { data } = await axios.get<Genres>(genresEndpoint);

        genresCache = data.genres;
    }
    return {
        genres: genresCache,
    };
};
