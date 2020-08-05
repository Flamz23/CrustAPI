<template>
  <div class="inset-y-0 bg-gray-600 w-1/4">
    <div class="flex full p-3">
      <input
        class="mx-auto rounded w-full h-6 px-2 py-4"
        type="text"
        placeholder="Search..."
      />
    </div>
    <div>
      <actionHolder />
    </div>
  </div>
</template>

<script>
import actionHolder from "@/components/actionHolder.vue";
export default {
  name: "SideBar",
  components: {
    actionHolder
  }
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
