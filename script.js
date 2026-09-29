// Highlight the tab for the section currently in view
const tabs = document.querySelectorAll('.tab');
const sections = [...tabs].map(tab => document.querySelector(tab.getAttribute('href')));

function setActive(id) {
  tabs.forEach(tab => {
    const isActive = tab.getAttribute('href') === '#' + id;
    tab.classList.toggle('active', isActive);
    if (isActive) {
      tab.setAttribute('aria-current', 'true');
      // Keep the active tab visible on narrow screens without touching page scroll
      const strip = tab.parentElement;
      strip.scrollLeft = tab.offsetLeft - (strip.clientWidth - tab.offsetWidth) / 2;
    } else {
      tab.removeAttribute('aria-current');
    }
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) setActive(entry.target.id);
  });
}, { rootMargin: '-45% 0px -50% 0px' });

sections.forEach(section => observer.observe(section));
setActive('home');

// Email capture (submits to Formspree without leaving the page)
const form = document.getElementById('signup');
const status = document.getElementById('form-status');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const email = form.email.value.trim();

  status.className = 'form-status';
  if (!form.email.checkValidity() || !email) {
    status.textContent = 'Please enter a valid email address.';
    status.classList.add('error');
    return;
  }

  if (form.action.includes('YOUR_FORM_ID')) {
    status.textContent = 'Sign-up isn’t connected yet — add your Formspree form ID.';
    status.classList.add('error');
    return;
  }

  const button = form.querySelector('button');
  button.disabled = true;
  status.textContent = 'Sending…';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });
    if (!response.ok) throw new Error();
    form.reset();
    status.textContent = 'Thank you! We’ll be in touch when we launch.';
    status.classList.add('success');
  } catch {
    status.textContent = 'Something went wrong. Please try again.';
    status.classList.add('error');
  } finally {
    button.disabled = false;
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
