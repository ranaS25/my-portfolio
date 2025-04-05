document.addEventListener('DOMContentLoaded', function() {
  // Loading animation
  const loader = document.createElement('div');
  loader.className = 'loader';
  loader.innerHTML = '<div class="spinner"></div>';
  document.body.prepend(loader);
  
  setTimeout(() => {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 500);
  }, 1500);
  
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });
  
  // Scroll-triggered animations
  function checkVisibility() {
      const projectCards = document.querySelectorAll('.project-card');
      const windowHeight = window.innerHeight;
      
      projectCards.forEach(card => {
          const cardPosition = card.getBoundingClientRect().top;
          if (cardPosition < windowHeight - 100) {
              card.classList.add('visible');
          }
      });
  }
  
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('load', checkVisibility);
  
  // Particle background
  function createParticles() {
      const particlesContainer = document.createElement('div');
      particlesContainer.className = 'particles';
      document.body.appendChild(particlesContainer);
      
      const particleCount = 50;
      
      for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement('div');
          particle.style.position = 'absolute';
          particle.style.width = `${Math.random() * 10 + 5}px`;
          particle.style.height = particle.style.width;
          particle.style.backgroundColor = `hsl(${Math.random() * 60 + 350}, 80%, 60%)`;
          particle.style.borderRadius = '50%';
          particle.style.opacity = Math.random() * 0.5 + 0.1;
          
          // Random initial position
          particle.style.left = `${Math.random() * 100}%`;
          particle.style.top = `${Math.random() * 100}%`;
          
          // Animation
          const duration = Math.random() * 20 + 10;
          particle.style.animation = `float ${duration}s infinite ease-in-out`;
          
          particlesContainer.appendChild(particle);
      }
  }
  
  createParticles();
  
  // Text animation - typewriter effect for hero text
  function typeWriter() {
      const heroTitle = document.querySelector('.hero h2');
      if (!heroTitle) return;
      
      const originalText = heroTitle.textContent;
      heroTitle.textContent = '';
      
      let i = 0;
      function type() {
          if (i < originalText.length) {
              heroTitle.textContent += originalText.charAt(i);
              i++;
              setTimeout(type, Math.random() * 100 + 50);
          }
      }
      
      setTimeout(type, 1000);
  }
  
  setTimeout(typeWriter, 1800);
  
  // Hover tilt effect for project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const angleX = (y - centerY) / 20;
          const angleY = (centerX - x) / 20;
          
          card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.05)`;
      });
      
      card.addEventListener('mouseleave', () => {
          card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
      });
  });
});