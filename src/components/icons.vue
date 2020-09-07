<template>
  <div>
    <svg class="icon" style="width:16px;height:16px" viewBox="0 0 24 24">
      <path :d="iconpath" />
    </svg>
  </div>
</template>

<script>
import iconpaths from "@/iconpath.js";

export default {
  name: "icon",
  props: {
    iconName: {
      type: Object,
    },
  },
  data() {
    return {
      dll: "sjkdjsoods",
    };
  },
  computed: {
    iconpath: function () {
      var funct = this.$props.iconName.funct;
      return iconpaths[funct];
    },
  },
};
</script>