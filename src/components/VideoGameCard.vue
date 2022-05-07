<template>
  <div class="row p-8 mb-20 p-md-0 game-card">
    <div style="position: relative; " class="col-2 col-md-12">
      <img class="card-image" src="../assets/blank.png" />
      <div class="score-md">{{ scoreBase }}</div>
    </div>
    <div class="description-card col-10 card col-md-12">
      <div class="game-description">
        <h2 class="game-title">{{ title }}</h2>
        <small class="game-date">Relase Date: {{ date }}</small>
        <p class="">
          {{ description }}
        </p>
      </div>
      <div class="score ">{{ scoreBase }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoGameCard",
  components: {},
  props: ["title", "date", "description", "score"],
  computed: {
    scoreBase() {
      return this.score / 10
    }
  }
};
</script>