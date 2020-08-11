<template>
  <div class="px-2 h-full">
    <div id="actionsHolder" class="bg-gray-600 overflow-y-scroll px-2 my-3">
      <draggable
        v-model="actions"
        :group="{name: 'actions-list', pull: 'clone', put: 'false'}"
        :sort="false"
      >
        <div v-for="action in actions" :key="action.id" @drag="startDrag">
          <actions :name="action" />
        </div>
      </draggable>
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
  props: {},
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
    };
  },
  methods: {
    startDrag: (evt, item) => {
      // evt.dataTransfer.dropEffect = "move";
      // evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("text", evt.target.innerHtml);
    },
    onDrop: (evt, list) => {
      const itemID = evt.dataTransfer.getData("itemID");
      const item = this.items.find((item) => item.id == itemID);
      item.list = list;
    },
  },
};
</script>

<style>
#actionsHolder {
  height: 30em;
}
</style>
