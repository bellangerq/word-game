<template lang="html">
  <section>
    <h1>Nuxt.js starter</h1>
    <img src="~/static/og.png" alt="Nuxt.js starter">
    <p><a href="https://github.com/bellangerq/nuxt-starter" target="_blank">View on GitHub</a></p>
  </section>
</template>

<script type="text/javascript">
export default {
}
</script>

<style lang="scss">
section {
  margin: 50px 0;
  text-align: center;

  h1 {
    font-size: 28px;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  a {
    color: black;
    padding: 5px;
    text-decoration: none;

    &:hover,
    &:focus {
      border: 2px solid black;
      outline: none;
    }
  }

}
</style>
