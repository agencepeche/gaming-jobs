<template>
  <div id="modal-inscription" ref="modalInscription">
    <div class="modal">
      <form class="modal-content" @submit.prevent="checkForm">
        <p>Inscrivez vous</p>
        <p class="error" v-if="errors.length">
          <b>Merci de corriger la (les) erreur(s) suivant(es)</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </p>
        <div class="row">
          <button type="button" class="btn-fourth" name="button">Continuer avec Linkedin</button>
          <button type="button" class="btn-fourth" name="button">Continuer avec Google</button>
        </div>
        <input type="text" id="name" name="name" value="" placeholder="Nom" v-model="name">
        <input type="text" id="firstname" name="firstname" value="" placeholder="Prénom" v-model="firstname">
        <input type="email" id="mail" name="mail" value="" placeholder="Adresse mail" v-model="mail">
        <input type="password" id="password" name="password" value="" placeholder="Mot de passe" v-model="password">
        <button @click.prevent="checkForm" type="submit" name="button" class="btn-primary">Inscription</button>
        <router-link to="/" class="btn-third">J'ai déjà un compte Gaming Jobs</router-link>
        <button type="button" class="btn-third" @click="closeModal">Fermer</button>
      </form>
    </div>
  </div>
</template>

<script src="./ModalInscription.js"></script>
