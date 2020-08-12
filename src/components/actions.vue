<template>
  <div>
    <button
      class="bg-gray-300 py-2 mx-auto w-full px-12 outline-none focus:outline-none hover:bg-gray-400 my-1 rounded-lg"
    >
      <span class="mx-auto text-center text-lg text-gray-700">{{name.name}}</span>
      <br />
      <span class="mx-auto text-gray-500 text-sm w-full invisible lg:visible">{{ name.desc }}</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    name,
  },
};
</script>

<style></style>
