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
    let collectionHandle = ""
    if (window.theme.collection) {
      collectionHandle = window.theme.collection.handle;
    }

    const params = new URLSearchParams(window.location.search);
    console.log(params);
    const productUrl = `/collections/${collectionHandle}/products.json?${params.toString()}`

    const fetchData = () => {

      fetch(productUrl)
        .then(response => response.json())
        .then(data => {
          products.value = data.products;
          console.log("products fetched", products.value);
        })
        .catch(error => {
          console.error('Error fetching collection products:', error);
      });
      fetch(`/collections/${collectionHandle}.json`)
        .then(response => response.json())
        .then(data => {
          collectionData.value = data;
          console.log("collection data", collectionData.value);
        })
        .catch(error => {
          console.error('Error fetching collection:', error);
      });
    }

    onMounted(() => {
        fetchData();
    });

    return {
      collectionData,
      products,
    };
  }
}
</script>