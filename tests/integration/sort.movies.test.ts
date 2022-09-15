import axios from 'axios';
import { getMovies } from '../../src/services/movies.service';
import * as sortedMovies from './sortedMovies.json';

jest.mock('axios');
const mockAxios = axios as jest.Mocked<typeof axios>;

describe('Testing the sort movies service', () => {
    it('Should return a list of movies', async () => {

        mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: sortedMovies }));

        const movies = await getMovies(1);

        console.log(`Movies: ${movies}`);

        expect(movies.movies).toBe(sortedMovies);
    });
});

