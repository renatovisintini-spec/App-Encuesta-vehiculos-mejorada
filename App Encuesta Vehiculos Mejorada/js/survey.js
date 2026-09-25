import { surveys } from './data.js';
import { requireUser, renderUser, bindLogout, getSurveyKey } from './common.js';

const user = requireUser();
if (!user) throw new Error('Sesión requerida');
renderUser();
bindLogout();

const key = getSurveyKey();
const survey = surveys[key] || surveys.autos;
document.body.classList.add(survey.bodyClass);
document.querySelector('[data-survey-title]').textContent = survey.label;

const form = document.querySelector('#surveyForm');
const container = document.querySelector('#questions');
const timerEl = document.querySelector('[data-timer]');
const messageEl = document.querySelector('[data-survey-message]');

survey.questions.forEach((q, index) => {
  const questionCard = document.createElement('section');
  questionCard.className = 'question-card';
  questionCard.setAttribute('aria-labelledby', `question-${q.id}`);
  questionCard.innerHTML = `<h2 class="question-title" id="question-${q.id}"><span>${index + 1}</span><span class="question-text">${q.text}</span></h2>`;
  q.options.forEach(([id, text]) => {
    const label = document.createElement('label');
    label.className = 'option';
    label.innerHTML = `<input type="radio" name="q${q.id}" value="${id}" data-text="${text}"><span class="radio-ui"></span><span>${text}</span>`;
    questionCard.appendChild(label);
  });
  container.appendChild(questionCard);
});

const allResponses = JSON.parse(localStorage.getItem(survey.storageKey)) || [];
const hasCompleted = survey.questions.every(q => allResponses.some(r => r.nombre === user.nombre && r.respuestaCorrectaId?.startsWith(`R${q.id}`)));
if (hasCompleted) {
  alert(`Has realizado la encuesta ${survey.label}, no puedes volver a realizarla, elige otro ítem`);
  window.location.replace('index.html');
  throw new Error('Encuesta ya realizada');
}

let secondsLeft = 120;
let timerId = setInterval(() => {
  secondsLeft -= 1;
  const min = String(Math.floor(secondsLeft / 60)).padStart(2,'0');
  const sec = String(secondsLeft % 60).padStart(2,'0');
  timerEl.textContent = `${min}:${sec}`;
  if (secondsLeft <= 0) {
    clearInterval(timerId);
    messageEl.textContent = 'Se terminó el tiempo de respuesta.';
    form.querySelectorAll('input,button').forEach(el => el.disabled = true);
  }
}, 1000);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const selected = survey.questions.map(q => form.querySelector(`input[name="q${q.id}"]:checked`));
  if (selected.some(item => !item)) {
    messageEl.textContent = 'Debes responder las 5 preguntas antes de finalizar.';
    messageEl.className = 'form-message error';
    return;
  }

  const updated = JSON.parse(localStorage.getItem(survey.storageKey)) || [];
  selected.forEach(input => {
    updated.push({
      nombre: user.nombre,
      ciudad: user.ciudad,
      pais: user.pais,
      respuestaCorrectaId: input.value,
      respuestaCorrectaTexto: input.dataset.text,
      survey: key,
      answeredAt: new Date().toISOString()
    });
  });
  localStorage.setItem(survey.storageKey, JSON.stringify(updated));
  clearInterval(timerId);
  window.location.href = `resultados.html?tipo=${key}&vista=mis-respuestas`;
});
