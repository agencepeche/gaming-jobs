<template>
  <div id="articles">
    <p>Les derniers articles</p>
    <div class="cards">
      <router-link to="/" class="card">
        <img src="@/assets/research.jpg" alt="">
        <div class="content">
          <span class="category">Catégorie</span>
          <span class="title">Lorem ipsum dolor</span>
          <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
          <div>
            <span class="date">18 juin 2018</span>
            <img src="@/assets/right-arrow.png" alt="">
          </div>
        </div>
      </router-link>
      <router-link to="/" class="card">
        <img src="@/assets/research.jpg" alt="">
        <div class="content">
          <span class="category">Catégorie</span>
          <span class="title">Lorem ipsum dolor</span>
          <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
          <div>
            <span class="date">18 juin 2018</span>
            <img src="@/assets/right-arrow.png" alt="">
          </div>
        </div>
      </router-link>
      <router-link to="/" class="card">
        <img src="@/assets/research.jpg" alt="">
        <div class="content">
          <span class="category">Catégorie</span>
          <span class="title">Lorem ipsum dolor</span>
          <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
          <div>
            <span class="date">18 juin 2018</span>
            <img src="@/assets/right-arrow.png" alt="">
          </div>
        </div>
      </router-link>
    </div>
    <router-link to="/" class="btn-primary">Voir plus d'articles</router-link>
  </div>
</template>

<script src="./Articles.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Articles.scss"></style>
