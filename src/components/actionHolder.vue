<template>
  <!-- actionHolder overscroll -->
  <div
    id="actionsHolder"
    class="overflow-y-scroll overscroll-x-none overscroll-contain px-5 mr-1"
    :class="color.sideBarcolor"
  >
    <draggable
      :list="actions"
      :group="{name: 'actions-list', pull: 'clone', put: 'false'}"
      :sort="false"
      ghost-class="ghost"
    >
      <div v-for="action in actions" :key="action.id">
        <actions :action="action" />
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import actions from "@/components/actions.vue";
import usedActions from "@/components/usedAction.vue";
import constantActions from "@/actions.js";

export default {
  components: {
    actions,
    draggable,
  },

  data() {
    return {
      actions: constantActions,
    };
  },

  methods: {},
  computed: {
    color: function () {
      // colors are now stored in vuex in the cssStoreModule module
      return this.$store.getters["cssStoreModule/getColors"];
    },
  },
};
</script>

<style>
#actionsHolder {
  height: 27rem;
}
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #4a5568;
}
</style>
