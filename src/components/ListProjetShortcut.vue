<template>
    <div class="listprojetshortcut row">

      <div class="container-aside">
        <ProjectSidebar
        :projects="getProjects"
        />
      </div>

      <div class="column container-main">
        <div>
          <ProjetShortcut
              v-for="project in getProjects" :key="project.projectName"

              :projectName="project.payload.projectName"

              :localUrl="project.payload.local.url"
              :localLogin="project.payload.local.login"
              :localPassword="project.payload.local.password"

              :devUrl="project.payload.dev.url"
              :devLogin="project.payload.dev.login"
              :devPassword="project.payload.dev.password"

              :preprodUrl="project.payload.preprod.url"
              :preprodLogin="project.payload.preprod.login"
              :preprodPassword="project.payload.preprod.password"

              :prodUrl="project.payload.prod.url"
              :prodLogin="project.payload.prod.login"
              :prodPassword="project.payload.prod.password"

          />
        </div>
          <div class="row container-add">
            <input v-model="newProjectName" type="text" placeholder="Project name">
            <button @click="createNewProject" class="btn-add">Ajouter Un Projet</button>
          </div>
      </div>

    </div>
</template>

<script>
  import ProjetShortcut from '@/components/ProjetShortcut.vue';
  import ProjectSidebar from '@/components/ProjectSidebar.vue';

  export default {
    name: 'ListProjetShortcut',
    components: {
      ProjetShortcut,
      ProjectSidebar,
    },
    data() {
      return {
        // projects: this.$store.state.project,
        newProjectName: "",
      }
    },
    
    computed: {
      getProjects() {
        return this.$store.state.projects;
      }
    },


    methods: {

      createNewProject() {
        let name = this.newProjectName;
        if( name !== "") {
            this.$store.dispatch(
              "createNewProject",
                {
                projectName: name,
                local:{
                  url: "",
                  login: "",
                  password: "",
                },
                dev: {
                  url: "",
                  login: "",
                  password: "",
                },
                preprod:{
                  url: "",
                  login: "",
                  password: "",
                },
                prod: {
                  url: "",
                  login: "",
                  password: "",
                }
              },
            );
          }
          // this.projects = this.$store.state.project;
          this.newProjectName = "";
        }

      },
  }
</script>

<style scoped lang="scss">

  .listprojetshortcut {
    min-width: 100%;
  }

  .container-main {
    min-width:85%;
  }

  .container-aside {
    min-width: 15%;
  }

  .container-add {
    margin: 0 auto;
    width: 250px;
  }

  .input-add {
    width: 100px;
    margin-right:10px;
  }

  .btn-add {
    width: 100px;
    margin-left:10px;
  }

</style>



              