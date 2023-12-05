<template>
    <h1>
        {{ destinationList[destinationsId].destination }} 
    </h1>
    <div>
        <div class="container">
            <div class="hero-image">
                <!-- <img :src="destinationList[destinationsId].image2" alt="" class="lux-boat-image"> -->
                <img class="lux-boat-image" src='../../public/images/mediterranean2.jpeg' alt="Card Image" v-if="destinationsId==0">
                <img class="lux-boat-image" src='../../public/images/carribbean2.jpeg' alt="Card Image" v-if="destinationsId==1">
                <img class="lux-boat-image" src='../../public/images/eastcoast2.webp' alt="Card Image" v-if="destinationsId==2">
                <img class="lux-boat-image" src='../../public/images/westcoast2.jpeg' alt="Card Image" v-if="destinationsId==3">
                <img class="lux-boat-image" src='../../public/images/transatlantic2.webp' alt="Card Image" v-if="destinationsId==4">
                <img class="lux-boat-image" src='../../public/images/transpacific2.jpeg' alt="Card Image" v-if="destinationsId==5">
            </div>
            <div class="hero-text">
                <h1>
                    The most luxury cruises to match your taste and freedom in 6 destinations
                </h1>
                <p>
                     {{ destinationList[destinationsId].description }}
                </p>
            </div>
        </div>
        <div class="details-container">
            <div class="dates">
            <h2><b>Dates : </b></h2> 
                {{ destinationList[destinationsId].dates }}
            </div>
            <div class="iterinary">
                <h2 style="text-align: center;"><b>Iterinary : </b></h2> 
                <ul>
                    <li v-for="(element, index) in destinationList[destinationsId].iterinary" :key="index">
                        {{ element }}
                    </li>
                </ul>
            </div>
            <div class="pricing">
                <h2><b>Price : </b></h2> 
                {{ destinationList[destinationsId].price }}
            </div>
        </div>
    </div>
</template>

<script>
export default
{
 name : 'DestinationDefault',
 props : ['destinationsId','destinationList'],
}
</script>

<style scoped>
    body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.hero-image{
    width: 500px;
    padding: 20px;
}
.hero-text{
    padding: 20px;
    border-radius: 10px;
    background-color: #eef0f2;
    margin: 10px;
}
.lux-boat-image{
    width: 100%;
    border-radius: 10px;
}

@media screen and (max-width: 600px) {
  .container {
    grid-template-columns: 1fr;
    align-items: center;
  }
  .hero-image{
    width: 300px;
    padding: 10px;
    margin: 25px;
}
.hero-text{
    padding: 10px;
    width: 300px;
    margin: 25px;
}
.lux-boat-image{
    border-radius: 10px;
    width: 300px;
}
}

.details-container {
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1.5fr;
  gap: 20px;
  padding: 20px;
}

.dates,
.iterinary,
.pricing {
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #eef0f2;
}
.iterinary{
    text-align: left;
}

/* Add media queries for responsiveness */
@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  .details-container {
    display: grid;
    grid-template-columns: 1.5fr;
    gap: 20px;
    padding: 20px;
}
  .destination-hero-image,
  .destination-hero-text {
    flex: none;
    width: 100%;
    margin: 10px;
  }
}


</style>