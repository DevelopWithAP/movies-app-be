export const CacheService = {
    isEmpty: <T>(inputArray: T[]): boolean => {

        if(!inputArray) {
            throw new Error('Cannot use method on undefined input.');
        }
        return true ? inputArray.length === 0 : false;
    },
    setCache: <T>(inputArray: T[]): T[] => {
        let cache: T[] = [];
        if(!cache.length) {
            cache = inputArray;
        }
        return cache;
    }
};