<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-logo">
          <h1>LuxCruises</h1>
        </div>
      </div>
      <div class="footer-bottom">
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .footer-logo img {
    max-width: 50px;
  }
  
  .footer-links a {
    color: #fff;
    margin-right: 20px;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .footer-links a:hover {
    color: #f8f8f8;
  }
  
  .footer-social a {
    color: #fff;
    margin-right: 10px;
    text-decoration: none;
    font-size: 1.2rem;
  }
  
  .footer-bottom {
    text-align: center;
    margin-top: 20px;
  }
  
  .footer-bottom p {
    margin: 0;
    font-size: 0.8rem;
  }
  </style>
  
<script>
export default {
    name : 'FooterComponent'
}
</script>