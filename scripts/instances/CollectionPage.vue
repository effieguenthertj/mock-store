<script>
import { ref, onMounted } from 'vue';
import Filters from '../components/Filters.vue';

export default {
  components: {
    Filters,
  },
  delimiters: ['${', '}'],
  setup() {
    const collectionData = ref(null);
    const products = ref(null);

    onMounted(() => {
      if (window.theme && window.theme.collection) {
        collectionData.value = window.theme.collection;
        console.log("collection", collectionData.value);

        fetch(`/collections/${collectionData.value.handle}/products.json`)
          .then(response => response.json())
          .then(data => {
            console.log(data.products);
            products.value = data.products;
          })
          .catch(error => {
            console.error('Error fetching collection products:', error);
          });
      } else {
        console.warn("window.theme.collection is not available");
      }
    });

    return {
      collectionData,
      products,
    };
  }
}
</script>