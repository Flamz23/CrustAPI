<template>
  <div class="flex w-full" @dragover.prevent>
    <div class="h-full pr-2">
      <div id="actionsHolder" class="bg-gray-600 overflow-y-scroll px-4 my-3">
        <draggable
          :list="actions"
          :group="{name: 'actions-list', pull: 'clone', put: 'false'}"
          :sort="false"
        >
          <!--:clone="genNewId(el)"-->
          <!-- works better with list rather than v-model -->
          <!--v-model="actions"-->
          <div v-for="action in actions" :key="action.id">
            <actions :action="action" />
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import actions from "@/components/actions.vue";
import usedActions from "@/components/usedAction.vue";
import act from "@/actions.js";

export default {
  components: {
    actions,
    draggable,
  },
  data() {
    return {
      actions: act,
    };
  },
  methods: {
    genNewId: function (el) {
      // let s = el.id * Math.random();
      // return {
      //   name: el.name
      //   id: el.id
      // };
      console.log(gennew);
      return el;
    },
  },
};
</script>

<style>
#actionsHolder {
  height: 27rem;
}
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: #a0aec0;
}
</style>
