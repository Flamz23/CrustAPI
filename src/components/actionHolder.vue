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

export default {
  components: {
    actions,
    draggable,
  },
  data() {
    return {
      actions: [
        {
          name: "Text",
          desc: "A simple text field to enter info",
          id: 2,
        },
        {
          name: "Notification",
          desc: "Set up mock notifications for your computer",
          id: 1,
        },
        {
          name: "Brightness",
          desc: "Get and set the brightness of your computer",
          id: 3,
        },
        {
          name: "Volume",
          desc: "Get and Set your device volume",
          id: 4,
        },
        {
          name: "Info",
          desc: "Set up a mock information dialog for error messages",
          id: 5,
        },
        {
          name: "Error",
          desc: "lorem Ipsum dolor sit amet ci avec le dos les avoir les yeux",
          id: 6,
        },
        {
          name: "Seventh Actions",
          id: 7,
        },
      ],

      // not needed

      // usedActions: [
      //   {
      //     name: "Text",
      //     desc: "A simple text field to enter info",
      //     id: 2,
      //   },
      // ],
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
