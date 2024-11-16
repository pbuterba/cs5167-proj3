<script>
    export let classData;
    export let option = false;
    export let placeholder = false;
</script>
<main>
    {#if option}
        <p>classData.name</p>
    {:else if placeholder}
        <p>Placeholder</p>
    {:else}
        <span class="class-number">{classData.number}</span> <br>
        <span class="class-name">{classData.name}</span>
    {/if}
</main>
<style>
    main {
        border-radius: 5px;
        box-shadow: 5px 5px 5px #D3D3D3;
        border: 1px solid black;
        margin: 0.5vh auto;
        padding: 1vh 1vw;
    }
    .class-number {
        color: #808080;
        font-weight: bold;
    }
    .class-name {
        font-size: 0.8rem;
    }
</style>