import { getUsers } from './common.js';

const form = document.querySelector('form[data-auth-form]');
const mode = form?.dataset.mode;

function setMessage(text, type='error') {
  const box = document.querySelector('[data-form-message]');
  if (!box) return;
  box.textContent = text;
  box.className = `form-message ${type}`;
}

function bindPasswordToggle(buttonSelector, inputSelector) {
  const btn = document.querySelector(buttonSelector);
  const input = document.querySelector(inputSelector);
  if (!btn || !input) return;
  btn.addEventListener('click', () => {
    const show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    btn.querySelector('img').src = show ? 'Imgs/Ojo-abierto.jpg' : 'Imgs/Ojo-cerrado.jpg';
    btn.setAttribute('aria-label', show ? 'Ocultar contraseña' : 'Mostrar contraseña');
  });
}

bindPasswordToggle('[data-toggle-password]', '#password');
bindPasswordToggle('[data-toggle-repassword]', '#repassword');

if (form && mode === 'login') {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.email.value.trim();
    const password = form.password.value;
    const user = getUsers().find(u => u.email === email && u.password === password);
    if (!user) return setMessage('Usuario y/o contraseña incorrectos.');
    localStorage.setItem('clientelogueado', JSON.stringify(user));
    window.location.href = 'index.html';
  });
}

if (form && mode === 'register') {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = form.nombre.value.trim();
    const ciudad = form.ciudad.value.trim();
    const pais = form.pais.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const repassword = form.repassword.value;
    if (!nombre || !ciudad || !pais || !email || !password || !repassword) {
      return setMessage('Completa todos los campos.');
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) return setMessage('Introduce un correo electrónico válido.');
    if (password.length < 6) return setMessage('La contraseña debe tener al menos 6 caracteres.');
    if (password !== repassword) return setMessage('Las contraseñas no coinciden.');

    const users = getUsers();
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      return setMessage('Ya existe un usuario registrado con ese correo.');
    }
    users.push({ nombre, ciudad, pais, email, password });
    localStorage.setItem('clienteregis', JSON.stringify(users));
    setMessage('Registro completado. Redirigiendo al login…', 'success');
    setTimeout(() => { window.location.href = 'login.html'; }, 700);
  });
}
