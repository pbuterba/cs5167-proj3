<script>
    import { Header, Flyout, Button, HeaderTypeEnum, Text } from "kiwi-nl";
    import {presetStudentData} from "../presetStudentData"
    import humanIcon from "$lib/img/human-icon.png"
    let flyoutElement;

</script>

<main>
  <Flyout bind:this={flyoutElement} header={presetStudentData.name} subheader="">
    <div slot="flyout-body" class="flyout-body">
      <Header type={HeaderTypeEnum.h3}>Academic Information: </Header>

      <div class="group-elements">
        <Header type={HeaderTypeEnum.subheader}>Academic College: </Header>
        <Text>{presetStudentData.college}</Text>
      </div>

      <div class="group-elements">
        <Header type={HeaderTypeEnum.subheader}>Major: </Header>
        <Text>{presetStudentData.major}</Text>
      </div>

      <div class="group-elements">
        <Header type={HeaderTypeEnum.subheader}>Minor: </Header>
        <Text>{presetStudentData.minor}</Text>
      </div>

      <div class="group-elements">
        <Header type={HeaderTypeEnum.subheader}>GPA (Current): </Header>
        <Text>{presetStudentData.GPA}</Text>
      </div>

      <div class="group-elements">
        <Header type={HeaderTypeEnum.subheader}>Current Semester Credit Hour Amount: </Header>
        <Text>{presetStudentData.currentCreditHours}</Text> 
      </div>

      <div class="group-elements">
        <Header type={HeaderTypeEnum.subheader}>Total Credits Taken: </Header>
        <Text>{presetStudentData.creditsTaken}</Text>
      </div>

      <br> <Header type={HeaderTypeEnum.h3}>Advisor Information: </Header>
      <div class="group-elements">
        <Header type={HeaderTypeEnum.subheader}>Academic Advisor: </Header>
        <Text>{presetStudentData.acadmicAdvisorName}</Text>
      </div>

      <div class="group-elements">
        <Header type={HeaderTypeEnum.subheader}>Academic Advisor Email: </Header>
        <Text>{presetStudentData.academicAdvisorEmail}</Text>
      </div>

      <div class="group-elements">
        <Header type={HeaderTypeEnum.subheader}>Co-op Advisor: </Header>
        <Text>{presetStudentData.coopAdvisorName}</Text>
      </div>

      <div class="group-elements">
        <Header type={HeaderTypeEnum.subheader}>Co-op Advisor Email: </Header>
        <Text>{presetStudentData.coopAdvisorEmail}</Text>
      </div>
      
      <br> <Header type={HeaderTypeEnum.h3}>Progress Information: </Header>

    </div>
  </Flyout> 
  
  <Button on:click={() => flyoutElement.toggle()}>
    <img src={humanIcon} alt="Person Icon">
  </Button>

</main>

<style>
  .flyout-body {
        display: flex;
        flex-direction: column;
        gap: 16px;
  }
  .group-elements {
    display:flex;
    flex-direction: row;
    gap: 8px;
    align-items: baseline;
  }
  img {
    width: fit-content;
    height: fit-content;
  }
</style>

