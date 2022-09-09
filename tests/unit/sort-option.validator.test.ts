import { validateSortOptions } from '../../src/validators/sort-option.validator';

fdescribe('Unit testing sort option validation function', () => {

    test('It should accept a correct sort option', () => {
        expect(validateSortOptions('vote_average.asc')).toBe(true);
    });

    test('It should reject incorrect option', () => {
        expect(validateSortOptions('some non-valid option')).toBe(false);
    });

});