<template>
  <div class="confirmation">

    <div class="form">
      <p class="title">Bienvenue {{ firstname }} {{ lastname }},</p>
      <p>
        Accédez dès à présent à toutes les fonctionnalités de Gaming Jobs. Enregistrez les offres d'emploi qui vous intéresse, suivez vos candidatures, complétez votre profil pour que les recruteurs puissent en savoir plus sur vous.
      </p>
    </div>

    <div class="actions">
      <router-link to="/" class="btn-fourth">
        <img src="@/assets/right-arrow.png" alt="" class="icon" style="height:15px;">
        Compléter mon profil
      </router-link>
      <router-link to="/" class="btn-primary">
        <img src="@/assets/right-arrow-white.png" alt="" class="icon">
        Effectuer une recherche
      </router-link>
    </div>

  </div>
</template>

<script src="./Confirmation.js"></script>
