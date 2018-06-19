<template>
  <div id="subnav">
    <ul>
      <li>
        <a href="#"><img src="@/assets/social/facebook.png" alt=""></a>
      </li>
      <li>
        <a href="#"><img src="@/assets/social/twitter.png" alt=""></a>
      </li>
      <li>
        <a href="#"><img src="@/assets/social/linkedin.png" alt=""></a>
      </li>
      <li class="language">
        <select name="" id="">
          <option value="fr" selected>Fr</option>
          <option value="en">En</option>
        </select>
      </li>
      <li>
        <router-link to="/">Espace recruteurs</router-link>
      </li>
    </ul>
  </div>
</template>

<script src="./Subnav.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Subnav.scss"></style>
