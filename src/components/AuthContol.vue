<script>
import { check } from "@/untils/auth";

export default {
  functional: true,
  name: "AuthContol",
  props: {
    auth: {
      type: Array,
      request: true
    }
  },
  render(h, context) {
    let { props, scopedSlots } = context;
    return check(props.auth) ? scopedSlots.default() : null;
  }
};
</script>

<style scoped></style>
