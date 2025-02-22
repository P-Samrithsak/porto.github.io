<template>
  <div class="portfolio" :class="{ 'dark-mode': isDark }" :style="{ background: backgroundGradient }">
    <div class="top-nav">
      <div class="color-changer">
        <button v-for="color in colors" :key="color" 
                :style="{ backgroundColor: color }"
                @click="changeColor(color)"
                class="color-button"></button>
      </div>
      <label class="dark-mode-switch">
        <input type="checkbox" v-model="isDark" @change="toggleDarkMode">
        <span class="switch"></span>
        <span class="switch-label">{{ isDark ? 'Light Mode' : 'Dark Mode' }}</span>
      </label>
    </div>
    
    <AboutSection />
    <ServicesSection />
    <SkillsSection />
    <ContactSection />

    <footer class="footer">
      <div class="container">
        <p>&copy; {{ new Date().getFullYear() }} Skibidi-Toilet-Org. All rights reserved. | Trademarks and logos are the property of their respective owners.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import anime from 'animejs'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'

export default {
  name: 'PortfolioApp',
  components: {
    AboutSection,
    ServicesSection,
    SkillsSection,
    ContactSection
  },
  data() {
    return {
      currentColor: '#f8f9fa',
      colors: ['#f8f9fa', '#e6f3ff', '#fff0f0', '#f0fff0', '#007bff'],
      isDark: false
    }
  },
  computed: {
    backgroundGradient() {
      return `linear-gradient(135deg, ${this.currentColor} 0%, ${this.isDark ? '#1a1a1a' : '#ffffff'} 100%)`
    }
  },
  methods: {
    changeColor(color) {
      anime({
        targets: this.$el,
        background: this.backgroundGradient,
        duration: 1200,
        easing: 'easeInOutQuad'
      })
      this.currentColor = color
    },
    toggleDarkMode() {
      anime({
        targets: this.$el,
        background: this.backgroundGradient,
        duration: 1000,
        easing: 'easeInOutQuad'
      })
      document.body.classList.toggle('dark-mode', this.isDark)
    }
  },
  mounted() {
    anime({
      targets: '.portfolio',
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1500,
      easing: 'easeOutElastic'
    })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

.portfolio {
  min-height: 100vh;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;
  transition: background 0.5s ease;
}

.top-nav {
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
  align-items: center;
  z-index: 1000;
}

.color-changer {
  display: flex;
  align-items: center;
}

.color-button {
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.color-button:hover {
  transform: scale(1.1);
}

section {
  margin: 40px 0;
  padding: 40px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background 0.5s ease;
}

section:hover {
  transform: translateY(-5px);
}

/* Dark Mode Styles */
.dark-mode .portfolio {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #fff;
}

.dark-mode .top-nav {
  background: rgba(0, 0, 0, 0.1);
  padding: 5px;
  border-radius: 8px;
}

.dark-mode .color-button {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.dark-mode section {
  background: rgba(40, 40, 40, 0.9);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  color: #fff;
}

.dark-mode .color-button:hover {
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
}

/* Dark Mode Switch Styling */
.dark-mode-switch {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  height: 30px; /* Match color button height */
}

.dark-mode-switch input {
  display: none;
}

.switch {
  width: 50px;
  height: 25px;
  background: #ccc;
  border-radius: 25px;
  position: relative;
  transition: background 0.3s ease;
}

.switch::after {
  content: '';
  width: 20px;
  height: 20px;
  background: white;
  border-radius:  50%;
  position: absolute;
  top: 2.5px;
  left: 2.5px;
  transition: transform 0.3s ease;
}

.dark-mode-switch input:checked + .switch {
  background: #007bff;
}

.dark-mode-switch input:checked + .switch::after {
  transform: translateX(25px);
}

.switch-label {
  font-size: 0.9rem;
  color: #333;
  transition: color 0.3s ease;
  margin-left: 5px;
}

.dark-mode .switch-label {
  color: #fff;
}

.dark-mode .switch {
  background: #444;
}

.dark-mode .switch::after {
  background: #fff;
}

.footer {
  background-color: #f8f9fa; 
  padding: 10px 0; 
  text-align: center; 
  border-radius: 15px;
}

.footer .container {
  max-width: 600px; 
  margin: 0 auto; 
}

.dark-mode .footer {
  background-color: #1a1a1a; 
  color: #fff;
  border-radius: 15px;
}

.dark-mode .footer .container {
  color: #fff;
}

@media (max-width: 768px) {
  .portfolio {
    padding: 10px;
  }
  
  .top-nav {
    top: 10px;
    right: 10px;
  }

  .dark-mode-switch {
    margin-left: 5px;
  }

  section {
    padding: 20px;
    margin: 20px 0;
  }
}
</style>