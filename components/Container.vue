<template>
  <div
    class="min-w-[500px] relative mx-auto w-full min-h-[500px] border-[2px] border-[#f0f0f0] rounded-[12px]"
  >
    <slot></slot>

    <div
      v-if="!hideDetails"
      class="grid grid-cols-2 gap-5 max-w-[300px] w-full"
    >
      <button
        class="py-3 rounded-[13px] text-white bg-[orange] cursor-pointer"
        @click="$emit('onClickPlay')"
      >
        Play
      </button>
      <button
        class="py-3 rounded-[13px] text-[orange] border-[1.5px] border-[orange] cursor-pointer"
        @click="$emit('onClickRestart')"
      >
        Restart
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  hideDetails: {
    type: Boolean,
    required: true,
    default: false,
  },
});
</script>
