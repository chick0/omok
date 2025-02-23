<div class="ui-modal-background"></div>

<div class="ui-modal-popup">
    <slot />
</div>

<style>
    .ui-modal-background {
        position: absolute;
        width: 100vw;
        height: 100vh;

        top: 0;
        left: 0;
        z-index: 99;

        background-color: rgba(0, 0, 0, 0.9);
    }

    .ui-modal-popup {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 100;
        transform: translate(-50%, -50%);

        padding: 30px;
        border-radius: 0.25em;
        background-color: #fff;
        box-shadow: 0px 0px 2px 2px #cfcdcd;
    }
</style>
