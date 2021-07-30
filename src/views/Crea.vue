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
    name: 'Crea',
    components: {
            ListShortcut
    },
    computed: {
      getLink() {
        return this.$store.state.crea;
      }
    }
  }
</script>

<style scoped lang="scss">


</style>