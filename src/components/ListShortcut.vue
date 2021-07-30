<template>
    <div class="listshortcut">
      <Shortcut v-for="shortcut in links" :key="shortcut.title"
        :url="shortcut.url"
        :title="shortcut.title"
        :icon="shortcut.icon"
      />
    </div>
</template>

<script>
import Shortcut from '@/components/Shortcut.vue';

export default {
  name: 'ListShortcut',
  props: [ 'links' ],
  components: {
    Shortcut,
  }
}
</script>

<style scoped lang="scss">
  .listshortcut {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width:60%;
    margin: 0 auto;
    justify-content: center;
  }
</style>