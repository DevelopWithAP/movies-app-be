import supertest from "supertest";
import app from '../../src/app';

const request = supertest(app);

describe('Testing /sort-options endpoint', () => {
    test('GET /sort-options shoul respond with 200 OK', async () => {
        const response = await request.get('/sort-options');

        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toEqual(4);
    });
});