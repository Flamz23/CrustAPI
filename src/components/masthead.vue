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
      <!-- settings cog wheel -->
      <svg
        style="width:24px;height:24px"
        viewBox="0 0 24 24"
        class="my-auto mr-2 fill-current text-gray-700"
        @click="drawer"
      >
        <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
      </svg>
    </div>
    <!--  Settings Drawer -->
    <div class="fixed">
      <!-- transparent overlay -->
      <div
        class="fixed top-0 right-0 h-full w-full bg-black opacity-50 overflow-auto ease-in-out transition-all duration-500 z-29"
        :class="isClosed ? 'hidden' : 'flex'"
        @click="drawer"
      ></div>
      <!-- drawer -->
      <aside
        class="transform top-0 right-0 w-3/12 bg-gray-400 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isClosed ? 'translate-x-full' : '-translate-x-0'"
      >
        <button
          class="bg-blue-500 m-2 focus:outline-none float-right rounded-lg p-1 text-gray-200"
          @click="drawer()"
        >close (x)</button>
        <div class="h-48 w-3/4 overflow-scroll bg-white mx-auto mt-40">setings: {{settings}}</div>
      </aside>
    </div>
  </div>
</template>

<script>
import settings from "../../public/.config/settings";
import act from "@/actions.js";
import controller from "@/controller.js";

export default {
  name: "Masthead",
  data() {
    return {
      isClosed: true,
      settings: settings,
    };
  },

  methods: {
    run: () => {
      new controller(act);
    },
    drawer() {
      this.isClosed = !this.isClosed;
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