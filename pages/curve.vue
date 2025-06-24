<template>
    <container @onClickPlay="timeline.play()" @onClickRestart="timeline.restart()" :hide-details="false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
            <path style="stroke: #444; fill: none; stroke-width: 10px;"
                d="M 104.66 163.08 C 211.73 29.04 287.07 282.12 417.76 165.9"></path>
            <path id="rect" style="stroke: pink; fill: none; stroke-width: 10px;"
                d="M 104.66 163.08 C 211.73 29.04 287.07 282.12 417.76 165.9"></path>
        </svg>
    </container>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/all';

gsap.registerPlugin(DrawSVGPlugin);

let timeline: gsap.core.Timeline = gsap.timeline({ paused: true });


onMounted(() => {
    timeline.fromTo('#rect', {
        drawSVG: '100% 100%'
    }, {
        drawSVG: '50% 150%',
        duration: 1,
        ease: 'none'
    }).fromTo('#rect', {
        drawSVG: true
    }, {
        drawSVG: '50% 50%',
        duration: 1,
        ease: 'none',
    })
})
</script>