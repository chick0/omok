<script>
    import { map, nextTurn, turn } from '$lib/store'

    /** @type {Number} */
    export let x

    /** @type {Number} */
    export let y

    /** @type {Number} */
    let isBlackStone = 0
    $: isBlackStone = $map[y][x]

    /**
     * @returns {"is-none"|"is-black"|"is-white"}
     */
    function getStoneClassName() {
        switch (isBlackStone) {
            case 0:
                return 'is-none'
            case 1:
                return 'is-black'
            default:
                return 'is-white'
        }
    }

    function onStoneClicked() {
        if ($map[y][x] != 0) {
            return
        }

        $map[y][x] = $turn
        nextTurn()

        // alert(`${x}, ${y} clicked`)
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<span class="stone {getStoneClassName()}" on:click={onStoneClicked}></span>

<style>
    .stone {
        border: 1px solid black;
        border-radius: 50%;

        display: inline-block;
        --wh: calc(var(--perSize) * 0.7);
        width: var(--wh);
        height: var(--wh);

        position: relative;
        top: 50%;
        left: 50%;

        --tf: calc(var(--wh) / 4);
        transform: translate(var(--tf), var(--tf));
    }

    /* 빈돌 */
    .is-none {
        border: 0;
    }

    .is-none:hover {
        border: 2px dotted red;
        cursor: pointer;
    }

    /* 흑돌 */
    .is-black {
        background-color: #000;
    }

    /* 백돌 */
    .is-white {
        background-color: #fff;
    }
</style>
