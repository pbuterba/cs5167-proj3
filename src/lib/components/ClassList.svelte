<script>
    import { presetScheduleData } from "../../presetScheduleData.js";
    export let semester = "fall_2023"; // Receives the dynamic semester prop

    // Filter unique courses based on course name
    $: uniqueCourses = Array.from(
        new Map(
            presetScheduleData[semester].courses.map((course) => [
                course.extendedProps.courseName,
                course,
            ]),
        ).values(),
    );
</script>

<div class="class-list">
    <h2>{semester.replace("_", " ").toUpperCase()} Classes</h2>
    <div class="courses">
        {#each uniqueCourses as course}
            <div
                class="class-item"
                style="background-color: {course.backgroundColor}"
            >
                <p><strong>{course.extendedProps.courseName}</strong></p>
                <span class="info-icon" title="More info"
                    >ℹ️
                    <div class="info-content">
                        <p>
                            Time: {course.start.toLocaleTimeString()} - {course.end.toLocaleTimeString()}
                        </p>
                        <p>Location: {course.extendedProps.location}</p>
                        <p>Instructor: {course.extendedProps.instructor}</p>
                    </div>
                </span>
            </div>
        {/each}
    </div>
</div>

<style>
    .class-list {
        padding: 1rem;
    }
    .class-item {
        padding: 1rem;
        margin-bottom: 0.5rem;
        border-radius: 0.5rem;
        color: white;
        display: flex;
        justify-content: space-between;
        position: relative;
    }

    .info-icon {
        font-size: 1.2rem;
        cursor: pointer;
        position: relative;
        display: inline-block;
    }

    .info-content {
        display: none;
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 0.5rem;
        border-radius: 5px;
        width: max-content;
        min-width: 200px;
        z-index: 10;
        white-space: nowrap;
    }

    .info-icon:hover .info-content {
        display: block;
    }

    .info-content p {
        margin: 0;
        font-size: 0.9rem;
    }
</style>
