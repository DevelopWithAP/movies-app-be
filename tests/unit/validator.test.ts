import { validate } from '../../src/validators/title.validator';

describe('Unit testing the validator function', () => {
    const mockTitleOne: string = 'Minions';
    const mockTitleTwo: string = 'Minions!#';
    const mockTitleThree: string = 'Some Random Movie Name - pt2.';


    test('should accept the title', () => {
        let result: boolean = validate(mockTitleOne);
        expect(result).toBe(true);
    });

    test('should reject a title with non-specified characters', () => {
        let result: boolean = validate(mockTitleTwo);
        expect(result).toBe(false);
    });

    test('should accept a title that contains numbers, spaces, lettes, dots and dashes', () => {
        let result: boolean = validate(mockTitleThree);
        expect(result).toBe(true);
    });
});