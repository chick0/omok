<script>
    import { getArrayOfLength } from '$lib'
    import { map } from '$lib/store'
    import Block from './Block.svelte'

    export let y
</script>

<div class="line" style="--y: {y}">
    {#each getArrayOfLength($map.length) as i}
        <Block x={i} {y} />
    {/each}
</div>

<style>
    .line {
        position: relative;
        z-index: calc(var(--count) - var(--y));

        --tn: calc(var(--perSize) / 2 * -1);
        transform: translate(var(--tn), var(--tn));
    }
</style>
