<template>
  <div class="modal-wrapper" v-show="show">
    <div class="modal">
      <svg
        class="modal__btn_close"
        viewPort="0 0 12 12"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        @click="$emit('input', false)"
      >
        <line x1="1" y1="16" x2="16" y2="1" stroke="black" stroke-width="2" />
        <line x1="1" y1="1" x2="16" y2="16" stroke="black" stroke-width="2" />
      </svg>
      <slot />
    </div>
  </div>
</template>

<script>
//
export default {
  props: {
    show: {
      type: Boolean,
    },
  },
  setup() {},
}
</script>


<style scoped lang="scss">
.modal {
  position: relative;
  background-color: white;
  margin: 20px auto;
  padding: 20px;
  width: 550px;
  //   height: 100%;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  animation: modal 0.5s;
  &__btn {
    &_close {
      cursor: pointer;
      position: absolute;
      right: 16px;
      top: 16px;
      width: 16px;
      height: 16px;
    }
  }
  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 1;
    top: 0%;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }
}

@keyframes modal {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>