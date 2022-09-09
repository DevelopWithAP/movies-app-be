import { getSortOptions } from '../services/sort-options.service';

export const validateSortOptions = (sortOption: string): boolean => {
    const sortOptions: SortOption[] = getSortOptions();
    
    const optionsArray: string[] = [];

    for (const key in sortOptions) {
        const value = sortOptions[key];
        optionsArray.push(value.code);
    }

    return optionsArray.includes(sortOption);
};