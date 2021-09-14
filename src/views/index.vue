<template>
  <div class="app-container"></div>
</template>

<script>
// import { postLogin } from '@/api/api.js';
export default {
  name: 'AppIndex',
  data() {
    return {
      data1: 132,
      Data1: 456
    };
  },
  components: {},
  mounted() {
    console.log(this.data1, this.Data1);
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.app-container {
}
</style>
