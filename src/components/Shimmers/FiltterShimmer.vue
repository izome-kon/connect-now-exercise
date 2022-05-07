<template>
  <div class="card">
    <div class="card-header">
      <h3>
        <blockShimmer class="card-image" height="20px" width="70%" />
      </h3>
    </div>
    <div class="card-body">
      <blockShimmer style="margin-top: 8px;" class="card-image" height="15px" width="25%" />
      <blockShimmer style="margin-top: 8px;" class="card-image" height="45px" width="100%" />

      <blockShimmer style="margin-top: 30px;" class="card-image" height="15px" width="25%" />
      <blockShimmer style="margin-top: 8px;" class="card-image" height="45px" width="100%" />

      <blockShimmer style="margin-top: 30px;" class="card-image" height="15px" width="25%" />
      <blockShimmer style="margin-top: 8px;" class="card-image" height="45px" width="100%" />
    </div>
  </div>
</template>

<script>
import {
  blockShimmer,
} from 'vue-shimmer'
export default {
  name: "FiltterShimmer",
  components: {
    'blockShimmer': blockShimmer,
  },
}
</script>

<style>
</style>