<template>
  <p>{{  msg }}</p>
</template>

<script setup>
  const props = defineProps({
    msg: {
      type: String,
      default: "Hello World!"
    }
  })
</script>
