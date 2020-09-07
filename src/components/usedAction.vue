<template>
  <div class="px-24">
    <div
      class="bg-gray-400 py-2 my-2 mx-auto w-full rounded-md shadow-lg"
      :class="color.actionHolderColor"
    >
      <div class="pl-2 flex">
        <icons class="fill-current text-gray-500 h-full pl-1 pt-1" :iconName="action" />
        <div class="pl-1 text-gray-400 text-sm pt-px">{{ action.name }}</div>
      </div>

      <textarea
        type="text"
        v-model="action.data.output"
        v-if="action.type === 'text'"
        class="m-2 rounded focus:outline-none p-1 text-xs"
      />
      <!-- models output in workspace array -->
      <input type="range" v-if="action.type === 'range'" name="ed" id="p" />
    </div>
  </div>
</template>
<script>
import icons from "@/components/icons.vue";
export default {
  components: {
    icons,
  },
  props: ["action"],
  computed: {
    color: function () {
      // colors are now stored in vuex in the cssStoreModule module
      return this.$store.getters["cssStoreModule/getColors"];
    },
  },
};
</script>
