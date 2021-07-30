<template>
  <div id="app">
    <div id="nav">
      <router-link to="/gestion">Gestion</router-link> |
      <router-link to="/crea">Crea</router-link> |
      <router-link to="/inte">Inte</router-link> |
      <router-link to="/dev">Dev</router-link> |
      <router-link to="/seo">Seo</router-link>
      <!-- <router-link to="/projet">Projet</router-link> -->
    </div>
    <router-view/>
    <p>Si votre raccourci favoris n'est pas ici, faite en donc la suggestion <a HREF="mailto:jean@lajungle.fr">ici</a> ou sur Slack en me fournissant l'url et dans quelle section il doit apparaitre</p>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.row {
    display: flex;
    flex-direction: row;
}

.column {
    display: flex;
    flex-direction: column;
}
</style>
