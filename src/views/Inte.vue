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
    name: 'Inte',
    components: {
      ListShortcut
    },
    computed: {
      getLink() {
        return this.$store.state.inte;
      }
    }
  }
</script>

<style scoped lang="scss">



</style>