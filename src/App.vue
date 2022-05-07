<template>
  <div class="row">
    <div class="col-3 col-md-12 col-lg-12">
      <div class="nav-button cursor">
        <h1 :class="{ active: isActive === 'videoGamePage' }" class="special-heading">
          Video
        </h1>
        <h1 v-on:click="onClickVideosPage()">Video Games</h1>
      </div>
    </div>
    <div class="col-3 col-md-12 col-lg-12">
      <div class="nav-button cursor">
        <h1 :class="{ active: isActive === 'contactPage' }" class="special-heading">
          Contact
        </h1>
        <h1 v-on:click="onClickContactPage()">Contact</h1>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
import "../public/styles/all.css"
import "../public/styles/responsive.css"
export default {
  name: "App",
  components: {},
  data() {
    return { isActive: "videoGamePage" };
  },
  mounted() {
    this.isActive;

  },
  methods: {
    onClickVideosPage() {
      this.isActive = "videoGamePage";
      this.$router.push({
        name: "videoGamePage",
      });
    },
    onClickContactPage() {
      this.isActive = "contactPage";
      this.$router.push({
        name: "contactPage",
      });
    },
  },
};
</script>
