<template>
  <div class="body row">
    <!-- START FILTER -->
    <div class="col-3 col-md-12 col-lg-12">
      <FiltterShimmer v-if="loading" />
      <div v-else class="card">
        <div class="card-header">
          <h3>Filter Results</h3>
        </div>
        <div class="card-body">
          <CustomFormInput :modelValue="nameValue" @custumChange="logNameChanges" title="Name (contains)"
            placeholder=" Enter name" />
          <div class="row" style="justify-content: space-between;">
            <div class="col-12 col-lg-3 col-md-12">
              <CustomFormInput :modelValue="scoreValue" @custumChange="logScoreChanges" title="Minimum Score"
                placeholder=" 1 - 10" />
            </div>
            <div class="col-12 col-md-12 col-lg-7">
              <div class="form-input pl-lg-45 pl-0">
                <label>
                  Order By
                  <div class="input-group">
                    <button @click="upToDown = !upToDown" class="input-group-text" id="inputGroup-sizing-default">
                      <i @click="upToDown = !upToDown" v-if="!upToDown" class="fa fa-arrow-up"></i>
                      <i @click="upToDown = !upToDown" v-else class="fa fa-arrow-down"></i>
                    </button>
                    <div class="custom-select form-input-select">
                      <select v-model="sort" class="custom-input ">
                        <option>Relase Date</option>
                        <option>Score</option>
                        <option>Name</option>
                      </select>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <div style="text-align: end;align-self: end;" class="form-input col-12 col-md-12 col-lg-2">
              <button @click="clearFilter" class="btn w-sm-100">Clear</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END FILTER -->
    <!-- START:: VIDEO GAMES CARDS -->
    <div class="col-9 ml-3 col-md-12 col-lg-12 mt-md-4">
      <div v-if="loading">
        <VideoGameShimmerCard v-for="index in 5" :key="index" />
      </div>
      <div style="text-align:center" v-else-if="filterdGames.length === 0">
        <img style="max-width: 40%;" src="../assets/search-not-found.svg">
        <h2>Not Found!</h2>
      </div>
      <VideoGameCard v-for="item in filterdGames" :key="item.id" v-else :title="item.name"
        :date="new Date(item.first_release_date).toLocaleDateString('en-GB')"
        :description="item.summary.length > 260 ? item.summary.substring(0, 260) + '...' : item.summary"
        :score="Math.round(item.rating)" />
    </div>
    <!-- END:: VIDEO GAMES CARDS -->
  </div>
</template>
<script>
import VideoGameCard from "../components/VideoGameCard.vue";
import VideoGameShimmerCard from "../components/Shimmers/VideoGameShimmerCard.vue";
import FiltterShimmer from "../components/Shimmers/FiltterShimmer.vue";
import CustomFormInput from "../components/CustomFormInput.vue";
export default {
  name: "VideoGamePage",
  components: {
    VideoGameCard,
    CustomFormInput,
    VideoGameShimmerCard,
    FiltterShimmer
  },
  data: () => {
    return {
      loading: false,
      games: [],
      error: null,
      nameValue: '',
      scoreValue: '',
      sort: 'Relase Date',
      upToDown: false
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      this.error = this.post = null
      this.loading = true
      fetch('https://public.connectnow.org.uk/applicant-test/')
        .then(res => res.json())
        .then(res => {
          this.games = res
          this.loading = false
        })
    },
    logNameChanges(event) {
      this.nameValue = event
    },
    logScoreChanges(event) {
      this.scoreValue = event
    },
    sortBy(list) {
      return list.sort((a, b) => {
        switch (this.sort) {
          case 'Score':
            if (this.upToDown)
              return a.rating > b.rating ? 1 : -1
            else
              return a.rating < b.rating ? 1 : -1
          case 'Relase Date':
            if (this.upToDown)
              return a.first_release_date > b.first_release_date ? 1 : -1
            else
              return a.first_release_date < b.first_release_date ? 1 : -1
          case 'Name':
            if (this.upToDown)
              return a.name > b.name ? 1 : -1
            else
              return a.name < b.name ? 1 : -1
          default:
            return 1
        }

      })
    },
    clearFilter() {
      this.nameValue = ''
      this.scoreValue = ''
      this.sort = 'Relase Date'
      this.upToDown = false
    }
  },
  computed: {
    filterdGames() {
      let filteredData = this.games
      if (this.nameValue !== '')
        filteredData = filteredData.filter((game) => {
          return game.name.toLowerCase().match(this.nameValue.toLowerCase())
        })
      if (this.scoreValue !== '')
        filteredData = filteredData.filter((game) => {
          return Math.round(game.rating) / 10 >= this.scoreValue
        })
      return this.sortBy(filteredData)
    }
  }
};
</script>