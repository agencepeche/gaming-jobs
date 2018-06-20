<template>
  <div id="interviews">
    <p>Les dernières interviews</p>
    <div class="cards">
      <router-link to="/" class="card">
        <span>Xian Xi</span>
        <span>Game Designer chez Konami</span>
      </router-link>
      <router-link to="/" class="card">
        <span>Dupont Jean</span>
        <span>UX Designer chez UBISOFT</span>
      </router-link>
      <router-link to="/" class="card">
        <span>Elise Lucet</span>
        <span>Game Designer chez Konami</span>
      </router-link>
    </div>
    <router-link to="/" class="btn-primary">Découvrir plus d'interviews</router-link>
  </div>
</template>

<script src="./Interviews.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Interviews.scss"></style>
