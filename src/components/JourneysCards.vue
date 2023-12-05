<template>
        <h2 class="disc-dest">Discover our Destinations</h2>
        <div class="discover-carousel">
            <div class="card-container"
            v-for="(item, id) in destinationList.slice(0,3)" :key="id"
            >
                <!-- <div style="background-image: url(https://imgur.com/a/rDBogoI);"> -->
                <img class="card-image" src='../../public/images/mediterranean1.jpg' alt="Card Image" v-if="id==0">
                <img class="card-image" src='../../public/images/carribbean1.webp' alt="Card Image" v-if="id==1">
                <img class="card-image" src='../../public/images/eastcoast1.webp' alt="Card Image" v-if="id==2">
                <div class="card-content">
                    <h2 class="card-heading">{{ item.destination }}</h2>
                    <button class="cta-button" @click="openDestinationView(item.id)">
                            Learn More
                    </button>
                </div>
                <!-- </div>  -->
            </div>
        </div> 
        
        <div class="discover-carousel-2">
            <div class="card-container"
            v-for="(item, id) in destinationList.slice(3,6)"
            >
                <img class="card-image" src='../../public/images/westcoast1.jpeg' alt="Card Image" v-if="id==0">
                <img class="card-image" src='../../public/images/transatlantic1.webp' alt="Card Image" v-if="id==1">
                <img class="card-image" src='../../public/images/transpacific1.jpeg' alt="Card Image" v-if="id==2">
                <div class="card-content">
                <h2 class="card-heading">{{ item.destination }}</h2>
                <button class="cta-button" @click="openDestinationView(item.id)">
                            Learn More
                </button>
                </div>
            </div>

    </div>

</template>

<style scoped>
template{
  background-color: #48cae4;
}
.disc-dest{
    justify-content: center;
}

.card-container {
      position: relative;
      width: 400px;
      height: 400px;
      margin: 20px;
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .card-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .card-content {
      position: absolute;
      top: 20px;
      left: 20px;
      right: 20px;
      color: white;
      z-index: 1;
    }
    card-heading {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }

    .cta-button {
      padding: 10px 15px;
      background-color: #3498db;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      transition: background-color 0.3s ease;
      display: inline-block;
    }

    .cta-button:hover {
      background-color: #2980b9;
    }
    .discover-carousel{
        display: flex;
        justify-content: space-between;
        background-color: #fff;

    }
    .discover-carousel-2{
        display: flex;
        justify-content: space-between;
        background-color: #fff;

    }

    @media screen and (max-width: 600px) {
        .discover-carousel{
            display: flex;
            flex-direction: column;
        }
        .discover-carousel-2{
            display: flex;
            flex-direction: column;
        }
        .card-container {
      position: relative;
      width: 300px;
      height: 300px;
      margin: 20px;
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    }

</style>

<script>

export default {
    name : 'journeycards',
    props : ['destinationList' ,'showCards', 'openDestinationView','carribeantwo'],
}
</script>