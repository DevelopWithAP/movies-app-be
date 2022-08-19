import express from 'express';
import supertest from 'supertest';
import moviesRoutes from '../../src/routes/movies.routes';

const app = express();
const request = supertest(app);

app.use('/movies', moviesRoutes);

describe('Testing movies routes', () => {
    it('GET to /movies should return 200 OK', async () => {
        const response = await request.get('/movies');

        expect(response.statusCode).toBe(200);
    });

});






