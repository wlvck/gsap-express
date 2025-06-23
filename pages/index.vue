<template>
  <container @onClickPlay="playTimeline" @onClickRestart="restartTimeline">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
      <path
        id="path"
        style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0)"
        d="M 294.349 328.941 L 444.389 136.03 L 219.254 125.134 L 63.305 320.533 L 289.434 330.131"
      ></path>
    </svg>
  </container>
</template>
<script setup lang="ts">
import gsap from 'gsap';

let timeline: gsap.core.Timeline;

onMounted(() => {
  timeline = gsap.timeline({ paused: true }).to('#path', {
    duration: 1,
    attr: {
      d: 'M 60.847 326.805 L 44.504 176.193 L 174.741 83.17 L 289.952 152.014 C 387.582 180.697 453.783 287.785 341.421 254.773 C 437.756 493.92 215.952 306.536 202.19 272.372 C 237.208 259.383 238.761 151.932 172.435 176.534 C 78.576 201.337 140.685 426.407 60.847 326.805 Z',
    },
  });
});

const playTimeline = () => {
  timeline?.play();
};

const restartTimeline = () => {
  timeline?.restart();
};
</script>
<style scoped>
svg {
  height: 300px;
}
</style>
