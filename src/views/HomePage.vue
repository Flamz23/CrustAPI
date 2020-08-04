<template>
  <div class="flex main w-full h-screen bg-black-500">
    <masthead />
    <!-- <sideBar /> -->
  </div>
</template>

<script>
// import sideBar from "@/components/sideBar.vue";
import Masthead from "@/components/masthead.vue";

export default {
  name: "Masthead",
  components: {
    masthead: Masthead,
    // sideBar: sideBar,
  },
};
</script>

<style>
</style>
