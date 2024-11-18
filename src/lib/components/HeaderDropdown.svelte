<script>
    import { Popover, PopoverTrigger, PopoverContent } from 'kiwi-nl';

    export let label = '';
    export let links = [];

    let popoverElement;

    function handleClick() {
        if (popoverElement) {
            popoverElement.close();
        }
    }
</script>

<Popover bind:this={popoverElement}>
    <PopoverTrigger slot="trigger" fullwidth={false} fullheight={false}>
        <div slot="custom-trigger" class="trigger">{label} &#9660;</div>
    </PopoverTrigger>
    <PopoverContent slot="content">
        <div class="header-dropdown-links" slot="custom-content">
            {#each links as link}
                <a href={link.href} target={link.href.startsWith('https://') ? '_blank' : ''} on:click={handleClick}>{link.label}</a>
            {/each}
        </div>
    </PopoverContent>
</Popover>

<style>
    .header-dropdown-links {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    a {
        white-space: nowrap;
        text-decoration: none;
        color: #e00022;
        display: flex;
        padding: 4px 8px 4px 8px;
        border-radius: 4px;
    }
    a:hover {
        background-color: #e00022;
        color: white;
    }
    .trigger {
        color: white;
        font-weight: 600;
        width: auto;
        height: 100%;
        padding: 12px 24px;
        border-radius: 4px;
        transition: background-color 0.3s ease;
    }
    .trigger:hover {
        background-color: #be0000;
    }
</style>
