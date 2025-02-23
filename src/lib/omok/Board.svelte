<script>
    import { map } from '$lib/store'
    import Line from './Line.svelte'
</script>

<div class="board" style="--count: {$map.length}">
    {#each { length: $map.length } as _, i}
        <Line y={i}></Line>
    {/each}
</div>

<style>
    .board {
        --size: 700px;
        --perSize: calc(var(--size) / var(--count));

        background-color: rgb(255, 209, 153);

        width: var(--size);
        height: var(--size);
    }
</style>
