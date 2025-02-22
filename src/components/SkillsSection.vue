<template>
  <section class="skills-section">
    <h2 class="section-title">Skills</h2>
    <ul class="skill-list">
      <li v-for="(skill, index) in skills" :key="index" class="skill-item">
        {{ skill }}
      </li>
    </ul>
  </section>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'SkillsSection',
  data() {
    return {
      skills: ['Python','JS','Gaming','C','C++','C#','C# .Net Framework','Vue.js', 'Anime.js', 'JavaScript', 'CSS', 'HTML', 'Responsive Design']
    }
  },
  mounted() {
    anime({
      targets: '.skills-section',
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1500,
      easing: 'easeOutElastic',
      delay: 700
    })
    anime({
      targets: '.skill-item',
      opacity: [0, 1],
      translateX: [-30, 0],
      delay: anime.stagger(150),
      duration: 1000,
      easing: 'easeOutQuad'
    })
  }
}
</script>

<style scoped>
.skills-section {
  padding: 40px;
  background: linear-gradient(135deg, #f0fff0 0%, #ffffff 100%);
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: background 0.5s ease, box-shadow 0.5s ease;
}

.section-title {
  font-size: 2.5rem;
  color: #007bff;
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: linear-gradient(45deg, #007bff, #00d2ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.skill-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
}

.skill-item {
  padding: 15px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 123, 255, 0.1);
  text-align: center;
  font-size: 1.1rem;
  color: #333;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 123, 255, 0.2);
}

/* Dark Mode Styles */
.dark-mode .skills-section {
  background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.dark-mode .skill-item {
  background: rgba(40, 40, 40, 0.9);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

.dark-mode .skill-item:hover {
  box-shadow: 0 5px 15px rgba(0, 123, 255, 0.3);
}

.dark-mode .skill-item {
  color: #fff;
}

@media (max-width: 768px) {
  .skills-section {
    padding: 20px;
  }

  .section-title {
    font-size: 2rem;
  }

  .skill-list {
    grid-template-columns: 1fr;
  }

  .skill-item {
    padding: 10px;
    font-size: 1rem;
  }
}
</style>