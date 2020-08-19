<template>
  <div class="bg-gray-700 w-full">
    <draggable :list="usedActionsList" :group="{name: 'actions-list'}" :animation="200">
      <!-- works better with list rather than v-model -->
      <!--v-model="usedActionsList"-->
      <div v-for="usedActionInstance in usedActionsList" :key="usedActionInstance.id">
        <usedActions :action="usedActionInstance" />
      </div>
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
        return this.$store.getters.getUsedActions;
      },
      set(value) {
        this.$store.commit("changeUsedActions", value[value.length - 1]);
      },
    },
  },
};
</script>

<style>
</style>