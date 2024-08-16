<template>
  <div v-if="productData">
    <img v-if="productData" :src="activeImageSrc" :alt="productData.title" />
    <div>
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

  function increment() {
    idx.value++
  }

  function decrement() {
    idx.value--
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