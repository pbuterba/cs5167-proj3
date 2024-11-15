<script>
    import { Header, Flyout, Button, HeaderTypeEnum, Text, ButtonTypeEnum } from 'kiwi-nl';
    import { presetStudentData } from '../presetStudentData';
    import { headersAndLinks } from '../presetTabData';
    import humanIcon from '$lib/img/human-icon.png';
    import HeaderDropdown from '../lib/HeaderDropdown.svelte';
    import ProgressTracker from '../lib/ProgressTracker.svelte';

    let flyoutElement;
</script>

<main>
    <Flyout bind:this={flyoutElement} header={presetStudentData.name} subheader="">
        <div slot="flyout-body" class="flyout-body">
            <Header type={HeaderTypeEnum.h3}>Academic Information:</Header>

            <div class="group-elements">
                <Header type={HeaderTypeEnum.subheader}>Academic College:</Header>
                <Text>{presetStudentData.college}</Text>
            </div>

            <div class="group-elements">
                <Header type={HeaderTypeEnum.subheader}>Major:</Header>
                <Text>{presetStudentData.major}</Text>
            </div>

            <div class="group-elements">
                <Header type={HeaderTypeEnum.subheader}>Minor:</Header>
                <Text>{presetStudentData.minor}</Text>
            </div>

            <div class="group-elements">
                <Header type={HeaderTypeEnum.subheader}>GPA (Current):</Header>
                <Text>{presetStudentData.GPA}</Text>
            </div>

            <div class="group-elements">
                <Header type={HeaderTypeEnum.subheader}>Current Semester Credit Hour Amount:</Header>
                <Text>{presetStudentData.currentCreditHours}</Text>
            </div>

            <div class="group-elements">
                <Header type={HeaderTypeEnum.subheader}>Total Credits Taken:</Header>
                <Text>{presetStudentData.creditsTaken}</Text>
            </div>

            <br />
            <Header type={HeaderTypeEnum.h3}>Advisor Information:</Header>
            <div class="group-elements">
                <Header type={HeaderTypeEnum.subheader}>Academic Advisor:</Header>
                <Text>{presetStudentData.acadmicAdvisorName}</Text>
            </div>

            <div class="group-elements">
                <Header type={HeaderTypeEnum.subheader}>Academic Advisor Email:</Header>
                <Text>{presetStudentData.academicAdvisorEmail}</Text>
            </div>

            <div class="group-elements">
                <Header type={HeaderTypeEnum.subheader}>Co-op Advisor:</Header>
                <Text>{presetStudentData.coopAdvisorName}</Text>
            </div>

            <div class="group-elements">
                <Header type={HeaderTypeEnum.subheader}>Co-op Advisor Email:</Header>
                <Text>{presetStudentData.coopAdvisorEmail}</Text>
            </div>

            <br />
            <Header type={HeaderTypeEnum.h3}>Progress Information:</Header>
            <!-- ProgressTracker component displaying percent of classes complete -->
            <ProgressTracker progress={0.85} />
        </div>
    </Flyout>

    <div class="header-card">
        <Button type={ButtonTypeEnum.secondary}>
            <svg width="22" height="22" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M17.0001 6.02393L11.0001 0.763932C10.4501 0.271977 9.73803 0 9.00009 0C8.26216 0 7.55012 0.271977 7.00009 0.763932L1.00009 6.02393C0.682463 6.30801 0.428995 6.65649 0.256567 7.04618C0.0841385 7.43586 -0.00329256 7.85781 9.47941e-05 8.28393V17.0239C9.47941e-05 17.8196 0.316165 18.5826 0.878775 19.1453C1.44138 19.7079 2.20445 20.0239 3.00009 20.0239H15.0001C15.7957 20.0239 16.5588 19.7079 17.1214 19.1453C17.684 18.5826 18.0001 17.8196 18.0001 17.0239V8.27393C18.0021 7.84949 17.9139 7.42947 17.7416 7.04161C17.5692 6.65375 17.3165 6.30689 17.0001 6.02393ZM11.0001 18.0239H7.00009V13.0239C7.00009 12.7587 7.10545 12.5044 7.29299 12.3168C7.48052 12.1293 7.73488 12.0239 8.00009 12.0239H10.0001C10.2653 12.0239 10.5197 12.1293 10.7072 12.3168C10.8947 12.5044 11.0001 12.7587 11.0001 13.0239V18.0239ZM16.0001 17.0239C16.0001 17.2891 15.8947 17.5435 15.7072 17.731C15.5197 17.9186 15.2653 18.0239 15.0001 18.0239H13.0001V13.0239C13.0001 12.2283 12.684 11.4652 12.1214 10.9026C11.5588 10.34 10.7957 10.0239 10.0001 10.0239H8.00009C7.20444 10.0239 6.44138 10.34 5.87877 10.9026C5.31617 11.4652 5.00009 12.2283 5.00009 13.0239V18.0239H3.00009C2.73488 18.0239 2.48052 17.9186 2.29299 17.731C2.10545 17.5435 2.00009 17.2891 2.00009 17.0239V8.27393C2.00027 8.13195 2.03069 7.99163 2.08931 7.86231C2.14794 7.73299 2.23343 7.61764 2.3401 7.52393L8.34009 2.27393C8.52258 2.11361 8.75719 2.0252 9.00009 2.0252C9.243 2.0252 9.47761 2.11361 9.66009 2.27393L15.6601 7.52393C15.7668 7.61764 15.8523 7.73299 15.9109 7.86231C15.9695 7.99163 15.9999 8.13195 16.0001 8.27393V17.0239Z"
                    fill="black"
                />
            </svg>
        </Button>

        <h1>My Academics</h1>

        {#each headersAndLinks as headerAndLink}
            <HeaderDropdown label={headerAndLink.label} links={headerAndLink.links}></HeaderDropdown>
        {/each}

        <Button on:click={() => flyoutElement.toggle()} type={ButtonTypeEnum.secondary}>
            <img src={humanIcon} alt="Person Icon" />
        </Button>
    </div>

    <div class="content">
        <slot></slot>
    </div>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
    @import '../variables.css';
    .flyout-body {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    .group-elements {
        display: flex;
        flex-direction: row;
        gap: 8px;
        align-items: baseline;
    }
    img {
        width: 22px;
        height: 22px;
    }
    .header-card {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
        height: 100%;
        justify-content: space-between;
        background-color: #e00022;
        padding: 0 12px;
    }

    main {
        font-family: 'Inter';
        padding: 0;
        margin: 0;
    }

    h1 {
        font-size: 220%;
        color: white;
    }
    .content {
        margin: 32px auto;
        max-width: 1080px;
        width: auto;
    }
</style>
