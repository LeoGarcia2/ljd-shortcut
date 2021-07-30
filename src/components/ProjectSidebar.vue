<template>
    <div class="container-projectsidebar column">

        <p v-for="project in projects" :key="project.projectName">
          <strong>{{ project.payload.projectName }}</strong>
        </p>

    </div>
</template>

<script>
export default {
  name: 'ProjectSidebar',
  props: [ "projects" ],
}
</script>

<style scoped lang="scss">

.container-projectsidebar {
  // justify-content: space-arounds;
  border: 1px solid black;
}

</style>