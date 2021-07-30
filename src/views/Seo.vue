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
    name: 'Seo',
    components: {
      ListShortcut
    },
    computed: {
      getLink() {
        return this.$store.state.seo;
      }
    }
  }
</script>

<style scoped lang="scss">



</style>