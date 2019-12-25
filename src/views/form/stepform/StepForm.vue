<template>
  <div>
    step-form
    <div>
      step1
      <button @click="next">下一步</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepForm",
  methods: {
    next() {
      this.$router.replace({ name: "step2" });
    }
  }
};
</script>

<style scoped></style>
