<template>
  <div class="main">
    <div class="fixed flex h-full w-full bg-gray-400">
      <div class="inset-y-0 bg-gray-600 w-1/4">crust</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style scoped>
.main {
  background-color: #403838;
  height: 100%;
}
.container {
  text-align: center;
  justify-content: center;
  width: 100%;
}
.title {
  color: #acf5f5;
}
</style>
