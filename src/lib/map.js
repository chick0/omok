/**
 * @param {Number} size
 * @returns {Array<Array<Number>>}
 */
export function getEmptyMap(size) {
    /** @type {Array<Array<Number>>} */
    let r = []

    for (let i = 0; i < size; i++) {
        /** @type {Array<Number>} */
        let t = []

        for (let j = 0; j < size; j++) {
            t.push(0)
        }

        r.push(t)
    }

    return r
}
