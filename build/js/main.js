// Scroll fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Floating code symbols in hero background
const symbols = ['</', '/>', '{ }', '( )', 'if', 'for', '===', '=>', '[ ]', 'def', 'true', '::', 'null', 'fn', '&&'];
const heroBg = document.querySelector('.hero-bg-code');

if (heroBg) {
  for (let i = 0; i < 22; i++) {
    const span = document.createElement('span');
    span.className = 'code-symbol';
    span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    const size = Math.random() * 30 + 12;
    span.style.cssText = [
      `left: ${Math.random() * 100}%`,
      `font-size: ${size}px`,
      `animation-duration: ${Math.random() * 18 + 14}s`,
      `animation-delay: ${(Math.random() * -20).toFixed(1)}s`,
    ].join(';');
    heroBg.appendChild(span);
  }
}
