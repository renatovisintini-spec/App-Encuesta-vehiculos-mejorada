export function getUsers(){
  return JSON.parse(localStorage.getItem('clienteregis')) || [];
}

export function getCurrentUser(){
  return JSON.parse(localStorage.getItem('clientelogueado')) || null;
}

export function requireUser(){
  const user = getCurrentUser();
  if (!user) {
    window.location.href = 'login.html';
    return null;
  }
  return user;
}

export function logout(){
  localStorage.removeItem('clientelogueado');
  window.location.href = 'index.html';
}

export function renderUser(){
  const user = getCurrentUser();
  const target = document.querySelector('[data-current-user]');
  if (target) target.textContent = user ? user.nombre : '';
}

export function bindLogout(){
  const btn = document.querySelector('[data-logout]');
  if (btn) btn.addEventListener('click', (e) => {
    e.preventDefault();
    logout();
  });
}

export function getSurveyKey(){
  const params = new URLSearchParams(window.location.search);
  return params.get('tipo') || 'autos';
}
