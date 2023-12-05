<template>
  <NavBar
  :AboutToggle = "openAbout"
  :HomeToggle = "openHome"
  />
  <HelloWorld
  v-if="inHomeView"
  />
  <HeroComponent
  v-if="inHomeView"
  />
  <JourneysCards
  v-if="inHomeView"
  :destinationList = destinationsList
  :openDestinationView = "openDestination"
  :carribeantwo = carribean2

  />
  <ReviewsComponent
  v-if="inHomeView"
  />
  
  <DestinationDetails
    v-if="destinationChoosen"
    :destinationsId = destinationId-1
    :destinationList = destinationsList
  />

  <FooterComponent
  v-if="inHomeView"
  />
  <router-view></router-view>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavBar.vue";
import HeroComponent from "./components/HeroComponent.vue";
import JourneysCards from "./components/JourneysCards.vue";
import ReviewsComponent from "./components/ReviewsComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import DestinationDetails from "./components/DestinationDetails.vue";
import carribean2 from '../public/images/carribean2.jpg'


export default {
  data (){
    return {
      inHomeView :true,
      destinationsList : [],
      destinationChoosen : false,
      showCardCarousel : true,
      destinationId : null,
      carribean2image : carribean2,
      data : null
    }
  },

  name: "App",
  components: {
    HelloWorld,
    NavBar,
    HeroComponent,
    JourneysCards,
    ReviewsComponent,
    FooterComponent,
    DestinationDetails
},
mounted() {
  fetch('https://node-5qmo.onrender.com/api')
        .then(response => response.json())
        .then(data => {
          this.destinationsList = data;
        })
        .catch(error => console.error('Error fetching JSON data:', error));
  },
methods:{
  openAbout(){
  this.inHomeView =false;
  this.destinationChoosen = false;
  },
  openHome(){
  this.inHomeView = true;
  this.destinationChoosen = false;
  },
  openDestination(id){
    this.inHomeView =false;
    this.destinationChoosen = true;
    this.destinationId = id
  },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  font-family: 'Libre Baskerville', serif;
}
</style>
