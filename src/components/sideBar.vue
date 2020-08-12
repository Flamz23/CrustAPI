<template>
  <div class="flex h-full">
    <div class="inset-y-0 bg-gray-600 w-64">
      <div class="flex p-3">
        <input
          class="mx-auto rounded w-full h-6 px-2 py-4 outline-none focus:border-teal-400 border-2"
          type="text"
          placeholder="Search..."
        />
      </div>
      <actionHolder />
    </div>
  </div>
</template>

<script>
import actionHolder from "@/components/actionHolder.vue";

export default {
  name: "SideBar",
  components: {
    actionHolder,
    //Workspace,
  },
};
</script>
