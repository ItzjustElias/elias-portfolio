<script setup lang="ts">
const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with real-time inventory management.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB'],
    image: 'https://picsum.photos/400/300?random=1',
    link: '#'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and team features.',
    technologies: ['React', 'Firebase', 'Material-UI'],
    image: 'https://picsum.photos/400/300?random=2',
    link: '#'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management and content scheduling.',
    technologies: ['Vue.js', 'Python', 'PostgreSQL'],
    image: 'https://picsum.photos/400/300?random=3',
    link: '#'
  }
]
</script>

<template>
  <div class="projects">
    <h1>My Projects</h1>
    <div class="project-grid">
      <div v-for="project in projects" :key="project.title" class="project-card">
        <div class="project-image">
          <img :src="project.image" :alt="project.title">
        </div>
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="technologies">
            <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
          <a :href="project.link" class="project-link" target="_blank">View Project</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  background: linear-gradient(45deg, #646cff, #535bf2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 1rem;
}

.project-card {
  background-color: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.project-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-card h3 {
  margin-bottom: 1rem;
  color: #defeff;
  font-size: 1.5rem;
}

.project-card p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex: 1;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
}

.tech-tag {
  background-color: #333;
  color: #fff;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.tech-tag:hover {
  background-color: #defeff;
  color: #0d1117;
}

.project-link {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: #defeff;
  color: #0d1117;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  text-align: center;
  border: 2px solid transparent;
}

.project-link:hover {
  background-color: transparent;
  border-color: #defeff;
  color: #defeff;
}

@media (max-width: 1024px) {
  .project-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>