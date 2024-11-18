<script>
    export let classData;
    export let option = false;
    export let placeholder = false;
    export let placeholderIndex = -1;

    //Get class data if placeholder
    let fulfilled = null;
    let placeholderFulfillmentData = null;
    if(placeholder) {
        fulfilled = placeholderIndex < classData.fulfillments.length;
        if(fulfilled) {
            placeholderFulfillmentData = classData.fulfillments[placeholderIndex];
        }
    }

    //Class status
    let classStatus = "Remaining"
    let statusData;
    if(placeholder) {
        statusData = placeholderFulfillmentData;
    } else {
        statusData = classData;
    }

    if(!placeholder || fulfilled) {
        if(statusData.completed) {
            classStatus = "Complete";
        } else if(statusData.inProgress) {
            classStatus = "In Progress";
        } else if(statusData.registered) {
            classStatus = "Registered";
        }
    }
</script>
<main>
    <div class={"indicator indicator-" + classStatus.toLowerCase().replaceAll(' ', '-')}></div>
    <div class="class-info">
        {#if option}
            <h1 class="class-number">{classData.name}</h1>
            {#if classData.completed}
                <h2 class="class-name">{classData.fulfilledNumber} - {classData.fulfilledName}</h2>
            {:else if classData.inProgress}
                <h2 class="class-name">{classData.fulfilledNumber} - {classData.fulfilledName}</h2>
            {:else if classData.registered}
                <h2 class="class-name">{classData.fulfilledNumber} - {classData.fulfilledName}</h2>
            {:else}
                <h2>Available options</h2>
                <div>
                    {#each classData.fulfillmentOptions as option}
                        <span class="option-name">&nbsp;&nbsp;&nbsp;&nbsp;{option.number} - {option.name}</span> <br>
                    {/each}
                </div>
            {/if}
        {:else if placeholder}
            <h1>{classData.name}</h1>
            {#if fulfilled}
                <h2>{placeholderFulfillmentData.number} - {placeholderFulfillmentData.name}</h2>
            {:else}
                <h2>To be fulfilled</h2>
            {/if}
        {:else}
            <h1 class="class-number">{classData.number}</h1>
            <h2 class="class-name">{classData.name}</h2>
        {/if}
        <span class="class-status">{classStatus}</span>
    </div>
</main>
<style>
    main {
        display: flex;
        border-radius: 5px;
        box-shadow: 5px 5px 5px #D3D3D3;
        border: 1px solid black;
        margin: 0.5vh auto;
        padding: 1vh 0.25vw;
    }
    .class-info {
        padding: 1vh 0.5vw;
    }
    h1 {
        color: #808080;
        font-size: 1.1rem;
        margin: 0.25vh auto;
        padding: 0;
    }
    h2 {
        font-size: 0.82rem;
        font-weight: normal;
        margin: 0.25vh auto;
        padding: 0;
    }
    .option-name {
        font-size: 0.75rem;
    }
    .class-status {
        font-size: 0.75rem;
        font-style: italic;
    }
    .indicator {
        min-height: 100%;
        min-width: 2%;
    }
    .indicator-complete {
        background: green;
    }
    .indicator-in-progress {
        background: #4169E1;
    }
    .indicator-registered {
        background: #D3D3D3;
    }
    .indicator-remaining {
        background: purple;
    }
</style>