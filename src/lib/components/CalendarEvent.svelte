<script>
    import { Popover, PopoverTrigger, PopoverContent, Header, Text } from 'kiwi-nl';
    export let course = '';
    export let courseName = '';
    export let location;
    export let start;
    export let end;
    export let instructor;
</script>

<div class="calendar-event">
    <Popover hover={true} position="bottom">
        <PopoverTrigger slot="trigger" fullwidth={true} fullheight={true}>
            <div slot="custom-trigger" class="trigger">
                <Text color="white" size="medium">{courseName}</Text>
                <Text color="white" size="small">{location}</Text>
            </div>
        </PopoverTrigger>
        <PopoverContent slot="content">
            <div class="course-info-dropdown" slot="custom-content">
                <div class="course-info">
                    <Header type="h5">Course:</Header>
                    <Text size="small">{course}</Text>
                </div>
                <div class="course-info">
                    <Header type="h5">Time Frame:</Header>
                    <Text size="small"
                        >{new Date(start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {new Date(
                            end,
                        ).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text
                    >
                </div>
                <div class="course-info">
                    <Header type="h5">Instructor:</Header>
                    <Text size="small">{instructor}</Text>
                </div>
            </div>
        </PopoverContent>
    </Popover>
</div>

<style>
    .calendar-event {
        width: auto;
        height: 100%;
        border-radius: 4px;
        z-index: 10000;
    }
    .trigger {
        width: 100%;
        height: auto;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .course-info-dropdown {
        z-index: 1111;
        width: 230px;
        height: 100px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
</style>
