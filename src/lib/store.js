import { get, writable } from 'svelte/store'
import { getEmptyMap } from './map'

/** 오목판 */
export const map = writable(getEmptyMap(20))

/** 오목판 크기 */
export const mapSize = writable(20)

/**
 * - 0:
 * - 1: 흑돌
 * - 2: 백돌
 */
export const turn = writable(0)

export function nextTurn() {
    switch (get(turn)) {
        case 1:
            turn.set(2)
            break
        default:
            turn.set(1)
            break
    }
}
