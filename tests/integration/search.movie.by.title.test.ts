import app from '../../src/app';
import request from 'supertest';

describe('Testing /movies endpoint', () => {
    test('GET to /movies should respond with 200 OK', async () => {
        const response = await request(app).get('/movies');

        expect(response.statusCode).toBe(200);
        expect(response.body.movies).toBeInstanceOf(Array);
    });

    const mockTitle: string = 'Matrix';
    test(`GET to /movies?title=${mockTitle} should return 200 OK`, async () => {
        const response = await request(app).get(`/movies?title=${mockTitle}`);

        expect(response.statusCode).toBe(200);
        expect(response.body.totalPages).toEqual(4);
        expect(response.body.movies).toBeInstanceOf(Array);
    });
});