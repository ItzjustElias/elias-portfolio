<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <h3 class="footer-logo">Vue Developer</h3>
          <p class="footer-tagline">Building the web, one component at a time.</p>
        </div>

        <div class="footer-links">
          <div class="footer-column">
            <h4 class="footer-title">Quick Links</h4>
            <ul class="link-list">
              <li><a href="#skills" class="footer-link">Skills</a></li>
              <li><a href="#projects" class="footer-link">Projects</a></li>
              <li><a href="#contact" class="footer-link">Contact</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4 class="footer-title">Connect</h4>
            <ul class="link-list">
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" class="footer-link">GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="footer-link">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="footer-link">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">{{ currentYear }} Elias Bloem Portfolio. All rights reserved.</p>
        <p class="built-with">Built with Vue 3, TypeScript & Vite</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #0f172a;
  border-top: 1px solid rgba(59, 130, 246, 0.2);
  padding: 3rem 2rem 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  margin-bottom: 3rem;
}

.footer-brand {
  max-width: 400px;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.75rem;
}

.footer-tagline {
  color: #94a3b8;
  line-height: 1.6;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.footer-column {
  min-width: 0;
}

.footer-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #f8fafc;
  margin-bottom: 1rem;
}

.link-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-link {
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #3b82f6;
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid rgba(59, 130, 246, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright,
.built-with {
  color: #64748b;
  font-size: 0.875rem;
}

.built-with {
  color: #3b82f6;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-links {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>
