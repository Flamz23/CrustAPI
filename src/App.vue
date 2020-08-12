<template>
  <div id="app fixed w-full h-full bg-gray-500">
    <router-view />
  </div>
</template>

<script>
import HomePage from "@/views/HomePage.vue";

export default {};
</script>

<style>
@tailwind base;

@tailwind components;

@tailwind utilities;

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
