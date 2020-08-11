<template>
  <div class="flex-1 pt-12" @dragover.prevent @dragenter.prevent @drop.prevent v-on:drop="drop">
    <draggable v-model="containers">
      <div
        class="mx-auto py-3 w-2/4 text-center"
        v-for="container in containers"
        :key="container.id"
        :group="{name: 'actions-list', pull: 'clone', put: 'false'}"
        :sort="false"
      >
        <container :name="container" />
      </div>
    </draggable>
  </div>
</template>
<script>
import container from "@/components/dropContainer.vue";
import draggable from "vuedraggable";
export default {
  name: "Workspace",
  components: {
    container,
    draggable,
  },
  data() {
    return {
      containers: [{ id: 0 }],
    };
  },
  methods: {
    drop: (event) => {
      event.preventDefault();
      //console.log(event);
      // var el = { id: 4 };
      // this.l.push(el);
      console.log(globalThis);
    },
  },
};
</script>
<style>
</style>