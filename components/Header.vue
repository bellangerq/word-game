<template lang="html">
  <header>
    <h1><span>Aa</span> Word Game</h1>
    <div class="game-info">
      <p>Current level: <span>{{ $store.state.level.number }}</span></p>
      <p>Current streak: <span>{{ $store.state.currentStreak }}</span></p>
      <p>Highest streak: <span>{{ $store.state.highestStreak }}</span></p>
    </div>
  </header>
</template>

<script type="text/javascript">
export default {
}
</script>

<style lang="scss">
@import '../assets/stylesheets/vars.scss';

header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 25px;

  h1 {

    &:hover span {
      background: $color-white;
      color: $color-main;
    }

    span {
      background: $color-main;
      border: 3px solid $color-main;
      border-radius: 5px;
      color: $color-white;
      margin: 0 5px 0 0;
      padding: 5px 10px;
      transition: all 0.3s ease-in-out;
    }
  }

  .game-info {
    text-align: right;

    p {
      color: $color-gray;

      span {
        color: $color-main;
      }
    }
  }
}
</style>
