<script>
  import {Button} from 'kiwi-nl';
  export let progress = 0.74; // Example: 0.74 represents 74%

  // Calculate the angle based on progress
  const angle = 360 * progress;

  // Generate the background style for the circular progress
  const background = `
    radial-gradient(white 50%, transparent 51%),
    conic-gradient(transparent 0deg ${angle}deg, gainsboro ${angle}deg 360deg),
    conic-gradient(red 0deg, red 90deg, darkred 180deg, black);
  `;

  $: cssVarStyles = `--background:${background}`;
</script>

<div id="progress-circle" style={cssVarStyles}>
  <span class="progress-text">{Math.round(progress * 100)}%</span>
</div>
<Button>Academic Progress</Button>

<style>
  #progress-circle {
    background: var(--background);
    border-radius: 50%;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 500ms ease-in;
    will-change: transform;
    font-size: 1.5rem;
    color: #ff6393;
    font-weight: bold;
  }

  .progress-text {
    position: absolute;
    color: black;
  }
</style>
