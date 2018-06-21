<template lang="html">
  <span class="timer">
    {{ timer }}
    <sub>seconds</sub>
  </span>
</template>

<script type="text/javascript">
export default {
  watch: {
    timer() {
      if (this.timer == 0) {
        this.$store.commit('TOGGLE_END_SCREEN')
      }
    }
  },
  computed: {
    timer() {
      return (this.$store.state.timer).toFixed(1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/vars.scss';

.timer {
  color: $color-gray-light;
  font-size: 4rem;

  @media (min-width: 600px) {
    font-size: 7.5rem;
  }

  sub {
    font-size: 1rem;
    vertical-align: baseline;
  }
}
</style>
