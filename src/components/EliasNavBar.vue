<template>
  <header class="navbar">
    <div class="container">
      <div class="logo">My Portfolio</div>

      <!-- Navigation Links (Desktop) -->
      <nav :class="['nav-links', { 'nav-active': isNavOpen }]">
        <router-link to="/about" class="nav-link" @click="closeNav">About Me</router-link>
        <router-link to="/blog" class="nav-link" @click="closeNav">Blog</router-link>
        <router-link to="/projects" class="nav-link" @click="closeNav">Projects</router-link>
      </nav>

      <!-- Hamburger Icon (Mobile) -->
      <div class="hamburger" @click="toggleNav">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "EliasNavbar",
  data() {
    return {
      isNavOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    closeNav() {
      this.isNavOpen = false;
    },
  },
};
</script>

<style scoped>
/* General Navbar Styles */
.navbar {
  margin: 3px;
  background-color: rgb(0, 1, 37);
  padding: 1rem 2rem;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.353);
  margin-bottom: 2rem; /* Adds margin between navbar and content */
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative; /* To position hamburger icon on the right */
}

.logo {
  color: #887BAF;
  font-size: 1.5rem;
  font-weight: bold;
}

/* Desktop Navigation Links */
.nav-links {
  display: flex;
  gap: 1.5rem;
}

/* Individual nav-link styles */
.nav-link {
  color: #887BAF;
  font-size: 1rem;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: bold;
  border-radius: 12px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #00000017;
}

/* Mobile Navigation Links */
@media (max-width: 768px) {
  .nav-links {
    display: none; /* Hide links on mobile by default */
  }

  .nav-active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgb(0, 1, 37);
    padding: 1rem 0;
    border-radius: 0 0 12px 12px;
    gap: 1rem;
    align-items: center;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    gap: 4px;
    cursor: pointer;
    z-index: 10; /* Make sure the hamburger is on top of other elements */
  }

  .hamburger span {
    width: 24px;
    height: 3px;
    background-color: #ffffff;
    border-radius: 2px;
  }
}

/* Hide the hamburger icon on desktop */
@media (min-width: 769px) {
  .hamburger {
    display: none;
  }
}
</style>
