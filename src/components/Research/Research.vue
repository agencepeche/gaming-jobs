<template>
  <div id="research">
    <div class="presentation">
      <p>Gaming Jobs</p>
      <p>Emplois dans le jeu vidéo et l’e Sport</p>
    </div>
    <form action="">
      <div>
        <input type="text" name="" value="" placeholder="Poste, mots clés, entreprise..." />
        <div class="select">
          <select class="" name="" placeholder="Localisation">
            <option value="" selected>Toutes les localisations</option>
            <option value="">Bordeaux</option>
            <option value="">Le Mans</option>
            <option value="">Marseille</option>
            <option value="">Nantes</option>
            <option value="">Paris</option>
          </select>
        </div>
        <div class="select">
          <select class="" name="">
            <option value="" selected>Tous les types de poste</option>
            <option value="">Développeurs, Intégrateurs & Data scientists</option>
            <option value="">Motion Designers & Réalisateurs</option>
            <option value="">Rédacteurs, Traducteurs, Community Managers…</option>
            <option value="">Graphistes, Designers, Photographes…</option>
            <option value="">Chefs de Projet & Coachs Agile</option>
            <option value="">Consultants en Stratégie, Progiciel, Communication…</option>
            <option value="">Administrateurs Systèmes & DBA</option>
            <option value="">Consultants Webmarketing, Marketing & Analytics</option>
          </select>
        </div>
      </div>
      <div class="submit">
        <div></div>
        <div>
          <button type="submit" name="button" class="btn-primary">
            <img src="@/assets/search.png" alt="" class="icon">
            Valider
          </button>
        </div>
        <div>
          <button type="button" class="more">
            Plus de critères
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script src="./Research.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Research.scss"></style>
