<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    isMobileMenuOpen.value = false
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <button @click="scrollToTop" class="nav-logo">
        <span class="logo-text">EB</span>
      </button>

      <button
        class="mobile-menu-btn"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        aria-label="Toggle menu"
      >
        <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <ul class="nav-links" :class="{ active: isMobileMenuOpen }">
        <li><button @click="scrollToTop" class="nav-link">Home</button></li>
        <li><button @click="scrollToSection('skills')" class="nav-link">Skills</button></li>
        <li><button @click="scrollToSection('projects')" class="nav-link">Projects</button></li>
        <li><button @click="scrollToSection('contact')" class="nav-link nav-link-cta">Contact</button></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.navbar.scrolled {
  background: rgba(15, 23, 42, 0.95);
  border-bottom-color: rgba(59, 130, 246, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  transition: transform 0.3s ease;
}

.nav-logo:hover {
  transform: scale(1.1);
}

.logo-text {
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 2px solid #3b82f6;
  border-radius: 8px;
  background: rgba(59, 130, 246, 0.1);
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: #f8fafc;
  cursor: pointer;
  padding: 0.5rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-link {
  color: #cbd5e1;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  padding: 0.5rem 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #f8fafc;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link-cta {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
}

.nav-link-cta::after {
  display: none;
}

.nav-link-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(15, 23, 42, 0.98);
    padding: 2rem;
    gap: 1.5rem;
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
    border-bottom: 1px solid rgba(59, 130, 246, 0.2);
  }

  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  .nav-link-cta {
    width: 100%;
    text-align: center;
  }
}
</style>
