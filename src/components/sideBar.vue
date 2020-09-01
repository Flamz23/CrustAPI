<template>
  <div class="flex h-full">
    <div class="inset-y-0 w-64" :class="color.sideBarcolor">
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
  computed: {
    color: function () {
      // colors are now stored in vuex in the cssStoreModule module
      return this.$store.getters["cssStoreModule/getColors"];
    },
  },
};
</script>