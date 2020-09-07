<template>
  <div>
    <!-- action holder buttons -->
    <button
      class="h-20 w-full mb-3 p-1 rounded focus:outline-none hover:bg-gray-600 shadow hover:"
      :class="color.actionHolderColor"
    >
      <div class="flex pb-1">
        <icons class="fill-current text-gray-500 h-full pl-1 pt-1" :iconName="action" />
        <div class="text-sm text-gray-500 pl-1 font-sans" :class="color.textHeader">{{action.name}}</div>
      </div>

      <div
        class="mx-auto text-gray-500 text-xs text-left w-full px-4 font-sans line-h"
      >{{ action.desc }}</div>
    </button>
  </div>
</template>

<script>
import icons from "@/components/icons.vue";

export default {
  components: {
    icons,
  },
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

<style>
.line-h {
  line-height: 1.2;
}
</style>