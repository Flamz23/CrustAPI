<template>
  <div>
    <button
      class="inline-block align-middle bg-gray-300 py-2 mx-auto overflow-hidden h-12 lg:h-24 w-full px-12 outline-none focus:outline-none hover:bg-gray-400 my-1 rounded-lg"
    >
      <!-- Change the height of the button to accommodate for smaller screens.-->
      <p class="mx-auto text-center text-md md:text-lg text-gray-700">{{action.name}}</p>
      <p class="mx-auto text-gray-500 text-sm w-full hidden md:inline">{{ action.desc }}</p>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    action: {
      type: Object,
    },
  },
};
</script>

