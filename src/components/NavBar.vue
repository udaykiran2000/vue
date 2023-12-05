<template>
<div class="navbar">
    <div class="navbar-logo">
        <h1>LuxCruises</h1>
    </div>
    <div class="menu">
        <h3 class="menu-item">
            <router-link to="/" @click="HomeToggle" style="color: white; text-decoration: none;">Home</router-link>
        </h3>
    </div>
</div>
  </template>
<style scoped>
.navbar-logo{
  color : white;
}
.router-link{
  color: white;
}
.navbar{
  display: flex;
  justify-content: space-between;
  align-items: center; /* Vertically center the content */
  padding: 10px;
  background-color: #70a288;
}
.menu{
    display: flex;
    gap: 20px;
}
.menu-item{
  color: white;
}

@media screen and (max-width: 600px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    background-color: #023e8a;
  }

}

</style>
  <script>
  export default {
    name: 'NavBarComponent',
    methods : {
    },
    props : ['AboutToggle','HomeToggle']
  };
  </script>
  
