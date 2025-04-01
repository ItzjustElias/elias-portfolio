<script setup lang="ts">
import { ref } from 'vue'
import Footer from './components/Footer.vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="navbar">
    <div class="nav-brand">
      <router-link to="/">Portfolio</router-link>
    </div>
    
    <button class="menu-toggle" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class="nav-links" :class="{ 'active': isMenuOpen }">
      <router-link to="/" @click="isMenuOpen = false">Home</router-link>
      <router-link to="/projects" @click="isMenuOpen = false">Projects</router-link>
      <router-link to="/contact" @click="isMenuOpen = false">Contact</router-link>
      <router-link to="/dashboard" @click="isMenuOpen = false">Dashboard</router-link>
      <a href="https://github.com/yourusername" target="_blank" class="github-link">
        <svg height="24" width="24" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
        GitHub
      </a>
    </div>
  </nav>

  <main>
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>

  <Footer />
</template>

<style>
.navbar {
  background-color: #1a1a1a;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-brand a {
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-links a {
  color: #ffffff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #646cff;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-links a:hover::after {
  width: 100%;
}

.github-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.menu-toggle span {
  display: block;
  width: 25px;
  height: 2px;
  background-color: #ffffff;
  transition: 0.3s;
}

main {
  margin-top: 80px;
  padding: 2rem;
  min-height: calc(100vh - 80px - 100px); /* Adjusted for footer */
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #1a1a1a;
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links a {
    padding: 1rem;
    text-align: center;
    width: 100%;
  }

  .nav-links a::after {
    display: none;
  }
}
</style>