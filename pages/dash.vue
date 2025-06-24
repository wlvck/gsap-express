<template>

    <container @onClickPlay="timeline.play()" @onClickRestart="timeline.restart()">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
            <rect x="68.63" y="150.3" width="358.88" height="201.56"
                style="stroke: pink; fill: none; stroke-dasharray: 10;"></rect>
        </svg>
    </container>
</template>

<script setup lang="ts">

import { gsap } from 'gsap';

let timeline: gsap.core.Timeline = gsap.timeline({ paused: true });

onMounted(() => {
    timeline.to('rect', {
        strokeDashoffset: -40,
        repeat: 20,
        ease: 'none'
    })
})

</script>

<style scoped></style>