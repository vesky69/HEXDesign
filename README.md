# 🎨 HEXDesign — Gerador de Paletas de Cores

Um gerador de paletas de cores minimalista, rápido e responsivo, inspirado em ferramentas como o Coolors. Desenvolvido com HTML, CSS e JavaScript puro (Vanilla JS).

🔗 **[Acesse o projeto online no GitHub Pages](https://vesky69.github.io/HEXDesign/)**

---

## ✨ Funcionalidades

* **Geração Instantânea:** Crie combinações de 5 cores clicando no botão **"Gerar Paleta"** ou pressionando a barra de espaço (`Espaço`).
* **Travar Cores:** Gostou de uma cor específica? Clique em **🔓 Travar** para mantê-la fixa enquanto gera novas combinações nas outras colunas.
* **Cópia Rápida:** Clique em qualquer código HEX para copiá-lo diretamente para a área de transferência, com feedback visual na tela (toast).
* **Contraste Automático:** O sistema calcula a luminância de cada cor gerada e ajusta automaticamente a cor do texto (branco ou escuro) para garantir legibilidade.
* **Design Responsivo:** Layout em colunas no desktop que se adapta para linhas horizontais em telas menores (mobile).

---

## 🚀 Tecnologias Utilizadas

* **HTML5:** Estrutura semântica da aplicação.
* **CSS3:** Estilização moderna utilizando CSS Grid, Flexbox, variáveis de transição e responsividade (`@media queries`).
* **JavaScript (ES6+):** Manipulação dinâmica do DOM, eventos de teclado, cálculo de luminância RGB e uso da `Clipboard API`.

---

## 💻 Como rodar o projeto localmente

Como o projeto não utiliza dependências externas ou bundlers, você pode rodá-lo diretamente no navegador:

1. Clone este repositório:
   ```bash
   git clone https://github.com/vesky69/HEXDesign
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd HEXDesign
   ```
3. Abra o arquivo `index.html` no seu navegador de preferência (ou utilize a extensão *Live Server* no VS Code).

---

## 📁 Estrutura de Arquivos

```text
├── index.html   # Estrutura principal e toast de notificação
├── style.css    # Estilos, grid das cores e regras de responsividade
└── script.js    # Lógica de geração HEX, travamento, contraste e cópia
```

---

## 🔮 Próximos Passos (Roadmap)

* [ ] Salvar paletas favoritas no `localStorage`.
* [ ] Exportar paleta em formatos variados (CSS Variables, JSON, imagem PNG).
* [ ] Opção para editar manualmente o código HEX ou ajustar tons via seletor.
