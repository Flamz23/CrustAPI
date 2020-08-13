<template>
  <div class="bg-gray-700 w-full">
    <draggable v-model="usedActionsList" :group="{name: 'actions-list'}" :animation="200">
      <div v-for="usedAction in usedActionsList" :key="usedAction.id">
        <usedActions :name="usedAction" />
      </div>
    </draggable>
    <div v-if="!usedActionsList.get">Drag something here to start making stuff !</div>
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
        this.$store.commit("changeUsedActions", value);
      },
    },
  },
};
</script>

<style>
</style>