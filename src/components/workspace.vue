<template>
  <div class="w-full h-full pt-8 z-20" :class="color.workspaceColor">
    <div id="workspace" class="overflow-y-scroll h-64">
      <draggable
        :list="usedActionsList"
        :group="{name: 'actions-list'}"
        :animation="200"
        ghost-class="ghost"
      >
        <!--v-model="usedActionsList"-->
        <div v-for="usedActionInstance in usedActionsList" :key="usedActionInstance.id">
          <usedActions :action="usedActionInstance" />
        </div>
        <!-- <div slot="footer" class="bg-gray-400 py-2 my-2 mx-auto mr-12 ml-12 rounded-lg hover:shadow-outline">Add</div> -->
      </draggable>
    </div>
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
    // the spread operator '...map[]' might be easier on the eyes
    usedActionsList: {
      get() {
        // refer to https://www.ictshore.com/javascript/vuex-modules-tutorial/
        return this.$store.getters["actionStoreModule/getUsedActions"];
      },
      set(value) {
        // refer to https://www.ictshore.com/javascript/vuex-modules-tutorial/
        this.$store.commit("actionStoreModule/changeUsedActions", value);
      },
    },
    color: function () {
      // colors are now stored in vuex in the cssStoreModule module
      return this.$store.getters["cssStoreModule/getColors"];
    },
  },
};
</script>

<style>
#workspace {
  height: 60%;
}
</style>