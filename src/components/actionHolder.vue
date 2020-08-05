<template>
  <div>
    <div class="h-64 bg-gray-700 overflow-scroll">
      <div v-for="action in actions" :key="action.id">
        <actions :name="action" />
      </div>
    </div>
  </div>
</template>

<script>
import actions from "@/components/actions.vue";
export default {
  components: {
    actions
  },
  data() {
    return {
      actions: [
        {
          name: "First Action",
          id: 1
        },
        {
          name: "sjhdj Action",
          id: 2
        },
        {
          name: "aidnfi Action",
          id: 3
        },
        {
          name: "Fnfanf Action",
          id: 4
        }
      ]
    };
  }
};
</script>

<style></style>
