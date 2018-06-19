<template>

  <div id="jobs">
    <p>Les dernières fiches métiers</p>

    <div class="cards">
      <router-link to="/" class="card card-left">
        <span>Catégorie</span>
        <span>Lorem ipsum dolor</span>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</span>
      </router-link>
      <div class="job-right">
        <router-link to="/" class="card card-right">
          <span>Catégorie</span>
          <span>Lorem ipsum dolor</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</span>
        </router-link>
        <router-link to="/" class="card card-right">
          <span>Catégorie</span>
          <span>Lorem ipsum dolor</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</span>
        </router-link>
      </div>
    </div>

  </div>

</template>

<script src="./Jobs.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Jobs.scss"></style>
