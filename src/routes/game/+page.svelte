<script>
    import FixedCenter from '$lib/ui/FixedCenter.svelte'
    import FixedTopCenter from '$lib/ui/FixedTopCenter.svelte'
    import TextCenter from '$lib/ui/TextCenter.svelte'
    import Turn from '$lib/helper/Turn.svelte'
    import Board from '$lib/omok/Board.svelte'
</script>

<FixedTopCenter>
    <TextCenter>
        <Turn />
    </TextCenter>
</FixedTopCenter>

<FixedCenter>
    <Board />
</FixedCenter>
