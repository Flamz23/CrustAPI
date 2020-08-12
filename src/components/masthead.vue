<template>
  <div class="bg-gray-200 h-10 w-full inline">
    <div class="flex float-right h-full">
      <button class="flex w-16 bg-blue-400 my-2 rounded-md mr-3 hover:bg-blue-700" @click="dol">
        <svg
          class="h-full w-full p-px"
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
        <span class="pr-2 text-sm pt-px text-gray-300">Run</span>
      </button>

      <svg class="h-full w-8 p-1 mr-3" viewBox="0 0 100 80" width="40" height="40">
        <rect width="90" height="15" rx="5" />
        <rect y="30" width="90" height="15" rx="5" />
        <rect y="60" width="90" height="15" rx="5" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Masthead",
  methods: {
    dol: () => {
      console.log("jd");
    },
  },
};
</script>

<style></style>
