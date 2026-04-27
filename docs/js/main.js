// Next event date
(function () {
  const eventMonths = [1, 3, 5, 7, 9, 11]; // 0-indexed: 2,4,6,8,10,12月

  function getThirdSaturday(year, month) {
    let count = 0;
    for (let day = 1; day <= 31; day++) {
      const d = new Date(year, month, day);
      if (d.getMonth() !== month) break;
      if (d.getDay() === 6) {
        if (++count === 3) return d;
      }
    }
    return null;
  }

  function getNextEventDate() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    for (let i = 0; i < 13; i++) {
      const d = new Date(today.getFullYear(), today.getMonth() + i, 1);
      if (!eventMonths.includes(d.getMonth())) continue;
      const sat = getThirdSaturday(d.getFullYear(), d.getMonth());
      if (sat && sat >= today) return sat;
    }
    return null;
  }

  const el = document.getElementById('next-event-date');
  if (!el) return;
  const next = getNextEventDate();
  if (next) {
    el.textContent = `次回は ${next.getMonth() + 1}月${next.getDate()}日（土）開催予定です`;
  }
})();

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
