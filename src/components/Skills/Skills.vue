<template>
  <div id="skills">

    <div class="skills">

      <div class="skill" data-card="1" @click="doSomething(1)">
        <div class="validate">
          <img src="@/assets/inscription/check.png" alt="">
        </div>
        <div class="img-container">
          <img src="@/assets/inscription/1.png" alt="">
        </div>
        <p>Développeurs, Intégrateurs & Data scientists</p>
      </div>

      <div class="skill" data-card="2" @click="doSomething(2)">
        <div class="validate">
          <img src="@/assets/inscription/check.png" alt="">
        </div>
        <div class="img-container">
          <img src="@/assets/inscription/2.png" alt="">
        </div>
        <p>Motion Designers & Réalisateurs</p>
      </div>

      <div class="skill" data-card="3" @click="doSomething(3)">
        <div class="validate">
          <img src="@/assets/inscription/check.png" alt="">
        </div>
        <div class="img-container">
          <img src="@/assets/inscription/3.png" alt="">
        </div>
        <p>Rédacteurs, Traducteurs, Community Managers…</p>
      </div>

      <div class="skill" data-card="4" @click="doSomething(4)">
        <div class="validate">
          <img src="@/assets/inscription/check.png" alt="">
        </div>
        <div class="img-container">
          <img src="@/assets/inscription/4.png" alt="">
        </div>
        <p>Graphistes, Designers, Photographes…</p>
      </div>

      <div class="skill" data-card="5" @click="doSomething(5)">
        <div class="validate">
          <img src="@/assets/inscription/check.png" alt="">
        </div>
        <div class="img-container">
          <img src="@/assets/inscription/5.png" alt="">
        </div>
        <p>Chefs de Projet & Coachs Agile</p>
      </div>

      <div class="skill" data-card="6" @click="doSomething(6)">
        <div class="validate">
          <img src="@/assets/inscription/check.png" alt="">
        </div>
        <div class="img-container">
          <img src="@/assets/inscription/6.png" alt="">
        </div>
        <p>Consultants en Stratégie, Progiciel, Communication…</p>
      </div>

      <div class="skill" data-card="7" @click="doSomething(7)">
        <div class="validate">
          <img src="@/assets/inscription/check.png" alt="">
        </div>
        <div class="img-container">
          <img src="@/assets/inscription/7.png" alt="">
        </div>
        <p>Administrateurs Systèmes & DBA</p>
      </div>

      <div class="skill" data-card="8" @click="doSomething(8)">
        <div class="validate">
          <img src="@/assets/inscription/check.png" alt="">
        </div>
        <div class="img-container">
          <img src="@/assets/inscription/8.png" alt="">
        </div>
        <p>Consultants Webmarketing, Marketing & Analytics</p>
      </div>

      <div class="skill">
        <div class="validate">
          <img src="@/assets/inscription/check.png" alt="">
        </div>
        <div class="img-container">
          <img src="@/assets/inscription/9.png" alt="">
        </div>
        <p>Voir plus de catégories</p>
      </div>

    </div>

    <router-link to="/inscription/profil" class="btn-primary">Continuer</router-link>
    <router-link to="/inscription/profil" class="btn-third">Je le ferai plus tard</router-link>

  </div>
</template>

<script src="./Skills.js"></script>
