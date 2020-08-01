<template>
  <div class="main">
    <div class="sidebar"><SideBar /></div>
    <p>
      Some random text
    </p>
  </div>
</template>

<script>
import sideBar from "@/components/sideBar.vue";
export default {
  name: "HomePage",
  components: {
    SideBar: sideBar
  }
};
</script>

<style>
.sidebar {
  width: 400x;
}
.main {
  display: flex;
  flex-direction: row;
}
</style>
