<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let items;
    export let activeItem;
</script>
<div class="tabs">
    <ul>
        {#each items as item}
            <li on:click="{() => dispatch("changeTab", item)}">
                <div class:active={item === activeItem}>{item}</div>
            </li>
        {/each}
    </ul>
</div>
<style>
    ul{
        display: flex;
        justify-content: center;
    }
    li{
        list-style-type: none;
        margin: 0 2rem;
        cursor: pointer;
    }
    .active{
        color: crimson;
        padding-bottom: 10px;
        border-bottom: 2px solid crimson;
    }
</style>