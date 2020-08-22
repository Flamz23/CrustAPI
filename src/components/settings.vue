<template>
  <div class="fixed">
    <button
      class="fixed bg-blue-500 m-2 focus:outline-none top-0 right-0 mt-12 rounded-lg p-1 text-gray-200"
      @click="drawer()"
    >settings {pls fix w/ vuex}</button>
    <aside
      class="transform top-0 right-0 w-3/12 bg-gray-400 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 rounded-l-lg"
      :class="isClosed ? 'translate-x-full' : '-translate-x-0'"
    >
      <button
        class="bg-blue-500 m-2 focus:outline-none float-right rounded-lg p-1 text-gray-200"
        @click="drawer()"
      >close (x)</button>
      <div class="h-48 w-3/4 overflow-scroll bg-white mx-auto mt-40">setings: {{settings}}</div>
    </aside>
  </div>
</template>
<script>
import settings from "../../public/.config/settings";
export default {
  name: "settings",
  data() {
    return {
      isClosed: false,
      settings: settings,
    };
  },
  methods: {
    drawer() {
      this.isClosed = !this.isClosed;
    },
  },
};
</script>