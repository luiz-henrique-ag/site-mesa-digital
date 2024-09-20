export const geraGrafico = async () => {
  const request = await axios.get('/base-de-dados/dados/csv')
  const data = []
  for (let i = 0; i < request.data.length; i++) {
    data.push({ date: new Date(request.data[i]['date']), value: request.data[i]['value'] })
  }

  // Definir as margens e dimensões
  const margin = { top: 20, right: 30, bottom: 30, left: 40 },
    width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

  const svg = d3.select('#chart')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

  // Definir escalas
  const x = d3.scaleTime()
    .domain(d3.extent(data, d => d.date))
    .range([0, width]);

  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .nice()
    .range([height, 0]);

  // Eixos
  svg.append('g')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x));

  svg.append('g')
    .call(d3.axisLeft(y));

  // Definir a linha
  const line = d3.line()
    .x(d => x(d.date))
    .y(d => y(d.value));

  // Adicionar a linha ao SVG
  svg.append('path')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke', 'steelblue')
    .attr('stroke-width', 1.5)
    .attr('d', line);
}