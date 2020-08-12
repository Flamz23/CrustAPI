<template>
  <div class>
    <draggable v-model="usedActions" :group="{name: 'actions-list'}" :animation="200">
      <div class v-for="usedAction in usedActions" :key="usedAction.id">
        <usedActions :name="usedAction" />
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
    usedActions() {
      return this.$store.getters.getUsedActions;
    },
  },
};
</script>

<style>
</style>