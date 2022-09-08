import { getSortOptions } from '../services/sort-options.service';

export const validateSortOptions = (sortOption: string) => {
    const options: SortOption[] = getSortOptions();
    console.log(`Options: ${options}\n Option passed: ${sortOption}`);
};