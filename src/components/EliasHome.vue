<template>
  <section class="page-container">
    <div class="content-container">
      <!-- First Section (Text on the Left) -->
      <div class="left-column">
        <h1 class="big-text">
          Elias Bloem <br> 
          <span class="highlight">Artist, Developer, Team Player, Designer, Student</span>
        </h1>
        <p class="description">Welcome to my personal space. Here you will find my work, skills, and projects. I'm currently studying IT at Hogent in Ghent.</p>
        <a href="https://github.com/your-github" target="_blank" class="btn-github">
          <span class="star">⭐</span> Star my GitHub
        </a>
      </div>

      <div class="divider"></div>

      <div class="right-column">
        <img src="../assets/profile-image.jpg" alt="Test Profile Picture">
        <h1 class="big-text">About Me</h1>
      </div>

      <!-- Divider -->
      <div class="divider"></div>

      <!-- Second Section -->
      <div class="section">
        <h2 class="big-text">My Skills</h2>
        <p class="description">I have experience with front-end and back-end development. Technologies I'm skilled in include HTML, CSS, JavaScript, Node.js, Vue.js, and more.</p>
      </div>

      <!-- Divider -->
      <div class="divider"></div>

      <!-- Third Section -->
      <div class="section">
        <h2 class="big-text">Projects</h2>
        <p class="description">Explore some of my work in web development, including personal projects and open-source contributions. Feel free to check out my GitHub for more details.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EliasHome",
};
</script>

<style scoped>
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  min-height: 100vh;
}

.content-container {
  width: 100%;
  max-width: 1000px;
}

.left-column {
  width: 100%;
  max-width: 50%;
  padding: 3rem;
  text-align: left;
  margin-bottom: 2rem;
}

.right-column {
  width: 100%;
  height: auto;
  padding: 2rem;
  justify-items: center;
  margin-bottom: 2rem;
}

.right-column img {
  width: 30%;
  height: auto;
  border-radius: 50%;
  border: 3px solid #887BAF;
}

.big-text {
  font-size: 3rem;
  font-weight: bold;
  color: #887BAF;
  margin-bottom: 1rem;
}

.highlight {
  color: #e0d9f7;
}

.description {
  font-size: 1.125rem;
  color: #756a6a;
  margin-bottom: 1.5rem;
  font-weight: bold;
}

.btn-github {
  display: inline-flex;
  align-items: center;
  background-color: #887BAF;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-size: 1.125rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.btn-github:hover {
  background-color: #705f9e;
}

.star {
  margin-right: 0.5rem;
}

/* Divider Styles */
.divider {
  border-top: 2px solid #eee;
  margin: 3rem 0;
}

/* Section Styles */
.section {
  text-align: center;
  margin-bottom: 3rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .left-column {
    max-width: 100%;
    text-align: center;
  }

  .big-text {
    font-size: 2.5rem;
  }

  .description {
    font-size: 1rem;
  }

  .btn-github {
    width: 100%;
    font-size: 1rem;
  }
}
</style>
