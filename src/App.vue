<template>
  <div class="hello"><btn @click="event" text="Button" /></div>
</template>

<script>
import btn from "@/components/btn";
import { START_PROCESS, END_PROCESS } from "@/store/types";

export default {
  components: {
    btn
  },
  methods: {
    event() {
      this.$store.commit(START_PROCESS);
      setTimeout(() => {
        // ajax process...
        this.$store.commit(END_PROCESS);
      }, 1500);
    }
  }
};
</script>
