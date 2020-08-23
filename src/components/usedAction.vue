<template>
  <div class="px-12">
    <div class="bg-gray-400 py-2 my-2 mx-auto w-full rounded-lg hover:shadow-outline">
      <p class="p-2">{{ action.name }}</p>
      <textarea
        type="text"
        v-model="action.data.output"
        v-if="action.type === 'text'"
        class="m-5 rounded-md focus:outline-none p-2"
      />
      <!-- models output in workspace array -->
      <input type="range" v-if="action.type === 'range'" name="ed" id="p" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["action"],
};
</script>
<style>
</style>