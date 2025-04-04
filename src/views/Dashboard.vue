<script setup lang="ts">
import { ref } from 'vue'
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { getAuth, signOut } from 'firebase/auth'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const auth = getAuth();

const logout = async () => {
  try {
    await signOut(auth);
    alert("Logged out successfully!");
    window.location.reload(); // Reload or redirect to login page
  } catch (error) {
    console.error("Logout failed:", error);
  }
}

const pageViews = ref({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Page Views',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: '#646cff',
    tension: 0.1
  }]
})

const apiCalls = ref({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'API Calls',
    data: [28, 48, 40, 19, 86, 27, 90],
    fill: false,
    borderColor: '#42b883',
    tension: 0.1
  }]
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
</script>

<template>
  <div class="dashboard">
    <div class="header">
      <h1>Dashboard</h1>
      <button class="logout-btn" @click="logout">Logout</button>
    </div>
    
    <div class="stats-grid">
      <div class="stat-card">
        <h3>Total Views</h3>
        <p class="stat-number">12,345</p>
        <p class="stat-change positive">+15% from last month</p>
      </div>
      
      <div class="stat-card">
        <h3>API Calls</h3>
        <p class="stat-number">8,765</p>
        <p class="stat-change negative">-5% from last month</p>
      </div>
      
      <div class="stat-card">
        <h3>Active Users</h3>
        <p class="stat-number">1,234</p>
        <p class="stat-change positive">+25% from last month</p>
      </div>
    </div>

    <div class="charts-container">
      <div class="chart-wrapper">
        <h2>Page Views Over Time</h2>
        <Line :data="pageViews" :options="chartOptions" />
      </div>
      
      <div class="chart-wrapper">
        <h2>API Calls Over Time</h2>
        <Line :data="apiCalls" :options="chartOptions" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

h1 {
  font-size: 2.5rem;
  background: linear-gradient(45deg, #646cff, #535bf2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.logout-btn {
  background-color: #ff4757;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.logout-btn:hover {
  background-color: #e84147;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.stat-card {
  background-color: #1a1a1a;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-card h3 {
  color: #646cff;
  margin-bottom: 1rem;
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.stat-change {
  font-size: 0.9rem;
}

.stat-change.positive {
  color: #42b883;
}

.stat-change.negative {
  color: #ff4757;
}

.charts-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.chart-wrapper {
  background-color: #1a1a1a;
  padding: 1.5rem;
  border-radius: 12px;
  height: 400px;
}

.chart-wrapper h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #646cff;
}

@media (max-width: 1024px) {
  .charts-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>