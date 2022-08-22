export const validateGenres = (genres: string) => {
    try {
       return /^ *\d+ *(?:, *\d+ *)*$/.test(genres) ; 
    } catch (error) {
        throw new Error(`Only number or number followed by comma allowed: ${error}`);
    }
};