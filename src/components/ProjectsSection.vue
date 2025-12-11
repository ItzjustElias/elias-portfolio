<script setup lang="ts">
import { ref } from 'vue'

interface Project {
  title: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
  image: string
}

const projects = ref<Project[]>([
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with shopping cart, payment integration, and admin dashboard. Built with Vue 3 Composition API and TypeScript.',
    technologies: ['Vue 3', 'TypeScript', 'Pinia', 'Tailwind CSS'],
    github: '#',
    demo: '#',
    image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
    technologies: ['Vue 3', 'Vite', 'Firebase', 'Vue Router'],
    github: '#',
    demo: '#',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with location search, 7-day forecast, and interactive maps. Features smooth animations and responsive design.',
    technologies: ['Vue 3', 'TypeScript', 'Weather API', 'Chart.js'],
    github: '#',
    demo: '#',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for tracking social media metrics across multiple platforms with real-time data visualization and insights.',
    technologies: ['Vue 3', 'TypeScript', 'D3.js', 'REST APIs'],
    github: '#',
    demo: '#',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Portfolio Builder',
    description: 'SaaS application for creating professional portfolios with customizable templates, drag-and-drop editor, and export functionality.',
    technologies: ['Vue 3', 'Vite', 'Pinia', 'Supabase'],
    github: '#',
    demo: '#',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Fitness Tracker',
    description: 'Health and fitness application for tracking workouts, calories, and progress with charts, goals, and personalized recommendations.',
    technologies: ['Vue 3', 'TypeScript', 'IndexedDB', 'PWA'],
    github: '#',
    demo: '#',
    image: 'https://images.pexels.com/photos/4164516/pexels-photo-4164516.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
])
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <h2 class="section-title">Featured Projects</h2>
      <p class="section-subtitle">A selection of my recent work and side projects</p>

      <div class="projects-grid">
        <article v-for="project in projects" :key="project.title" class="project-card">
          <div class="project-image-container">
            <img :src="project.image" :alt="project.title" class="project-image" />
            <div class="project-overlay">
              <div class="project-links">
                <a v-if="project.github" :href="project.github" class="project-link" aria-label="View GitHub repository">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a v-if="project.demo" :href="project.demo" class="project-link" aria-label="View live demo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-technologies">
              <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 6rem 2rem;
  background: #0f172a;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #f8fafc;
}

.section-subtitle {
  text-align: center;
  font-size: 1.125rem;
  color: #94a3b8;
  margin-bottom: 4rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: #1e293b;
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(59, 130, 246, 0.1);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  border-color: rgba(59, 130, 246, 0.3);
}

.project-image-container {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.2);
  border: 2px solid #3b82f6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
  transition: all 0.3s ease;
  text-decoration: none;
}

.project-link:hover {
  background: #3b82f6;
  color: white;
  transform: scale(1.1);
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #f8fafc;
  margin-bottom: 0.75rem;
}

.project-description {
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  font-size: 0.875rem;
  padding: 0.375rem 0.75rem;
  background: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
  border-radius: 0.375rem;
  border: 1px solid rgba(59, 130, 246, 0.2);
}

@media (max-width: 768px) {
  .projects-section {
    padding: 4rem 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
