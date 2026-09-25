import { surveys } from './data.js';
import { getCurrentUser, renderUser, bindLogout } from './common.js';

renderUser();
bindLogout();

const user = getCurrentUser();
document.querySelectorAll('[data-auth-only]').forEach(el => el.hidden = !user);
document.querySelectorAll('[data-guest-only]').forEach(el => el.hidden = !!user);

function hasCompletedSurvey(surveyKey, currentUser) {
  if (!currentUser || !surveys[surveyKey]) return false;

  const survey = surveys[surveyKey];
  const storedResponses = JSON.parse(localStorage.getItem(survey.storageKey)) || [];

  return survey.questions.every(question =>
    storedResponses.some(response =>
      response.nombre === currentUser.nombre &&
      response.respuestaCorrectaId?.startsWith(`R${question.id}`)
    )
  );
}

document.querySelectorAll('[data-survey-link]').forEach(link => {
  link.addEventListener('click', (e) => {
    const currentUser = getCurrentUser();

    if (!currentUser) {
      e.preventDefault();
      window.location.href = 'login.html';
      return;
    }

    const url = new URL(link.href, window.location.href);
    const surveyKey = url.searchParams.get('tipo') || 'autos';
    const survey = surveys[surveyKey];

    if (survey && hasCompletedSurvey(surveyKey, currentUser)) {
      e.preventDefault();
      alert(`Has realizado la encuesta ${survey.label}, no puedes volver a realizarla, elige otro ítem`);
    }
  });
});
