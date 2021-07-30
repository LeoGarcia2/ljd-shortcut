<template>
    <div>
      <ListShortcut
      :links="getLink"
      />
    </div>
</template>

<script>
import ListShortcut from '../components/ListShortcut.vue';

  export default {
    name: 'Dev',
    components: {
      ListShortcut
    },
    computed: {
      getLink() {
        return this.$store.state.dev;
      }
    }
  }
</script>

<style scoped lang="scss">



</style>