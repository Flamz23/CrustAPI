<template>
  <div>
    <button
      class="bg-gray-300 py-2 mx-auto w-full px-12 outline-none focus:outline-none hover:bg-gray-400 my-1 rounded-lg"
    >
      <<<<<<< HEAD
      <!-- h-12 md:h24-->
      <!-- Change the height of the button to accommodate for smaller screens.-->
      <span class="mx-auto text-center text-lg text-gray-700">{{action.name}}</span>
      <div class="mx-auto text-gray-500 text-sm w-full invisible lg:visible">{{ action.desc }}</div>=======
      <span class="mx-auto text-center text-lg text-gray-700">{{name.name}}</span>
      <br />
      <span class="mx-auto text-gray-500 text-sm w-full invisible lg:visible">{{ name.desc }}</span>
      >>>>>>> 46b6311dcb2f1f69728ebe31db5c459824cda01b
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

