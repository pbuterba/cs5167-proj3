<script>
    import {Accordion, AccordionHeader, AccordionBody, Button} from 'kiwi-nl';
    import CurriculumClass from '$lib/components/CurriculumClass.svelte';
    import {presetStudentData} from '../../presetStudentData.js';

    let placeholderFulfillmentIndices = [];
    for(let i = 0; i < presetStudentData.curriculum.placeholders.length; i++) {
        placeholderFulfillmentIndices.push(0);
    }

    function getNextPlaceholderIndex(placeholderCategory) {
        let index = placeholderFulfillmentIndices[placeholderCategory - 1];
        placeholderFulfillmentIndices[placeholderCategory - 1]++;
        return index;
    }
</script>
<main>
    <div class="page-navigation">
        <Button href="/" color="red">&#8249; My Academics</Button>
    </div>
    <div class="header-info">
        <h1>Curriculum Progress</h1>
        <p id="major">{presetStudentData.major}</p>
    </div>
    <div id="curriculum-area">
        {#each presetStudentData.curriculum.academicYears as year}
            <div class="accordion">
                <Accordion>
                    <div class="accordion-header" slot="header">
                        <AccordionHeader><span class="year-name">{year.name}</span></AccordionHeader>
                    </div>
                    <AccordionBody slot="body">
                        <div class="year">
                            {#each year.semesters as semester}
                                <div class="semester-column">
                                    <h3>{semester.name}</h3>
                                    {#each semester.classes as classData}
                                        <CurriculumClass classData={classData}/>
                                    {/each}
                                    {#each semester.options as option}
                                        <CurriculumClass classData={option} option />
                                    {/each}
                                    {#each semester.placeholders as placeholderId}
                                        <CurriculumClass classData={presetStudentData.curriculum.placeholders[placeholderId - 1]} placeholderIndex={getNextPlaceholderIndex(placeholderId)} placeholder />
                                    {/each}
                                </div>
                            {/each}
                        </div>
                    </AccordionBody>
                </Accordion>
            </div>
        {/each}
    </div>
</main>
<style>
    main {
        margin: 0;
    }
    .page-navigation {
        margin: 0;
    }
    .header-info {
        text-align: center;
    }
    h1 {
        font-size: 2.75rem;
    }
    #major {
        font-size: 1.5rem;
    }
    .accordion-header {
        background-color: #D3D3D3;
    }
    .year-name {
        font-size: 1.25rem;
    }
    .year {
        display: flex;
        justify-content: center;
        border-right: 4px solid #D3D3D3;
    }
    .semester-column {
        border-width: 0 0 0 4px;
        border-color: #D3D3D3;
        border-style: solid;
        padding: 0.5vw;
        width: 33%;
    }
    h3 {
        font-size: 1.2rem;
    }
</style>