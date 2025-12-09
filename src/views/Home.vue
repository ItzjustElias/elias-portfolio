<script setup lang="ts">
const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 75 },
      { name: "TypeScript", level: 75 },
      { name: "Vuejs", level: 60 },
      { name: "Tailwind CSS", level: 65 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "NestJS", level: 85 },
      { name: "Python", level: 80 },
      { name: "MYSQL", level: 75 },
      { name: "Drizzle ORM", level: 65 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 80 },
      { name: "Visual Studio Code", level: 80 },
      { name: "Docker", level: 75 },
      { name: "CI/CD", level: 70 },
    ],
  },
];

const tools = [
  "git",
  "docker",
  "aws",
  "linux",
  "vscode",
  "figma",
  "github",
  "gitlab",
  "nginx",
  "postman",
  "typescript",
  "react",
  "vuejs",
  "nodejs",
  "python",
  "mysql",
  "intellij",
  "bash",
  "tailwind",
  "nestjs",
];

const timeline = [
  {
    year: "2025",
    title: "Senior Developer",
    company: "Tech Corp",
    description:
      "Leading frontend development team and architecting scalable solutions.",
  },
  {
    year: "2021",
    title: "Full Stack Developer",
    company: "StartUp Inc",
    description:
      "Developed and maintained multiple web applications using modern technologies.",
  },
  {
    year: "2024",
    title: "Hogeschool",
    company: "HOGENT",
    description: "Start of bachelor IT at HOGENT.",
  },
];
</script>

<template>
  <div class="home">
    <section class="hero">
      <img src="../assets/E.png" alt="Profile Picture" class="profile-pic" />
      <div class="content">
        <h2>Software Developer</h2>
        <p>
          Hi! I'm a passionate developer focused on creating elegant solutions
          to complex problems.
        </p>
        <div class="cta-buttons">
          <router-link to="/projects" class="btn">View Projects</router-link>
          <router-link to="/contact" class="btn">Contact Me</router-link>
        </div>
      </div>
    </section>

    <section class="skills">
      <h2>Skills</h2>
      <div class="skills-container">
        <div
          v-for="category in skills"
          :key="category.category"
          class="skill-category"
        >
          <h3>{{ category.category }}</h3>
          <div class="skill-items">
            <div
              v-for="skill in category.items"
              :key="skill.name"
              class="skill-item"
            >
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div
                  class="skill-progress"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="tools">
      <h2>Tools</h2>
      <div class="tools-container">
        <img
          v-for="tool in tools"
          :key="tool"
          :src="`https://skillicons.dev/icons?i=${tool}`"
          :alt="tool"
          class="tool-icon"
        />
      </div>
    </section>

    <section class="timeline">
      <h2>Experience</h2>
      <div class="timeline-container">
        <div
          v-for="(item, index) in timeline"
          :key="index"
          class="timeline-item"
        >
          <div class="timeline-year">{{ item.year }}</div>
          <div class="timeline-content">
            <h3>{{ item.title }}</h3>
            <h4>{{ item.company }}</h4>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* Hero Section */
.hero {
  text-align: center;
  margin-bottom: 4rem;
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: block;
  margin: 0 auto 1rem;
  object-fit: cover;
  border: 3px solid #defeff;
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #defeff, #bff0f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 3s ease infinite;
}

h2 {
  font-family: "AshingC", sans-serif;
  font-size: 2.5rem;
  color: #defeff;
  margin-bottom: 1.5rem;
  text-align: center;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #defeff;
  color: #0d1117;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.btn:hover {
  background-color: transparent;
  border-color: #defeff;
  color: #defeff;
  transform: translateY(-2px);
}

/* Skills Section */
.skills {
  margin: 4rem 0;
  padding: 2rem;
  background-color: #1a1a1a;
  color: #defeff;
  border-radius: 16px;
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.skill-category h3 {
  margin-bottom: 1.5rem;
  color: #defeff;
}

.skill-item {
  margin-bottom: 1.5rem;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.skill-bar {
  height: 8px;
  background-color: #333;
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #defeff, #caf0f1);
  border-radius: 4px;
  transition: width 1s ease-in-out;
}

/* Tools Section */
.tools {
  text-align: center;
  margin: 4rem 0;
  padding: 2rem;
  background-color: #1a1a1a;
  border-radius: 16px;
}

.tools-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.tool-icon {
  width: 50px;
  height: 50px;
}

/* Timeline (Experience) Section */
.timeline {
  margin: 4rem 0;
}

.timeline-container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

.timeline-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background-color: #defeff;
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
}

.timeline-year {
  background-color: #defeff;
  color: #0d1117;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: bold;
  min-width: 100px;
  text-align: center;
}

.timeline-content {
  background-color: #1a1a1a;
  padding: 1.5rem;
  border-radius: 8px;
  flex: 1;
  max-width: 500px;
  position: relative;
}

.timeline-content::before {
  content: "";
  position: absolute;
  top: 20px;
  right: 100%;
  border: 10px solid transparent;
  border-right-color: #1a1a1a;
}

.timeline-content h3 {
  color: #defeff;
  margin-bottom: 0.5rem;
}

.timeline-content h4 {
  color: #888;
  margin-bottom: 1rem;
}

/* Keyframes for Gradient Animation */
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* RESPONSIVENESS */
@media (max-width: 1024px) {
  .timeline-container::before {
    left: 20px;
  }

  .timeline-item {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 40px;
  }

  .timeline-year {
    position: absolute;
    left: 0;
    transform: translateX(-50%);
  }

  .timeline-content {
    width: 100%;
  }

  .timeline-content::before {
    display: none;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .skills-container {
    grid-template-columns: 1fr;
  }

  .timeline-item {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 20px;
  }

  .timeline-year {
    position: static;
    text-align: left;
  }
}
</style>
