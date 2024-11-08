<template>
    <header class="navbar" :class="{ 'scrolled': isScrolled }">
      <div class="container">
        <!-- Logo -->
        <router-link to="/" class="logo">Elias Bloem</router-link>
  
        <!-- Desktop Links -->
        <nav class="nav-links" v-if="!isMobileMenuOpen">
          <router-link v-for="link in links" :key="link.name" :to="link.path" class="nav-item">
            {{ link.name }}
          </router-link>
        </nav>
  
        <!-- Hamburger Menu Icon for Mobile -->
        <button class="hamburger" @click="toggleMobileMenu" v-if="isMobile">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
  
        <!-- Mobile Menu Links -->
        <div v-if="isMobileMenuOpen" class="mobile-menu">
          <router-link v-for="link in links" :key="link.name" :to="link.path" class="mobile-nav-item" @click="toggleMobileMenu">
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isScrolled: false,
        isMobileMenuOpen: false,
        links: [
          { name: 'About', path: '/about' },
          { name: 'Projects', path: '/projects' },
          { name: 'Skills', path: '/skills' },
          { name: 'Blog', path: '/blog' },
          { name: 'Contact', path: '/contact' },
        ],
      };
    },
    computed: {
      isMobile() {
        return window.innerWidth <= 768;
      },
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.handleResize);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      handleScroll() {
        this.isScrolled = window.scrollY > 0;
      },
      handleResize() {
        if (window.innerWidth > 768) {
          this.isMobileMenuOpen = false;
        }
      },
      toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Navbar Styles */
  .navbar {
    position: sticky;
    top: 0;
    width: 100%;
    background-color: rgb(0, 1, 37);
    padding: 1rem 0;
    z-index: 50;
    transition: border-bottom 0.3s ease, box-shadow 0.3s ease;
  }
  
  .navbar.scrolled {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.8);
    border-bottom: 1px solid #e0d9f7;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
  }
  
  .logo {
    font-weight: 600;
    font-size: 1.5rem;
    text-decoration: none;
    color: #e0d9f7;
  }
  
  /* Desktop Links */
  .nav-links {
    display: flex;
    gap: 1rem;
  }
  
  .nav-item {
    text-decoration: none;
    padding: 0.5rem 1rem;
    color: #e0d9f7;
    border-radius: 0.5rem;
    transition: background-color 0.3s ease;
  }
  
  .nav-item:hover {
    background-color: #31313183;
  }
  
  /* Hamburger Menu Icon */
  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
  }
  
  .hamburger .bar {
    width: 24px;
    height: 2px;
    background-color: #e0d9f7;
    transition: transform 0.3s ease;
  }
  
  /* Mobile Menu */
  .mobile-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: rgb(0, 1, 37);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.8);
  }
  
  .mobile-nav-item {
    text-decoration: none;
    color: #e0d9f7;
    padding: 0.5rem 0;
    width: 100%;
    text-align: center;
    transition: background-color 0.3s ease;
  }
  
  .mobile-nav-item:hover {
    background-color: #31313183;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .nav-links {
      display: none; /* Hide desktop links on mobile */
    }
  
    .hamburger {
      display: flex; /* Show hamburger icon on mobile */
    }
  }
  </style>
  