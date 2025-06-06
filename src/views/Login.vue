<script setup lang="ts">
import { ref } from 'vue'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = getAuth()
const loading = ref(false)
const error = ref('')

const signInWithGoogle = async () => {
  loading.value = true
  error.value = ''
  
  try {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    const user = result.user

    if (!user) throw new Error('No user found')

    // Get user's ID token result to check custom claims
    const idTokenResult = await user.getIdTokenResult()

    // Check if the user has the 'allowedUser' custom claim
    if (!idTokenResult.claims.allowedUser) {
      error.value = 'Access denied: Unauthorized email'
      await auth.signOut() // Optional: Sign out if they don't have the claim
      return
    }

    // If the claim is valid, proceed to the dashboard
    router.push('/dashboard')
  } catch (e) {
    error.value = 'Failed to sign in with Google'
    console.error(e)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="login">
    <div class="login-container">
      <h1>Login</h1>
      
      <button 
        @click="signInWithGoogle" 
        :disabled="loading"
        class="google-btn"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        {{ loading ? 'Signing in...' : 'Sign in with Google' }}
      </button>

      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 180px);
}

.login-container {
  background-color: #1a1a1a;
  padding: 2rem;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  text-align: center;
}

h1 {
  margin-bottom: 2rem;
  font-size: 2rem;
  background-color: #defeff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.google-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  padding: 0.8rem;
  background-color: white;
  color: #333;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.google-btn:hover:not(:disabled) {
  background-color: #f1f1f1;
  transform: translateY(-2px);
}

.google-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.error {
  margin-top: 1rem;
  color: #ff4757;
}
</style>