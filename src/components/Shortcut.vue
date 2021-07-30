<template>
    <div class="shortcut">
        <a target="_blank" class="shortcut__link" :href="url">
        <img class="shortcut__logo" :src="icon">
        <!-- <img class="shortcut__logo" src="@/assets/logo.png"> -->
        <p class="shortcut__title">{{ title }}</p>
        </a>
    </div>
</template>

<script>
export default {
  name: 'Shortcut',
  props: [ 'url', 'title', 'icon'],
}
</script>

<style scoped lang="scss">
  .shortcut {
    padding-top: 20px;
    height: 180px;
    width: 200px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        box-shadow: 5px 5px 20px black;
        transition: .2s;
        transform: translate(0, -3px);
    }

      &__logo {
        margin: 0 auto;
        max-height: 85px;
      }

      &__link {
        margin-top: 20px;
        text-decoration: none;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        font-weight: bold;
        color: #2c3e50;
      }

  }
</style>