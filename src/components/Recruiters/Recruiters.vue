<template>
  <div id="recruiters">
    <p>Ils recrutent</p>
    <div class="cards">
      <router-link to="/" class="card">
        <span>Lorem ipsum dolor</span>
        <span>Catégorie</span>
      </router-link>
      <router-link to="/" class="card">
        <span>Lorem ipsum dolor</span>
        <span>Catégorie</span>
      </router-link>
      <router-link to="/" class="card">
        <span>Lorem ipsum dolor</span>
        <span>Catégorie</span>
      </router-link>
    </div>
    <router-link to="/" class="btn-primary">
      <img src="@/assets/plus-symbol.png" alt="" class="icon">
      Découvrir plus d'entreprises
    </router-link>
  </div>
</template>

<script src="./Recruiters.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Recruiters.scss"></style>
