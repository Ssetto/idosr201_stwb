document.addEventListener('DOMContentLoaded', () => {
  const demoBtn = document.getElementById('demoBtn');
  let clickCount = 0;

  demoBtn.addEventListener('click', () => {
    clickCount++;
    const messages = [
      '🎉 Bravo ! Votre site fonctionne parfaitement sur Azure !',
      '🚀 Le déploiement est un succès !',
      '✨ Azure Static Web Apps en action !',
      '💯 Excellent travail ! Le TP est réussi !',
      '🌟 Vous maîtrisez maintenant le déploiement sur Azure !'
    ];
    
    const message = messages[clickCount % messages.length];
    alert(message);

    // Animation du bouton
    demoBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      demoBtn.style.transform = 'scale(1)';
    }, 100);
  });

  // Animation au scroll
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    observer.observe(section);
  });
});