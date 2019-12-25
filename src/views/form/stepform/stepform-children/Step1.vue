<template>
  <div>
    step1
    <button @click="next">下一步</button>
  </div>
</template>

<script>
export default {
  name: "Step1",
  methods: {
    next() {
      this.$router.replace({ name: "step2" });
    }
  }
};
</script>

<style scoped></style>
