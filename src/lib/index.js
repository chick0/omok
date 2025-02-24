/**
 * @param {Number} end
 * @param {Number} start
 * @param {Number} inc
 * @returns {Number[]}
 */
export function getArrayOfLength(end, start = 0, inc = 1) {
    let result = []

    while (start < end) {
        result.push(start)
        start += inc
    }

    return result
}
