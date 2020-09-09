<template>
  <div class="h-10 w-full inline shadow-md z-30" :class="color.mastColor">
    <div class="flex float-right h-full">
      <!-- run button -->
      <button
        class="flex w-12 bg-purple-600 mx-auto my-2 mr-3 rounded hover:bg-purple-700 focus:outline-none shadow-lg focus:shadow-none"
        @click="run"
      >
        <!-- use proper icon component -->
        <svg
          width="22"
          height="21"
          viewBox="0 0 22 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="mx-auto shadow-inner"
        >
          <path
            d="M6.66026 5.73205C6.66026 4.96225 7.49359 4.48113 8.16025 4.86603L20.1603 11.7942C20.8269 12.1791 20.8269 13.1414 
            20.1603 13.5263L8.16026 20.4545C7.49359 20.8394 6.66026 20.3583 6.66025 19.5885L6.66026 5.73205Z"
            fill="#ECE8F1"
          />
        </svg>
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
    run: () => {
      new controller(act);
    },
  },

  computed: {
    color: function () {
      // colors are now stored in vuex in the cssStoreModule module
      return this.$store.getters["cssStoreModule/getColors"];
    },
  },
};
</script>