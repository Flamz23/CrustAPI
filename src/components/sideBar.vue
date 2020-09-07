<template>
  <div class="flex h-full">
    <!-- search bar -->
    <div class="inset-y-0 w-64" :class="color.sideBarcolor">
      <div class="h-20 w-full"></div>
      <div class="flex p-3">
        <input
          class="mx-2 rounded w-full h-6 p-4 outline-none shadow-inner placeholder-gray-400"
          type="text"
          placeholder="Search..."
        />
      </div>
      <!-- filter groups -->
      <div class="h-3 w-full"></div>
      <!-- actionholder -->
      <actionHolder />
    </div>
  </div>
</template>

<script>
import actionHolder from "@/components/actionHolder.vue";

export default {
  // name: "SideBar",
  components: {
    actionHolder,
  },

  computed: {
    color: function () {
      // colors are now stored in vuex in the cssStoreModule module
      return this.$store.getters["cssStoreModule/getColors"];
    },
  },
};
</script>