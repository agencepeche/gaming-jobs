<template>
  <div id="nav" :class="{'scrolled' : isscrolled}">
    <div>
      <router-link to="/" class="logo"><img :src="scrolled" alt=""></router-link>
      <div class="mobile" @click="doSomething">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul class="content">
        <li class="none"><router-link to="/"><img src="@/assets/loupe.svg" alt=""></router-link></li>
        <li><router-link to="/">Job board</router-link></li>
        <li><router-link to="/">Entreprises</router-link></li>
        <li><router-link to="/">Métiers</router-link></li>
        <li><router-link to="/">Blog</router-link></li>
        <li><router-link to="/" class="btn-second">Se connecter</router-link></li>
        <li><button class="btn-primary" @click="openInscriptionModal">S'inscrire</button></li>
      </ul>
    </div>
  </div>
</template>

<script src="./Navbar.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Navbar.scss"></style>
