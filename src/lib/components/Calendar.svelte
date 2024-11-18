<script>
    import Calendar from '@event-calendar/core';
    import TimeGrid from '@event-calendar/time-grid';
    import CalendarEvent from './CalendarEvent.svelte';
    import { mount } from 'svelte';
    import { presetScheduleData } from '../../presetScheduleData.js';

    export let semester = 'fall_2024';

    const events = presetScheduleData[semester].courses;

    function getEventContent(info) {
        let container = document.createElement('div');
        mount(CalendarEvent, {
            target: container,
            props: {
                course: info.event.extendedProps.course,
                courseName: info.event.extendedProps.courseName,
                location: info.event.extendedProps.location,
                start: info.event.start,
                end: info.event.end,
                instructor: info.event.extendedProps.instructor,
            },
        });
        return { domNodes: [container] };
    }

    let plugins = [TimeGrid];
    let options = {
        initialView: 'timeGridWeek',
        dayHeaderFormat: { weekday: 'long' },
        highlightedDates: [],
        slotMinTime: '08:00:00',
        slotMaxTime: '18:00:00',
        slotDuration: '00:15:00',
        allDaySlot: false,
        nowIndicator: true,
        eventContent: getEventContent,
        headerToolbar: {
            start: '',
            center: '',
            end: '',
        },
        dayMaxEvents: false,
        dayPopoverFormat: {},
        showNonCurrentDates: false,
        hiddenDays: [0, 6],
        events: events,
    };

    // svelte-ignore reactive_declaration_non_reactive_property
    $: semester, (options.events = presetScheduleData[semester].courses);
</script>

<div class="calendar ec">
    <Calendar class="ec" {plugins} {options} />
</div>

<style>
    .calendar {
        height: 700px;
        overflow: auto;
        width: 800px;
        font-weight: 600;
        border-radius: 8px;
        outline: 5px solid #595959;
        color: #595959;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        scrollbar-width: thin;
    }
</style>
