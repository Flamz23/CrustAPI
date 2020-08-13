<template>
  <div class="px-12">
    <div class="bg-gray-400 py-2 my-2 mx-auto w-full rounded-lg hover:shadow-outline">
      <p class="p-2">{{ action.name }}</p>
      <input type="text" v-if="action.type === 'text'" placeholder="efcs" />
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