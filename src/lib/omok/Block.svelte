<script>
    import { map } from '$lib/store'
    import Stone from './Stone.svelte'

    /** @type {Number} */
    export let x

    /** @type {Number} */
    export let y
</script>

<div class="block x-{x} y-{y}" data-x={x} data-y={y}>
    <Stone {x} {y} />
</div>

<style>
    .block {
        display: inline-block;
        outline: 1px solid black;

        width: var(--perSize);
        height: var(--perSize);
    }

    .x-0,
    .y-0 {
        outline: 0;
    }
</style>
