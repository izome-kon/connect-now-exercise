<template>
  <div class="row p-8 mb-20 p-md-0 game-card">
    <div style="position: relative;" class="col-2 col-md-12">
      <blockShimmer class="card-image" height="100%" width="100%"
        style="padding:8px;background: var(--card-background);" />
      <div class="score-shimmer-md ">
        <circleShimmer size="50px" />
      </div>
    </div>
    <div class="description-card col-10 card col-md-12">
      <div class="game-description">
        <h2 class="game-title">
          <blockShimmer class="card-image" height="20px" width="50%" style="background: var(--card-background);" />
        </h2>
        <small class="game-date">
          <blockShimmer class="card-image" height="10px" width="25%"
            style="margin-top: 8px;background: var(--card-background);" />
        </small>
        <p class="">
          <sentencesShimmer :lines="numLines" />
        </p>
      </div>
      <div class="score-shimmer">
        <circleShimmer size="50px" />
      </div>
    </div>
  </div>
</template>

<script>
import {
  blockShimmer,
  circleShimmer,
  sentencesShimmer,
} from 'vue-shimmer'
export default {
  name: "VideoGameShimmerCard",
  data: () => {
    return {
      numLines: 5
    }
  },
  components: {
    'blockShimmer': blockShimmer,
    'circleShimmer': circleShimmer,
    'sentencesShimmer': sentencesShimmer,
  },
  props: [],
};
</script>