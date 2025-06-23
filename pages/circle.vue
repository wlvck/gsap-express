<template>
  <container :hide-details="true">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      xmlns:bx="https://boxy-svg.com"
    >
      <ellipse
        style="fill: rgb(0, 128, 95, 0.2)"
        cx="250"
        cy="250"
        rx="361.921"
        ry="361.921"
      ></ellipse>
      <ellipse
        style="fill: rgb(0, 128, 95, 0.5)"
        cx="250"
        cy="250"
        rx="361.921"
        ry="361.921"
      ></ellipse>
      <ellipse
        style="fill: rgb(0, 128, 95)"
        cx="250"
        cy="250"
        rx="361.921"
        ry="361.921"
      ></ellipse>
      <g transform="matrix(1, 0, 0, 1, -59.899208, 0)" id="textGroup">
        <text
          style="
            fill: rgb(255, 255, 255);
            font-family: Bungee;
            font-size: 100px;
            white-space: pre;
          "
          transform="matrix(0.967564, 0, 0, 0.766305, 30.633675, 29.742138)"
          x="20.073"
          y="101.358"
        >
          Animate
        </text>
        <text
          style="
            fill: rgb(255, 255, 255);
            font-family: Bungee;
            font-size: 26.2681px;
            white-space: pre;
          "
          transform="matrix(5.551277, 0, 0, 3.069215, -962.361328, -328.924896)"
          x="201.825"
          y="174.776"
        >
          SVG
        </text>
        <text
          style="
            fill: rgb(255, 255, 255);
            font-family: Bungee;
            font-size: 25.9302px;
            text-transform: uppercase;
            white-space: pre;
          "
          transform="matrix(4.520494, 0, 0, 2.870843, -771.732605, -377.651031)"
          x="202.311"
          y="237.125"
        >
          WITH
        </text>
        <text
          style="
            fill: rgb(255, 255, 255);
            font-family: Bungee;
            font-size: 100px;
            text-transform: uppercase;
            white-space: pre;
          "
          transform="matrix(1, 0, 0, 1.001518, 49.407471, -32.458103)"
          x="121.998"
          y="449.703"
        >
          GSAP
        </text>
      </g>
    </svg>
  </container>
</template>
<script setup lang="ts">
import gsap from 'gsap';

let timeline: gsap.core.Timeline;

onMounted(() => {
  timeline = gsap
    .timeline()
    .from('ellipse', {
      scale: 0,
      transformOrigin: 'center center',
      stagger: 0.2,
    })
    .from('#textGroup text', {
      scale: 0,
      opacity: 0,
      stagger: 0.2,
      transformOrigin: 'center center',
      ease: 'back',
    });
});
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bungee%3Aital%2Cwght%400%2C400&amp;display=swap');
</style>
