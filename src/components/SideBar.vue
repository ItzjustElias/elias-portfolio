<template>
  <header class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <!-- Logo -->
      <router-link to="/" class="logo">Elias Bloem</router-link>

      <!-- Links for All Screens -->
      <nav class="nav-links">
        <router-link v-for="link in links" :key="link.name" :to="link.path" class="nav-item">
          {{ link.name }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
      links: [
        { name: 'About', path: '#about-me' },
        { name: 'Projects', path: '#projects' },
        { name: 'Skills', path: '#skills' },
      ],
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
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
  float: right;
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

/* Responsive Design */
@media (max-width: 768px) {
  .logo {
    font-size: 1.2rem; /* Smaller font size for logo */
  }
  .nav-item {
    font-size: 0.9rem; /* Smaller font size for nav links */
    padding: 0.4rem 0.8rem; /* Adjust padding */
  }
}
</style>
