<template>
  <section class="services-section">
    <h2 class="section-title">Projects</h2>
    <div class="cards">
      <div class="card" v-for="(service, index) in services" :key="index">
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'ServicesSection',
  data() {
    return {
      services: [
        { title: 'Web Development', description: 'Building responsive websites with Vue.js' },
        { title: 'UI/UX Design', description: 'Crafting user-friendly interfaces' },
        { title: 'Game Development', description: 'Building Indie Games' },
        { title: 'WinForm Application', description: 'Building Application Using C# .Net Framework' },
        { title: 'Tunneling \nDedicated Server', description: 'Making game server accessable globally' },
        { title: 'Grinding Games', description: '1500+ days in HI3rd, 3+ Years In FWT:R, 1000+ Hours In Terraria,...etc : )' },
        { title: 'Animations', description: 'Adding dynamic effects with Anime.js' }
      ]
    }
  },
  mounted() {
    anime({
      targets: '.services-section',
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1500,
      easing: 'easeOutElastic',
      delay: 500
    })
    anime({
      targets: '.card',
      opacity: [0, 1],
      translateY: [30, 0],
      delay: anime.stagger(200),
      duration: 1000,
      easing: 'easeOutQuad'
    })
  }
}
</script>

<style scoped>
.services-section {
  padding: 40px;
  background: linear-gradient(135deg, #fff0f0 0%, #ffffff 100%);
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

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.card {
  padding: 20px;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 123, 255, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card h3 {
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 10px;
}

.card p {
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 123, 255, 0.2);
}

/* Dark Mode Styles */
.dark-mode .services-section {
  background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.dark-mode .card {
  background: rgba(40, 40, 40, 0.9);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.dark-mode .card h3 {
  color: #00d2ff;
}

.dark-mode .card p {
  color: #fff;
}

.dark-mode .card:hover {
  box-shadow: 0 8px 20px rgba(0, 123, 255, 0.3);
}

@media (max-width: 768px) {
  .services-section {
    padding: 20px;
  }

  .section-title {
    font-size: 2rem;
  }

  .cards {
    grid-template-columns: 1fr;
  }

  .card {
    padding: 15px;
  }
}
</style>