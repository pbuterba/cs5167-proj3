<script>
    import {
        Popover,
        PopoverTrigger,
        PopoverContent,
    } from 'kiwi-nl';

    export let label = "";
    export let links = [];
</script>



<Popover>
    <PopoverTrigger slot="trigger">
      <div slot="custom-trigger" class="trigger">{label}</div>
    </PopoverTrigger>
    <PopoverContent slot="content">
      <div class="header-dropdown-links" slot="custom-content">
        {#each links as link }
            <a href={link.href}>{link.label}</a>  
        {/each}
      </div>
    </PopoverContent>
</Popover>

<style>
    .header-dropdown-links {
        display: flex;
        flex-direction: column;
    }
    a {
        white-space: nowrap;
        text-decoration: none;
        color: red;
        display: flex;
        padding: 4px 8px 4px 8px;
    }
    a:hover {
        background-color: red;
        color: white;
    }
    .trigger {
        color:white;
        font-weight: 600;
        width: auto;
        height: 100%;
        padding: 12px 24px;
        border-radius: 4px;
        transition: background-color 0.3s ease;
    }
    .trigger:hover {
        background-color: #dc0000;
    }
</style>