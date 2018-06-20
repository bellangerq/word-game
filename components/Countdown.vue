<template lang="html">
  <span class="timer">
    {{ ($store.state.timer).toFixed(1) }}
    <sub>seconds</sub>
  </span>
</template>

<script type="text/javascript">
export default {
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/vars.scss';

.timer {
  color: $color-gray-light;
  font-size: 120px;

  sub {
    font-size: 16px;
    vertical-align: baseline;
  }
}
</style>
