<template>
  <div class="px-12">
    <div class="bg-gray-400 py-2 my-2 mx-auto w-full rounded-lg hover:shadow-outline">
      <span class="p-2">{{name.name}}</span>
      <input type="text" v-if="name.type === 'text'" placeholder="efcs" />
      <input type="range" v-if="name.type === 'range'" name="ed" id="p" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name,
  },
};
</script>
<style>
</style>