<div class="ui-fixed-center">
    <slot />
</div>

<style>
    .ui-fixed-center {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
