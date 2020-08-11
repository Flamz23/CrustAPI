<template>
  <div class="flex main w-full h-screen bg-black-500">
    <sideBar />
    <masthead />
  </div>
</template>

<script>
import sideBar from "@/components/sideBar.vue";
import Masthead from "@/components/masthead.vue";

export default {
  name: "HomePage",
  components: {
    masthead: Masthead,
    sideBar: sideBar,
  },
};
</script>

<style></style>
