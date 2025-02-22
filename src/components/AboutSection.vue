<template>
  <section class="about-section">
    <h2 class="section-title">About Me</h2>
    <div class="content">
      <img src="../assets/Miku.gif" alt="Profile GIF" class="profile-gif" />
      <div class="profiles">
        <p class="bio">Hi, I'm Phypiseth Samrithsak! Just a student Bing Chillin' around and just enjoy youth...oh wait we're long past that......nvm</p>
        <div class="social-links">
          <a href="https://x.com/Samrithsak69" class="social-link">
            <i class="fab fa-x-twitter"></i>
          </a>
          <a href="https://github.com/P-Samrithsak" class="social-link">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'AboutSection',
  mounted() {
    anime({
      targets: '.about-section',
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1500,
      easing: 'easeOutElastic',
      delay: 300
    })
    anime({
      targets: '.profile-gif',
      scale: [0.8, 1],
      rotate: '1turn',
      duration: 1200,
      easing: 'easeOutBack'
    })
    anime({
      targets: '.social-link',
      opacity: [0, 1],
      translateX: [-20, 0],
      delay: anime.stagger(200),
      duration: 1000,
      easing: 'easeOutQuad'
    })
  }
}
</script>

<style scoped>
.about-section {
  padding: 40px;
  background: linear-gradient(135deg, #e6f3ff 0%, #ffffff 100%);
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
}

.content {
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
}

.profile-gif {
  max-width: 250px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 123, 255, 0.3);
  transition: transform 0.3s ease;
}

.profile-gif:hover {
  transform: scale(1.05);
}

.profiles {
  max-width: 500px;
}

.bio {
  font-size: 1.1rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 20px;
}

.social-links {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  padding: 10px;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease, transform 0.3s ease;
}

.social-link i {
  margin-right: 8px;
  font-size: 1.2rem;
}

.social-link:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

/* Dark Mode Styles */
.dark-mode .about-section {
  background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.dark-mode .section-title {
  color: #00d2ff;
}

.dark-mode .bio {
  color: #fff;
}

.dark-mode .social-link {
  background: #0056b3;
}

.dark-mode .social-link:hover {
  background: #003d7a;
}

@media (max-width: 768px) {
  .about-section {
    padding: 20px;
  }

  .section-title {
    font-size: 2rem;
  }

  .content {
    flex-direction: column;
    text-align: center;
  }

  .profile-gif {
    max-width: 150px;
  }

  .social-link {
    padding: 8px;
  }

  .social-link i {
    font-size: 1rem;
  }
}
</style>