import { surveys } from './data.js';
import { requireUser, renderUser, bindLogout, getSurveyKey } from './common.js';

const user = requireUser();
if (!user) throw new Error('Sesión requerida');
renderUser();
bindLogout();

const key = getSurveyKey();
const survey = surveys[key] || surveys.autos;
const params = new URLSearchParams(window.location.search);
const view = params.get('vista') || 'mis-respuestas';
document.body.classList.add(survey.bodyClass);
document.querySelector('[data-results-title]').textContent = survey.label;

const data = JSON.parse(localStorage.getItem(survey.storageKey)) || [];
const content = document.querySelector('#resultsContent');
const mineBtn = document.querySelector('[data-view-mine]');
const statsBtn = document.querySelector('[data-view-stats]');
mineBtn.href = `resultados.html?tipo=${key}&vista=mis-respuestas`;
statsBtn.href = `resultados.html?tipo=${key}&vista=estadisticas`;
document.querySelector('[data-back-survey]').href = `encuesta.html?tipo=${key}`;

if (view === 'estadisticas') {
  const counts = data.reduce((acc, row) => {
    acc[row.respuestaCorrectaTexto] = (acc[row.respuestaCorrectaTexto] || 0) + 1;
    return acc;
  }, {});
  const entries = Object.entries(counts).sort((a,b) => b[1]-a[1]);
  const total = data.length || 1;
  content.innerHTML = `<div class="panel"><h2>Ranking de respuestas</h2><div class="table-wrap"><table><thead><tr><th>Respuesta</th><th>Cantidad</th><th>Porcentaje</th></tr></thead><tbody>${entries.map(([text,count]) => `<tr><td>${text}</td><td>${count}</td><td>${((count/total)*100).toFixed(2)}%</td></tr>`).join('') || '<tr><td colspan="3">Aún no hay respuestas registradas.</td></tr>'}</tbody></table></div></div>`;
  statsBtn.setAttribute('aria-current','page');
} else {
  const mine = data.filter(row => row.nombre === user.nombre);
  content.innerHTML = `<div class="panel"><h2>Tus respuestas</h2>${mine.length ? `<ol class="answer-list">${mine.map(row => `<li>${row.respuestaCorrectaTexto}</li>`).join('')}</ol>` : '<p>Aún no has respondido esta encuesta.</p>'}</div>`;
  mineBtn.setAttribute('aria-current','page');
}
