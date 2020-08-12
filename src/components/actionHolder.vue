<template>
  <div class="flex w-full">
    <div class="h-full pr-2">
      <div id="actionsHolder" class="bg-gray-600 overflow-y-scroll px-4 my-3">
        <draggable
          v-model="actions"
          :group="{name: 'actions-list', pull: 'clone', put: 'false'}"
          :sort="false"
        >
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
      usedActions: [
        {
          name: "Text",
          desc: "A simple text field to enter info",
          id: 2,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
#actionsHolder {
  height: 20rem;
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
