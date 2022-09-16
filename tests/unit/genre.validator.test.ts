import { validateGenres } from '../../src/validators/genre.validator';

describe('Unit testing the genre validator function', () => {

    test('It should reject a query with characters', () => {
        expect(validateGenres('drama')).toBe(false);
    });

    test('It should accept a query with only one number', () => {
        expect(validateGenres('53')).toBe(true);
    });

    test('It should accept a query with the pattern "number,number"', () =>{
        expect(validateGenres('23,25')).toBe(true);
    });

    test('It should accept a query with pattern "number,number,number"', () => {
        expect(validateGenres('23,25,67')).toBe(true);
    });

    test('It should accept a query with the pattern "number,_space_number"', () => {
        expect(validateGenres('21, 22')).toBe(true);
    });

    test('It should accept a query with the pattern "number,_space_ _space_number"', () => {
        expect(validateGenres('21,  22')).toBe(true);
    });
});