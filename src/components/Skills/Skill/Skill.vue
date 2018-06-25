<template>
  <div class="skill" v-if="number === 1">
    <img src="@/assets/inscription/1.png" alt="">
    <span>Développeurs, Intégrateurs & Data scientists</span>
  </div>
  <div class="skill" v-else-if="number === 2">
    <img src="@/assets/inscription/2.png" alt="">
    <span>Motion Designers & Réalisateurs</span>
  </div>
  <div class="skill" v-else-if="number === 3">
    <img src="@/assets/inscription/3.png" alt="">
    <span>Rédacteurs, Traducteurs, Community Managers…</span>
  </div>
  <div class="skill" v-else-if="number === 4">
    <img src="@/assets/inscription/4.png" alt="">
    <span>Graphistes, Designers, Photographes…</span>
  </div>
  <div class="skill" v-else-if="number === 5">
    <img src="@/assets/inscription/5.png" alt="">
    <span>Chefs de Projet & Coachs Agile</span>
  </div>
  <div class="skill" v-else-if="number === 6">
    <img src="@/assets/inscription/6.png" alt="">
    <span>Consultants en Stratégie, Progiciel, Communication…</span>
  </div>
  <div class="skill" v-else-if="number === 7">
    <img src="@/assets/inscription/7.png" alt="">
    <span>Administrateurs Systèmes & DBA</span>
  </div>
  <div class="skill" v-else-if="number === 8">
    <img src="@/assets/inscription/8.png" alt="">
    <span>Consultants Webmarketing, Marketing & Analytics</span>
  </div>
</template>

<script src="./Skill.js"></script>
