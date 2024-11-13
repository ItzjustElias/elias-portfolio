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

      <div id="about-me" class="right-column">
        <img src="../assets/profile-image.jpg" alt="Test Profile Picture">
        <h1 class="big-text">About Me</h1>
        <p class="description"> Hello! I'm Elias Bloem, a passionate artist and developer with a strong interest in design, programming, and teamwork.
          Currently, I'm studying IT at Hogent in Ghent, and I'm always eager to expand my skills and work on creative projects.</p>
      </div>

      <!-- Divider -->
      <div class="divider"></div>

      <!-- Skills Section with Icons -->
      <div id="skills" class="section">
        <h2 class="big-text">My Skills</h2>
        <div class="skills-icons">
          <img src="https://github-readme-stats.vercel.app/api/top-langs?username=itzjustelias&show_icons=true&theme=radical&locale=en&layout=compact">
          <img src="https://skillicons.dev/icons?i=bash,blender,deno,eclipse,github,gradle,idea,java,nodejs,kali,py,ts,unreal,vscode&perline=5">
        </div>
      </div>

      <!-- Divider -->
      <div class="divider"></div>

      <!-- Projects Section -->
      <div id="projects" class="section">
        <h2 class="big-text">Projects</h2>
        <p class="description">Explore some of my work in web development, including personal projects and open-source contributions. Feel free to check out my GitHub for more details.</p>
      </div>

      <!-- Divider -->
      <div class="divider"></div>

      <!-- Timeline Section -->
      <div id="timeline" class="timeline-section">
        <h2 class="big-text">My Journey</h2>
        <div class="timeline">
          <div class="timeline-line"></div> <!-- Vertical purple line -->
          <div class="timeline-items">
            <div class="timeline-item" v-for="event in events" :key="event.date">
              <div class="timeline-content">
                <h3 class="timeline-title">{{ event.title }}</h3>
                <p>{{ event.description }}</p>
                <div class="timeline-date">{{ event.date }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "EliasHome",
  data() {
    return {
      events: [
        { date: "2020", title: "Started My IT Journey", description: "Began studying IT at Hogent in Ghent." },
        { date: "2021", title: "First Internship", description: "Completed an internship at XYZ Corp, working on front-end development." },
        { date: "2022", title: "Personal Projects", description: "Built personal projects and contributed to open-source." },
        { date: "2023", title: "Specialized in Vue.js", description: "Focused on Vue.js for creating dynamic, modern web applications." },
      ],
    };
  },
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

/* Skills Section Styles */
.skills-icons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.skillicon {
  font-size: 3rem;
  color: #887BAF;
}

/* Timeline Section Styles */
.timeline-section {
  padding: 2rem;
}

.timeline {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: #887BAF; /* Purple vertical line */
  z-index: 1;
}

.timeline-items {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 30px; /* To keep some space between line and items */
  z-index: 2;
}

.timeline-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;
}

.timeline-content {
  background-color: #f5f5f5;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  position: relative;
  z-index: 2;
}

.timeline-title {
  color: #313131;
  font-size: 1.25rem;
}

.timeline-date {
  font-weight: bold;
  color: #887BAF;
  margin-top: 1rem;
  text-align: right;
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

  .timeline {
    flex-direction: column;
  }

  .timeline-line {
    left: 50%;
    transform: translateX(-50%);
  }

  .timeline-item {
    align-items: center;
  }

  .timeline-date {
    margin-bottom: 0.5rem;
  }

  .timeline-content {
    max-width: 100%;
  }
}
</style>
