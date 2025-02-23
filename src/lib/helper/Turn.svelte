<script>
    import { turn } from '$lib/store'
</script>

<p>&lt;순서&gt;</p>

{#if $turn == 0}
    <p>-</p>
{:else if $turn == 1}
    <p>흑돌</p>
{:else if $turn == 2}
    <p>백돌</p>
{/if}
