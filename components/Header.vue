<template>
  <div>
    <header class="py-2 px-3 border-b border-white">
      <button @click="$emit('openNav', !isOpen)" class="sm:hidden">open</button>
      <svg
        width="108"
        height="37"
        viewBox="0 0 108 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- SVG paths and shapes -->
      </svg>
    </header>
  </div>
</template>
<script setup>
defineProps({
  isOpen: Boolean,
});
</script>
