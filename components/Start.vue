<template lang="html">
  <div class="start-layer">
    <div class="start-content">
      <p>Welcome on this Word Game!</p>
      <h2>Rules</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      <button @click="launchGame" type="button" name="button">Play</button>
      <span>Warm your fingers before you click...</span>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  methods: {
    launchGame() {
      this.$store.commit('TOGGLE_START_SCREEN')
      this.$store.commit('DECREMENT_TIMER')
    },
  }
}
</script>

<style lang="scss">
@import '../assets/stylesheets/vars.scss';

.start-layer {
  align-items: center;
  background: rgba($color-black, 0.2);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 100%;

  .start-content {
    background: $color-white;
    border: 3px solid $color-main;
    border-radius: 5px;
    margin: 0 auto;
    padding: 25px;
    width: 600px;

    h2 {
      border-bottom: 1px solid $color-gray;
      color: $color-gray;
      margin: 25px 0;
      padding: 0 0 12.5px 0;
    }

    button {
      background: $color-main;
      border-bottom: 3px solid darken($color-main, 5%);
      border-radius: 5px;
      color: $color-white;
      font-size: 16px;
      font-family: $font-sans;
      margin-top: 25px;
      padding: 12.5px 25px;
      text-transform: uppercase;
      min-width: 150px;
      -webkit-appearance: none;

      &:hover,
      &:focus {
        background: darken($color-main, 5%);
        border-bottom-color: transparent;
        outline: 0;
      }
    }

    span {
      margin-left: 25px;
    }
  }
}
</style>
