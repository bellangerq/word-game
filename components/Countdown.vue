<template lang="html">
  <VueCountdown class="timer" :time="$store.state.timer" :interval="100" tag="span">
    <template slot-scope="props">{{ props.seconds }}<sub>seconds</sub></template>
  </VueCountdown>
</template>

<script type="text/javascript">
import VueCountdown from '@xkeshi/vue-countdown'
export default {
  components: {
    VueCountdown
  }
}
</script>

<style lang="scss">
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
