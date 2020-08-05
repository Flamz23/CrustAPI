<template>
  <div class="inset-y-0 bg-gray-600 w-1/4">
    <div class="flex full">
      <h3 class="mx-auto my-auto font-sans text-2xl">crust</h3>
    </div>
    <div class="flex full p-3">
      <input class="mx-auto rounded w-full h-6" type="text" placeholder="Search..." />
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
