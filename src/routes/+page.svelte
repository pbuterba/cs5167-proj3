<script>
    import Calendar from "../lib/components/Calendar.svelte";
    import ClassList from "../lib/components/ClassList.svelte";
    import {
        Popover,
        PopoverChipTrigger,
        PopoverSingleSelectContent,
        Header
    } from "kiwi-nl";

    const items = [
        { label: 'Fall 2023', value: 'fall_2023' },
        { label: 'Spring 2024', value: 'spring_2024' },
        { label: 'Summer 2024', value: 'summer_2024' },
        { label: 'Fall 2024', value: 'fall_2024' },
    ];

    export let semester = "fall_2024";

    function handlePopoverItemsChanged(event) {
        semester = event.detail.selectedItems[0]?.value;
    }

    $: semester;
</script>

<div class="container">
    <div class="calendar">
        <div class="semester-selection">
            <Header type="h2">Semester:</Header>
            <Popover on:popoverItemsChanged={handlePopoverItemsChanged} selectedItems={[items[3]]} {items}>
                <PopoverChipTrigger slot="trigger" label="Semester" requireselection />
                <PopoverSingleSelectContent slot="content" />
            </Popover>
        </div>
        <Calendar {semester}></Calendar>
    </div>
    <div class="class-list" style="align-content:center">
        <ClassList {semester} />
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: row;
    }
    .calendar {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .semester-selection {
        display: flex;
        flex-direction: row;
        gap: 16px;
        align-items: center;
    }
    .class-list {
        display: block;
        align-self: center;
        padding-left: 10px;
    }
</style>
