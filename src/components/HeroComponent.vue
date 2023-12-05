<template>
<div class="container">
    <div class="hero-image">
        <img src="../../public/images/Good-things-come-in-small-luxury-cruise-packages.webp" alt="" class="lux-boat-image">
    </div>
    <div class="hero-text">
        <h1>
            The most luxury cruises to match your taste and freedom in 6 destinations
        </h1>
        <h4>
            Indulge in the epitome of luxury with our cruise booking site. Discover carefully curated, opulent cruise options, each a floating masterpiece. 
            Our personalized service ensures your journey is tailored to perfection, from exclusive experiences to lavish accommodations. Sail to extraordinary destinations, relishing gourmet dining and VIP amenities onboard. 
            Your luxury cruise begins here, where every moment is a celebration of refined elegance on the high seas.
        </h4>
    </div>
</div>
    
</template>

<style scoped>
.container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #fefcfb;
}
.hero-image{
    padding: 20px;
}
.hero-text{
    padding: 20px;
}
.lux-boat-image{
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
}
.hero-text{
    padding: 10px;
    width: 300px;
}
.lux-boat-image{
    border-radius: 10px;
    width: 300px;
}
}

</style>


<script>
    export default {
        name : 'HeroComponent',
    };

</script>