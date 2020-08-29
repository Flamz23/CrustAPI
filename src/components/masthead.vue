<template>
  <div class="bg-gray-200 h-10 w-full inline">
    <div class="flex float-right h-full">
      <button
        class="flex w-16 bg-blue-500 my-2 rounded-md mr-3 hover:bg-blue-400 focus:outline-none"
        @click="dol"
      >
        <svg
          class="h-full w-full p-px fill-current text-gray-200"
          height="48"
          viewBox="0 0 48 48"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h48v48H0z" fill="none" />
          <path
            d="M20 33l12-9-12-9v18zm4-29C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z"
          />
        </svg>
        <span class="pr-2 text-sm pt-px text-gray-200">Run</span>
      </button>
      <drawer />
    </div>
  </div>
</template>

<script>
import settings from "../../public/.config/settings";
import drawer from "@/components/drawer.vue";
import act from "@/actions.js";
import controller from "@/controller.js";

export default {
  name: "Masthead",
  components: {
    drawer,
  },
  data() {
    return {};
  },
  methods: {
    dol: () => {
      new controller(act);
    },
  },
};
</script>

<style></style>
