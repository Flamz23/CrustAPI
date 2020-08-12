<template>
  <div class="absolute flex w-full" @dragover.prevent>
    <div class="inset-y-0 h-full w-1/4 pr-2">
      <div id="actionsHolder" class="bg-gray-600 overflow-y-scroll px-4 my-3">
        <draggable
          v-model="actions"
          :group="{name: 'actions-list', pull: 'clone', put: 'false'}"
          :sort="false"
        >
          <div v-for="action in actions" :key="action.id">
            <actions :name="action" />
          </div>
        </draggable>
      </div>
    </div>
    <div class="flex-1">
      <div class="w-3/6 mx-auto">
        <draggable v-model="usedActions" :group="{name: 'actions-list'}" :animation="200">
          <div v-for="usedAction in usedActions" :key="genKey(usedAction.name)">
            <usedActions :name="usedAction" />
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

const actionArray = [
  {
    name: "Text",
    desc: "A simple text field to enter info",
    type: "text",
    id: 2,
  },
  {
    name: "Notification",
    desc: "Set up mock notifications for your computer",
    type: "action",
    id: 1,
  },
  {
    name: "Brightness",
    desc: "Get and set the brightness of your computer",
    type: "range",
    id: 3,
  },
  {
    name: "Volume",
    desc: "Get and Set your device volume",
    type: "range",
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
    desc: "lorem Ipsum dolor sit amet ci avec le dos les avoir les yeux",
    type: "action",
    id: 7,
  },
];

export default {
  components: {
    actions,
    draggable,
    usedActions,
  },
  data() {
    return {
      actions: actionArray,
      usedActions: [
        {
          name: "Text",
          desc: "A simple text field to enter info",
          id: 2,
        },
      ],
    };
  },
  methods: {
    // this is a random no. gen.
    genKey: function (len) {
      return Math.random().toString(36).substring(7);
    },
    see: function () {
      console.log(JSON.stringify(this.usedActions));
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
