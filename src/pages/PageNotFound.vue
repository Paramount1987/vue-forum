<template>
  <div
    class="col-full"
    :class="$style.centered"
  >
    <h1 :class="$style.headingLarge">Not Found</h1>
    <p :class="$style['text-large']">
      Ooops, we coludn't find what are you looking for.
      Why don't you
      <router-link :to="{name: 'Home'}">
        go home instead?
      </router-link>
    </p>
  </div>
</template>
<script>
export default {

}
</script>

<style module>
  .headingLarge {
    font-size: 100px;
  }
  .text-large {
    font-size: 50px;
    font-weight: 100;
  }
  .centered {
    text-align: center;
  }
</style>
