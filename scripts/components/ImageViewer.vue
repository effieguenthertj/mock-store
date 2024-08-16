<template>
  <div v-if="productData">
    <img v-if="productData" :src="activeImageSrc" :alt="productData.title" class="mb-2" />
    <div class="relative">
      <div ref="scrollContainer" class="flex relative overflow-x-hidden scroll-smooth">
        <img 
          v-for="(image, index) in productData.images"
          @click="select(index)"
          :key="`image_${index}`"
          :src="image"
          :alt="`${productData.title} image ${index}`"
          class="mr-1 h-20 border-sandyBrown"
          :class="{ 'border-2': index === idx }"
        />
      </div>
      <button @click="scrollLeft" class="h-full absolute bg-white opacity-75 px-2 top-0">
        <
      </button>
      <button @click="scrollRight" class="h-full absolute bg-white opacity-75 px-2 top-0 right-0">
        >
      </button>
    </div>
  </div>
</template>

<script setup>
  import { ref, defineProps, onMounted, computed } from 'vue';

  const props = defineProps({
    product: {
      required: true
    }
  })

  const productData = ref(null)
  const idx = ref(0)
  const scrollContainer = ref(null);

  function select(index) {
    idx.value = index
  }

  function scrollLeft() {
    if (scrollContainer.value) {
      scrollContainer.value.scrollLeft -= 100
    }
  }

  function scrollRight() {
    if (scrollContainer.value) {
      scrollContainer.value.scrollLeft += 100
    }
  }

  const activeImageSrc = computed(() => productData?.value?.images[idx.value])

  const fetchProduct = (() => {
    fetch(window.Shopify.routes.root + `products/${props.product}.js`)
    .then(response => response.json())
    .then(product => {
      productData.value = product
      console.log(productData.value)
    })
    .catch(error => console.error(error))
  })

  onMounted(() => {
    fetchProduct()
  })

</script>