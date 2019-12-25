<template>
  <div>
    step2
    <button @click="next">下一步</button>
  </div>
</template>

<script>
export default {
  name: "Step2",
  methods: {
    next() {
      this.$router.replace({ name: "step3" });
    }
  }
};
</script>

<style scoped></style>
