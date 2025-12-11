<script setup lang="ts">
import { ref } from 'vue'

interface Skill {
  name: string
  level: number
  category: string
}

const skills = ref<Skill[]>([
  { name: 'Vue.js 3', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Language' },
  { name: 'JavaScript', level: 95, category: 'Language' },
  { name: 'Vite', level: 85, category: 'Build Tools' },
  { name: 'Pinia', level: 88, category: 'State Management' },
  { name: 'Vue Router', level: 90, category: 'Routing' },
  { name: 'HTML5/CSS3', level: 95, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'Styling' },
  { name: 'Git', level: 88, category: 'Version Control' },
  { name: 'REST APIs', level: 90, category: 'Backend' },
  { name: 'Vitest', level: 80, category: 'Testing' },
  { name: 'Responsive Design', level: 95, category: 'UI/UX' }
])

const tools = ref([
  { name: 'VS Code', icon: '💻' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Chrome DevTools', icon: '🔧' },
  { name: 'NPM/Yarn', icon: '📦' },
  { name: 'ESLint', icon: '✨' },
  { name: 'Prettier', icon: '💅' },
  { name: 'Postman', icon: '📮' }
])
</script>

<template>
  <section id="skills" class="skills-section">
    <div class="container">
      <h2 class="section-title">Skills & Expertise</h2>
      <p class="section-subtitle">Technologies I work with to build modern web applications</p>

      <div class="skills-grid">
        <div v-for="skill in skills" :key="skill.name" class="skill-card">
          <div class="skill-header">
            <span class="skill-name">{{ skill.name }}</span>
            <span class="skill-category">{{ skill.category }}</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
          </div>
        </div>
      </div>

      <h3 class="tools-title">Tools & Technologies</h3>
      <div class="tools-grid">
        <div v-for="tool in tools" :key="tool.name" class="tool-card">
          <span class="tool-icon">{{ tool.icon }}</span>
          <span class="tool-name">{{ tool.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  padding: 6rem 2rem;
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 5rem;
}

.skill-card {
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(59, 130, 246, 0.1);
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-4px);
  border-color: rgba(59, 130, 246, 0.3);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.skill-name {
  font-weight: 600;
  color: #f8fafc;
  font-size: 1.125rem;
}

.skill-category {
  font-size: 0.75rem;
  color: #64748b;
  background: rgba(59, 130, 246, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
}

.skill-bar {
  height: 8px;
  background: rgba(30, 41, 59, 0.8);
  border-radius: 1rem;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%);
  border-radius: 1rem;
  transition: width 1s ease-out;
}

.tools-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2.5rem;
  color: #f8fafc;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.tool-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem;
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(59, 130, 246, 0.1);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
}

.tool-card:hover {
  transform: translateY(-4px) scale(1.05);
  border-color: rgba(59, 130, 246, 0.3);
  background: rgba(30, 41, 59, 0.8);
}

.tool-icon {
  font-size: 2.5rem;
}

.tool-name {
  font-weight: 500;
  color: #e2e8f0;
  text-align: center;
}

@media (max-width: 768px) {
  .skills-section {
    padding: 4rem 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .tools-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
}
</style>
