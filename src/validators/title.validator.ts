export const validate = (title: string): boolean => {
    try {
        return /^[0-9a-zA-Z\s\-\.]*$/.test(title);
    } catch (error) {
        throw new Error('Malformed title: ' + error);
    }
};