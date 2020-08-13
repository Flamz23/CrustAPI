<template>
  <div class="h-screen flex max-h-screen max-w-screen">
    <div class="absolute h-full">
      <sideBar />
    </div>
    <div class="ml-64 flex w-full flex-col">
      <masthead />
      <workspace />
    </div>
  </div>
</template>

<script>
import sideBar from "@/components/sideBar.vue";
import Masthead from "@/components/masthead.vue";
import workspace from "@/components/workspace.vue";

export default {
  name: "HomePage",
  components: {
    masthead: Masthead,
    sideBar: sideBar,
    workspace,
  },
};
</script>

<style></style>
