<template>
  <div class="flex items-center justify-between mb-8">
    <p class="text-xl mb-0">Reviews</p>
    <button
      class="text-white py-2 px-8 border-2 bg-cafeNoir rounded"
      @click="openModal"
    >
      Add Review
    </button>
  </div>
  <div 
    v-for="(review, index) in reviews" 
    :key="`review_${index}`"
    class="grid grid-cols-8 p-8 border-2 border-gray-200 rounded mb-6"
  >
    <div class="col-span-2 border-r-2">
      <p>{{ review.author }}</p>
      <p>{{ review.rating }} stars</p>
    </div>
    <div class="col-span-6 ml-8">
      <p class="text-lg font-semibold mb-2">{{ review.title }}</p>
      <p>{{ review.text }}</p>
    </div>
  </div>

  <div v-if="showModal">
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
           <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left grid grid-cols-8">
                <div class="text-xl mt-4 leading-6 text-gray-900 col-span-8 flex justify-between" id="modal-title">
                  <h3 class="font-semibold">
                    Leave a Review
                  </h3>
                  <button @click="closeModal" class="text-gray-400 px-4">X</button>
                </div>

                <hr class="col-span-8 my-8" />

                <label for="title" class="mr-4 col-span-2">Title</label>
                <input id="title" class="rounded mb-6 col-span-6" v-model="newReview.title"/>

                <label for="rating" class="mr-4 col-span-2">Rating</label>
                <select id="rating" class="rounded mb-6 col-span-6" v-model="newReview.rating">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              
                <label for="text" class="mr-4 col-span-2">Text</label>
                <input id="text" class="rounded mb-6 col-span-6" v-model="newReview.text" />

                <label for="author" class="mr-4 col-span-2">Author</label>
                <input id="author" class="rounded mb-6 col-span-6" v-model="newReview.author" />
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button @click="submitReview" type="button" class="inline-flex w-full justify-center rounded-md bg-sandyBrown px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">
                Submit
              </button>
              <button @click="closeModal" type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const reviews = ref([
    {
      title: "Awesome product!",
      rating: 5,
      text: "This is the most awesome product I have ever purchased. I would recommmend it to all of my friends and family.",
      author: "John Doe"
    }
  ])

  const newReview = ref({
    title: '',
    rating: 5,
    text: '',
    author: ''
  })

  const showModal = ref(false);
  const openModal = () => showModal.value = true
  const closeModal = () => {
    showModal.value = false
    resetReviewForm()
  }

  const submitReview = () => {
    reviews.value.push(newReview.value)
    resetReviewForm()
    closeModal()
  }

  const resetReviewForm = () => {
    newReview.value = {
      title: '',
      rating: 5,
      text: '',
      author: ''
    }
  }

</script>