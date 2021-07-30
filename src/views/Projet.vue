<template>
    <div>

      <label for="hashkey">Clef de cryptage : </label>
      <input id="hashkey" type="password">

      <p class="consigne">Votre clef de cryptage doit être renseignée pour voir les véritables valeurs</p>
      <p class="consigne">La totalité des données se trouvant sur cette page sont stocké dans le localStorage de votre navigateur et ne sont donc par conséquent par présente en ligne</p>

      <ListProjetShortcut/>

    </div>
</template>

<script>
  import ListProjetShortcut from '../components/ListProjetShortcut.vue';

  export default {
    name: 'Projet',
    components: {
      ListProjetShortcut
    },

    beforeMount() {
      this.$store.dispatch("loadProject");
    }

  }
</script>

<style scoped lang="scss">

.consigne {
  font-size: 12px;
}

</style>