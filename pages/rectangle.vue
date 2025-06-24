<template>
    <div>
        <container @onClickPlay="timeline.play()" @onClickRestart="timeline.restart()" :hide-details="false">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                <rect x="68.63" y="150.3" width="300" height="100"
                    style="stroke: #444; fill: none; stroke-width: 6px; stroke-linecap: square;">
                </rect>
                <rect id="pinkRect" x="68.63" y="150.3" width="300" height="100"
                    style="stroke: pink; fill: none; stroke-width: 6px;stroke-linecap: square;">
                </rect>
            </svg>
        </container>
    </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/all';

gsap.registerPlugin(DrawSVGPlugin);

let timeline: gsap.core.Timeline = gsap.timeline({ paused: true });


onMounted(() => {
    timeline.fromTo('#pinkRect', {
        drawSVG: '750 750',
    }, {
        drawSVG: '350 1150'
    })
})
</script>