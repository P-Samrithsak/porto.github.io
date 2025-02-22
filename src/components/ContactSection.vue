<template>
  <section class="contact-section">
    <h2 class="section-title">Contact Me</h2>
    <form @submit.prevent="submitForm" class="contact-form">
      <input v-model="form.name" type="text" placeholder="Name" required />
      <input v-model="form.email" type="email" placeholder="Email" required />
      <textarea v-model="form.message" placeholder="Message" required></textarea>
      <button type="submit" class="submit-button">Send</button>
    </form>
  </section>
</template>

<script>
import anime from 'animejs'
import axios from 'axios'

export default {
  name: 'ContactSection',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  mounted() {
    anime({
      targets: '.contact-section',
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1500,
      easing: 'easeOutElastic',
      delay: 700
    })
  },
  methods: {
    async submitForm() {
      try {
        await axios.post('http://192.168.3.189:3000/server/data.json', this.form)
        alert('Message sent successfully!')
        this.form = { name: '', email: '', message: '' }
      } catch (error) {
        console.error('Error submitting form:', error)
        alert('Error sending message')
      }
    }
  }
}
</script>

<style scoped>
.contact-section {
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

.contact-form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  gap: 15px;
}

input, textarea {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  background: #fff;
  transition: border-color 0.3s ease, background 0.5s ease;
}

input:focus, textarea:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
}

textarea {
  min-height: 120px;
}

.submit-button {
  padding: 12px 24px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}

.submit-button:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

/* Dark Mode Styles */
.dark-mode .contact-section {
  background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.dark-mode input, .dark-mode textarea {
  background: #3a3a3a;
  border-color: #555;
  color: #fff;
}

.dark-mode input:focus, .dark-mode textarea:focus {
  border-color: #00d2ff;
  box-shadow: 0 0 5px rgba(0, 210, 255, 0.3);
}

.dark-mode .submit-button {
  background: #0056b3;
}

.dark-mode .submit-button:hover {
  background: #003d7a;
}

@media (max-width: 768px) {
  .contact-section {
    padding: 20px;
  }

  .section-title {
    font-size: 2rem;
  }

  .contact-form {
    max-width: 100%;
  }
}
</style>