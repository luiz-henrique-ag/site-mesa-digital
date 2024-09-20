import { geraGrafico } from './grafico.js'

document.addEventListener('DOMContentLoaded', () => {
  new Promise(resolve => setTimeout(async () => {
    await geraGrafico();
    resolve();
  }, 3000));
})