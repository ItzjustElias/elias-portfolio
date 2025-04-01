<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Contact</h3>
        <p>Email: elias.bloem@telenet.be</p>
        <p>Location: Oudenaarde, BE</p>
      </div>
      <div class="footer-section">
        <h3>Social</h3>
        <div class="social-links">
          <a href="#" target="_blank">LinkedIn</a>
          <a href="#" target="_blank">GitHub</a>
          <a href="#" target="_blank">Twitter</a>
        </div>
      </div>
      <div class="footer-section">
        <h3>Quick Links</h3>
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/projects">Projects</router-link>
          <router-link to="/contact">Contact</router-link>
        </nav>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} creativity from Elias Bloem</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #0d1117;
  color: #fff;
  padding: 3rem 2rem 1rem;
  margin-top: 4rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.footer-section h3 {
  color: #646cff;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer-section p {
  margin-bottom: 0.5rem;
  color: #888;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.social-links a,
.footer-section nav a {
  color: #888;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-links a:hover,
.footer-section nav a:hover {
  color: #646cff;
}

.footer-section nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-bottom {
  max-width: 1200px;
  margin: 2rem auto 0;
  padding-top: 1rem;
  border-top: 1px solid #333;
  text-align: center;
  color: #666;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .social-links,
  .footer-section nav {
    align-items: center;
  }
}
</style>