<template>
  <p>Image Viewer</p>
</template>

<script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    images: {
      required: true,
    }
  })

  console.log(props.images);

</script>