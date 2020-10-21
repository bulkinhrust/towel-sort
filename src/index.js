module.exports = function towelSort (matrix) {
    if (!matrix) {
        return [];
    }

    return matrix.reduce((result, value, key) => {
        if (key % 2 === 0) {
            return result.concat(value);
        }
        return result.concat(value.reverse());
    }, []);
};
