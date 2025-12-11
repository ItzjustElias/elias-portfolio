<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

const handleSubmit = async () => {
  isSubmitting.value = true

  await new Promise(resolve => setTimeout(resolve, 1500))

  submitStatus.value = 'success'
  isSubmitting.value = false

  form.value = {
    name: '',
    email: '',
    message: ''
  }

  setTimeout(() => {
    submitStatus.value = 'idle'
  }, 3000)
}

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'
  },
  {
    name: 'Email',
    url: 'mailto:hello@example.com',
    icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6'
  }
]
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      <p class="section-subtitle">Have a project in mind? Let's work together to create something amazing</p>

      <div class="contact-content">
        <div class="contact-info">
          <h3 class="info-title">Let's Connect</h3>
          <p class="info-text">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div class="social-links">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              class="social-link"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.name"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path :d="social.icon"></path>
              </svg>
            </a>
          </div>

          <div class="contact-details">
            <div class="detail-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Based in Belgium</span>
            </div>
            <div class="detail-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              <span>Available for freelance</span>
            </div>
          </div>
        </div>

        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              class="form-input"
              placeholder="Your name"
              required
            />
          </div>

          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              class="form-input"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div class="form-group">
            <label for="message" class="form-label">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              class="form-textarea"
              placeholder="Tell me about your project..."
              rows="5"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            class="submit-btn"
            :disabled="isSubmitting"
          >
            <span v-if="!isSubmitting && submitStatus === 'idle'">Send Message</span>
            <span v-else-if="isSubmitting">Sending...</span>
            <span v-else-if="submitStatus === 'success'">Message Sent!</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 6rem 2rem;
  background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: start;
}

.contact-info {
  position: sticky;
  top: 2rem;
}

.info-title {
  font-size: 2rem;
  font-weight: 600;
  color: #f8fafc;
  margin-bottom: 1rem;
}

.info-text {
  color: #94a3b8;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.social-link {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.1);
  border: 2px solid rgba(59, 130, 246, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  background: #3b82f6;
  color: white;
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #cbd5e1;
}

.detail-item svg {
  color: #3b82f6;
}

.contact-form {
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(59, 130, 246, 0.1);
  border-radius: 1rem;
  padding: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-weight: 500;
  color: #f8fafc;
  margin-bottom: 0.5rem;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.875rem;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 0.5rem;
  color: #f8fafc;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

@media (max-width: 968px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .contact-info {
    position: static;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 4rem 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .contact-form {
    padding: 1.5rem;
  }
}
</style>
