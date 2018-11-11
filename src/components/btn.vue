<template>
  <button
    :disabled="$store.state.btn.processing"
    class="button"
    @click="handleClick"
  >
    <div v-if="$store.state.btn.processing" class="button__loader"></div>
    <div v-else class="button__text">{{ text }}</div>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Button"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
.red {
  color: red;
}
.button {
  width: 180px;
  height: 50px;
  background: #fff;
  border: 2px solid #000;
  border-radius: 10px;
  outline: none;
  cursor: pointer;

  &__loader {
    margin: 0 auto;
    width: 22px;
    height: 20px;
    border: 4px solid #ccc;
    border-bottom: 4px solid #000;
    border-radius: 50%;
    animation-name: spin;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  &__text {
    color: #000;
    font-size: 18px;
  }
}

button:active {
  background: #fbfbfb;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.isHide {
  display: none;
}
</style>
