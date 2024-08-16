<template>
  <div class="grid grid-cols-8 p-8 border-2 border-gray-200 rounded">
    <div class="col-span-2 border-r-2">
      <p>{{ review.author }}</p>
      <p>{{ review.rating }} stars</p>
    </div>
    <div class="col-span-6 ml-8">
      <p class="text-lg font-semibold mb-2">{{ review.title }}</p>
      <p>{{ review.text }}</p>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const review = ref({
    title: "Awesome product!",
    rating: 5,
    text: "This is the most awesome product I have ever purchased. I would recommmend it to all of my friends and family.",
    author: "John Doe"
  })

</script>