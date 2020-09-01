<template>
  <div class="w-full mt-8 px-16">
    <draggable
      :list="usedActionsList"
      :group="{name: 'actions-list'}"
      :animation="200"
      ghostClass="ghost"
      emptyInsertThreshold: 15
    >
      <!-- works better with list rather than v-model -->
      <!--v-model="usedActionsList"-->
      <div v-for="usedActionInstance in usedActionsList" :key="usedActionInstance.id">
        <usedActions :action="usedActionInstance" />
      </div>
      <div slot="footer" class="bg-gray-400 py-2 my-2 mx-auto mr-12 ml-12 rounded-lg hover:shadow-outline">Add</div>
    </draggable>
  </div>
</template>

<script>
import usedActions from "@/components/usedAction.vue";
import draggable from "vuedraggable";

export default {
  components: {
    usedActions,
    draggable,
  },
  data() {
    return {};
  },
  computed: {
    usedActionsList: {
      get() {
        // refer to https://www.ictshore.com/javascript/vuex-modules-tutorial/
        return this.$store.getters['actionStoreModule/getUsedActions'];
      },
      set(value) {
         // refer to https://www.ictshore.com/javascript/vuex-modules-tutorial/
        this.$store.commit("actionStoreModule/changeUsedActions", value);
      },
    },
  },
};
</script>

<style>
</style>