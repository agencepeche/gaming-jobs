<template>
  <div class="profile">

    <div class="form">
      <p class="title">Vos domaines d’expertises</p>
      <div class="choices">
        <Skill v-for="item in skills" :key="item.number" :number="item.number" />
      </div>
    </div>

    <div class="form">
      <p class="title">Votre niveau d’expérience</p>
      <div class="choices profile-experiences">
        <div class="choice first" :class="{ 'active': experiences_range === 1 }" data-choice="1" @click="doSomething('experiences',1)">
          <span>0-2 ans</span>
        </div>
        <div class="choice" :class="{ 'active': experiences_range === 2 }" data-choice="2" @click="doSomething('experiences',2)">
          <span>2-5 ans</span>
        </div>
        <div class="choice" :class="{ 'active': experiences_range === 3 }" data-choice="3" @click="doSomething('experiences',3)">
          <span>5-8 ans</span>
        </div>
        <div class="choice last" :class="{ 'active': experiences_range === 4 }" data-choice="4" @click="doSomething('experiences',4)">
          <span>8 ans et +</span>
        </div>
      </div>
    </div>

    <div class="form">
      <p class="title">Vos compétences</p>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        psa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.
      </p>
      <div class="choices profile-skills">
        <div class="choice first" :class="{ 'active': skills_range === 1 }" data-choice="1" @click="doSomething('skills',1)">
          <span>0-2 ans</span>
        </div>
        <div class="choice" :class="{ 'active': skills_range === 2 }" data-choice="2" @click="doSomething('skills',2)">
          <span>2-5 ans</span>
        </div>
        <div class="choice" :class="{ 'active': skills_range === 3 }" data-choice="3" @click="doSomething('skills',3)">
          <span>5-8 ans</span>
        </div>
        <div class="choice last" :class="{ 'active': skills_range === 4 }" data-choice="4" @click="doSomething('skills',4)">
          <span>8 ans et +</span>
        </div>
      </div>
    </div>

    <div class="actions">
      <router-link to="/inscription" class="btn-fourth">
        <img src="@/assets/right-arrow.png" alt="" class="icon" style="transform:rotate(180deg);height:15px;">
        Retour
      </router-link>
      <button type="button" name="button" class="btn-primary" @click.prevent="submitForm">
        <img src="@/assets/checked.png" alt="" class="icon">
        Terminer
      </button>
    </div>

    <router-link to="/" class="btn-third">Je le ferai plus tard</router-link>

  </div>
</template>

<script src="./Profile.js"></script>
