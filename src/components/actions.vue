<template>
  <div>
    <button
      class="bg-gray-300 py-2 mx-auto w-full px-12 outline-none focus:outline-none hover:bg-gray-400 my-1 rounded-lg"
    >
      <!-- h-12 md:h24-->
      <!-- Change the height of the button to accommodate for smaller screens.-->
      <span class="mx-auto text-center text-lg text-gray-700">{{action.name}}</span>
      <div class="mx-auto text-gray-500 text-sm w-full">{{ action.desc }}</div>
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

