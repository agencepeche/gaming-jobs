<template>
  <div class="profile">

    <div class="form">
      <p class="title">Vos domaines d’expertises</p>
      <div class="choices">
        <div class="skill">
          <img src="@/assets/inscription/1.png" alt="">
          <span>Chefs de Projet & Coachs Agile</span>
        </div>
        <div class="skill">
          <img src="@/assets/inscription/1.png" alt="">
          <span>Chefs de Projet & Coachs Agile</span>
        </div>
      </div>
    </div>

    <div class="form">
      <p class="title">Votre niveau d’expérience</p>
      <div class="choices profile-experiences">
        <div class="choice first active" data-choice="1" @click="doSomething('experiences',1)">
          <span>0-2 ans</span>
        </div>
        <div class="choice" data-choice="2" @click="doSomething('experiences',2)">
          <span>2-5 ans</span>
        </div>
        <div class="choice" data-choice="3" @click="doSomething('experiences',3)">
          <span>5-8 ans</span>
        </div>
        <div class="choice last" data-choice="4" @click="doSomething('experiences',4)">
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
        <div class="choice first active" data-choice="1" @click="doSomething('skills',1)">
          <span>0-2 ans</span>
        </div>
        <div class="choice" data-choice="2" @click="doSomething('skills',2)">
          <span>2-5 ans</span>
        </div>
        <div class="choice" data-choice="3" @click="doSomething('skills',3)">
          <span>5-8 ans</span>
        </div>
        <div class="choice last" data-choice="4" @click="doSomething('skills',4)">
          <span>8 ans et +</span>
        </div>
      </div>
    </div>

    <div class="actions">
      <router-link to="/inscription" class="btn-fourth">Retour</router-link>
      <button type="button" name="button" class="btn-primary">Terminer</button>
    </div>

    <router-link to="/inscription/profil" class="btn-third">Je le ferai plus tard</router-link>

  </div>
</template>

<script src="./Profile.js"></script>
