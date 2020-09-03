<template>
  <div>
    <button
      class="inline-block align-middle py-2 mx-auto overflow-hidden h-12 lg:h-24 w-full px-12 outline-none focus:outline-none hover:bg-gray-400 my-1 rounded-md"
      :class="color.actionHolderColor"
    >
      <!-- Change the height of the button to accommodate for smaller screens.-->
      <div class="mx-auto text-center text-md md:text-lg text-gray-700">{{action.name}}</div>
      <div class="mx-auto text-gray-500 text-sm w-full hidden lg:flex">{{ action.desc }}</div>
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
  computed: {
    color: function () {
      // colors are now stored in vuex in the cssStoreModule module
      return this.$store.getters["cssStoreModule/getColors"];
    },
  },
};
</script>

