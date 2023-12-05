<template>
    <h1>
        Reviews
    </h1>
    <div class="reviews-container">
        <div class="review-card">
        <div class="names">
            <img src="../../public/images/Good-things-come-in-small-luxury-cruise-packages.webp" alt="image" class="review-image">
            <h2>
                Emily Klutz
            </h2>
        </div>
        <div class="review">
            <p>
                A voyage with LuxurySeas is like a dream. Impeccable service, stunning views, and attention to detail make it the epitome of luxury travel
            </p>
        </div>
    </div>
    <div class="review-card">
        <div class="names">
            <img src="../../public/images/Good-things-come-in-small-luxury-cruise-packages.webp" alt="image" class="review-image">
            <h2>
                Jonathan Harris
            </h2>
        </div>
        <div class="review">
            <p>
                Sailing with OceanElite was an absolute delight. The ship's elegance, gourmet dining, and top-notch entertainment created a vacation beyond compare.
            </p>
        </div>
    </div>
    <div class="review-card">
        <div class="names">
            <img src="../../public/images/Good-things-come-in-small-luxury-cruise-packages.webp" alt="image" class="review-image">
            <h2>
                Sophia Mills
            </h2>
        </div>
        <div class="review">
            <p>
                CruiseRoyale exceeded expectations. From the welcoming staff to the exquisite destinations, every moment felt like a scene from a luxury travel magazine.
            </p>
        </div>
    </div>
    <div class="review-card">
        <div class="names">
            <img src="../../public/images/Good-things-come-in-small-luxury-cruise-packages.webp" alt="image" class="review-image">
            <h2>
                David Miller
            </h2>
        </div>
        <div class="review">
            <p>
                Sunset Cruises provided an unforgettable experience. The intimate atmosphere, beautiful cabins, and stellar dining made it a perfect romantic getaway.
            </p>
        </div>
    </div>
    </div>
</template>

<style>
.reviews-container{
    display: flex;
    justify-content: space-between;
}
.review-card{
    max-width: 300px; /* Set the maximum width of the review card */
    margin: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.names{
    display: flex;
    align-items: center;
}
.review-image{
    max-width: 80px;
    max-height: 60px;
    border-radius: 30%;
    margin-right: 15px;
}

@media screen and (max-width: 600px) {
    .reviews-container{
    display: flex;
    flex-direction: column;
}
}


</style>




<script>
export default{
    name : 'reviewscomponent'
}
</script>