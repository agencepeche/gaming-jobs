<template>
  <div id="nav">
    <div>
      <span class="logo"><img src="@/assets/logo.png" alt=""></span>
      <ul class="content">
        <li><router-link to="/">Job board</router-link></li>
        <li><router-link to="/">Entreprises</router-link></li>
        <li><router-link to="/">Métiers</router-link></li>
        <li><router-link to="/">Blog</router-link></li>
        <li><router-link to="/" class="btn-second">Se connecter</router-link></li>
        <li><router-link to="/" class="btn-primary">S'inscrire</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script src="./Navbar.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Navbar.scss"></style>
