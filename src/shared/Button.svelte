<script>
    export let type = "primary";
    export let flat = false;
    export let inverse = false;
</script>

<button class={type} class:flat={flat} class:inverse={inverse}>
    <slot></slot>
</button>

<style>
    button{
        padding: 8px 13px;
        font-weight: bold;
        cursor: pointer;
        border-radius: 5px;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    }
    .primary{
        background-color: crimson;
        color: white;
    }
    .secondary{
        background: #45c496;
        color: white;
    }
    .primary.inverse{
        background: white;
        color: crimson;
        border: 2px solid crimson;
    }
    .secondary.inverse{
        background: white;
        color: #45c496;
        border: 2px solid #45c496;
    }
    .flat{
        box-shadow: none;
    }
</style>