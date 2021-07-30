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
    name: 'Gestion',
    components: {
      ListShortcut
    },
    computed: {
      getLink() {
        return this.$store.state.gestion;
      }
    }
  }
</script>

<style scoped lang="scss">


</style>