// ---- Time Update for Profile Card ----
const timeElement = document.querySelector('[data-testid="test-user-time"]');
if (timeElement) {
  setInterval(() => {
    timeElement.textContent = Date.now();
  }, 1000);
}

// ---- Contact Form Validation ----
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const success = document.getElementById('success');

    let isValid = true;

    // Clear messages
    document.querySelectorAll('.error').forEach(e => e.textContent = '');
    success.textContent = '';

    if (!name.value.trim()) {
      document.getElementById('error-name').textContent = 'Name is required.';
      isValid = false;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email.value)) {
      document.getElementById('error-email').textContent = 'Enter a valid email.';
      isValid = false;
    }

    if (!subject.value.trim()) {
      document.getElementById('error-subject').textContent = 'Subject is required.';
      isValid = false;
    }

    if (message.value.trim().length < 10) {
      document.getElementById('error-message').textContent = 'Message must be at least 10 characters.';
      isValid = false;
    }

    if (isValid) {
      success.textContent = 'Your message has been sent successfully!';
      form.reset();
    }
  });
}
