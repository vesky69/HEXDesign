const container = document.getElementById('paleta-container');
const btnGerar = document.getElementById('btn-gerar');
const toast = document.getElementById('toast');

// Estado inicial com 5 cores
let cores = [
  { hex: '#264653', travada: false },
  { hex: '#2a9d8f', travada: false },
  { hex: '#e9c46a', travada: false },
  { hex: '#f4a261', travada: false },
  { hex: '#e76f51', travada: false }
];

// Gera um código HEX aleatório de 6 dígitos
function gerarHexAleatorio() {
  const letras = '0123456789ABCDEF';
  let cor = '#';
  for (let i = 0; i < 6; i++) {
    cor += letras[Math.floor(Math.random() * 16)];
  }
  return cor;
}

// Calcula se a cor é clara ou escura para ajustar a cor da fonte
function ehCorClara(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminancia = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminancia > 0.55;
}

// Copia para a área de transferência e mostra o aviso
function copiarHex(hex) {
  navigator.clipboard.writeText(hex);
  toast.textContent = `Copiado: ${hex}`;
  toast.classList.add('mostrar');
  setTimeout(() => toast.classList.remove('mostrar'), 1800);
}

// Atualiza apenas as cores que NÃO estão travadas
function gerarNovaPaleta() {
  cores = cores.map(item => {
    if (item.travada) return item;
    return { hex: gerarHexAleatorio(), travada: false };
  });
  renderizarPaleta();
}

// Desenha as 5 colunas na tela
function renderizarPaleta() {
  container.innerHTML = '';

  cores.forEach((item, index) => {
    const coluna = document.createElement('div');
    coluna.className = 'cor-coluna';
    coluna.style.backgroundColor = item.hex;

    const classeTexto = ehCorClara(item.hex) ? 'texto-escuro' : 'texto-claro';

    // Texto do código HEX
    const hexEl = document.createElement('span');
    hexEl.className = `hex-texto ${classeTexto}`;
    hexEl.textContent = item.hex;
    hexEl.title = 'Clique para copiar';
    hexEl.addEventListener('click', () => copiarHex(item.hex));

    // Botão de travar/destravar
    const btnTravar = document.createElement('button');
    btnTravar.className = `btn-trancar ${classeTexto}`;
    btnTravar.textContent = item.travada ? '🔒 Travada' : '🔓 Travar';
    btnTravar.addEventListener('click', () => {
      cores[index].travada = !cores[index].travada;
      renderizarPaleta();
    });

    coluna.appendChild(hexEl);
    coluna.appendChild(btnTravar);
    container.appendChild(coluna);
  });
}

// Eventos
btnGerar.addEventListener('click', gerarNovaPaleta);

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault(); // Evita rolar a página ou clicar em botão focado
    gerarNovaPaleta();
  }
});

// Inicializa na abertura da página
gerarNovaPaleta();