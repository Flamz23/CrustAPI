<template>
  <div>
    <button
      class="bg-gray-300 mx-auto px-12 outline-none focus:outline-none hover:bg-gray-400 my-1 rounded-lg"
    >
      {{ name.name }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    name
  }
};
</script>

<style></style>
