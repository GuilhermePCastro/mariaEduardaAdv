# ⚖️ Dra. Maria Eduarda Roeeker | Advocacia Cível & Direito de Família

[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Design: Responsive UI](https://img.shields.io/badge/UI%2FUX-Responsive-815F5E?style=for-the-badge)](https://developer.mozilla.org/pt-BR/docs/Learn/CSS/CSS_layout/Responsive_Design)
[![License: MIT](https://img.shields.io/badge/License-MIT-C9AB6B.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> Website institucional multipágina de alta conversão desenvolvido para a **Dra. Maria Eduarda Roeeker**, especialista em **Direito Civil e Direito das Famílias**, com foco em acolhimento empático, defesa estratégica de mulheres e mães, e proteção integral patrimonial e dos filhos.

---

## 📌 Sumário

- [Visão Geral](#-visão-geral)
- [Páginas e Estrutura de Conteúdo](#-páginas-e-estrutura-de-conteúdo)
- [Identidade Visual e Design System](#-identidade-visual-e-design-system)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Diferenciais de Performance e SEO](#-diferenciais-de-performance-e-seo)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Rodar Localmente](#-como-rodar-localmente)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Autor e Contato](#-autor-e-contato)

---

## 🌟 Visão Geral

Este projeto foi planejado e concebido para entregar uma experiência digital premium para a advocacia contemporânea, equilibrando **elegância sóbria**, **acolhimento humano** e **alta taxa de conversão**.

### Principais Pilares:
- **Autoridade e Sofisticação**: Layout estruturado com paleta nobre (Marsala Profundo, Dourado e Marfim Off-White), transmitindo segurança jurídica e credibilidade imediata.
- **Foco em Conversão (CRO)**: Pontos de contato estratégicos para WhatsApp e formulários em todas as páginas, com mensagens pré-formatadas para facilitar o agendamento de consultas.
- **Acessibilidade e Fluidez**: Microinterações elegantes, cards com efeito *glassmorphism* e animações graduais no scroll gerenciadas por script nativo leve.
- **Conformidade Ética & LGPD**: Avisos claros de transparência para portfólio institucional em conformidade ética e página dedicada à Lei Geral de Proteção de Dados (LGPD).

---

## 🎯 Páginas e Estrutura de Conteúdo

O site conta com arquitetura multipágina completa e responsiva:

1. **Início (`index.html`)**:
   - Dobra principal (Hero) com proposta de valor empática e card flutuante em *glassmorphism*.
   - Seção de áreas de atuação prioritárias com badges douradas.
   - Prova de autoridade, pilares de atendimento humanizado e sigilo profissional.
   - Avaliações e relatos de clientes com layout em cards.
   - Seção de Perguntas Frequentes (FAQ) com acordeão interativo.
   - Chamada final de alta conversão para WhatsApp.

2. **Sobre a Advogada (`sobre.html`)**:
   - Apresentação da trajetória acadêmica, valores inegociáveis e compromisso com o atendimento humanizado.
   - Galeria institucional e pilares de atuação ética.

3. **Áreas de Atuação (`areas-de-atuacao.html`)**:
   - Detalhamento aprofundado dos serviços jurídicos: Pensão Alimentícia, Guarda e Convivência, Divórcio e Dissolução de União Estável, Partilha de Bens, Inventário e Planejamento Sucessório, e Direito Civil Contratual.

4. **Artigos & Conteúdo Jurídico (`artigos.html`)**:
   - Central de artigos educativos para conscientização de direitos civis e familiares, com busca, filtros por categoria e tempo estimado de leitura.

5. **Contato & Agendamento (`contato.html`)**:
   - Canais diretos de atendimento prioritário via WhatsApp, telefone institucional, e-mail e formulário de contato integrado.

6. **Política de Privacidade & LGPD (`politica-de-privacidade.html`)**:
   - Termos formais de tratamento de dados, conformidade com a Lei Federal nº 13.709/2018 (LGPD), sigilo profissional da advocacia e direitos dos titulares.

---

## 🎨 Identidade Visual e Design System

- **Paleta de Cores Institucional**:
  - `Marsala Noite / Profundo` (`#261818`, `#3B2726`, `#815F5E`): Base nobre, refinada e acolhedora.
  - `Ouro Médio & Claro` (`#BF9F64`, `#C9AB6B`): Detalhes refinados, selos, ícones e gradientes que denotam excelência e prestígio.
  - `Off-White Suave` (`#E8DEDD`, `#F4EEEE`): Leitura confortável com alto contraste sem fadiga visual.
  - `Esmeralda Ação` (`#059669`, `#047857`): Destaque psicológico imediato para ações no WhatsApp.
- **Tipografia**:
  - **Títulos & Citações**: *Playfair Display* (Serifada clássica e imponente).
  - **Textos Correntes & Interface**: *Inter* (Sem serifa com alta legibilidade técnica em dispositivos móveis).
- **Glassmorphism**:
  - Cards translúcidos (`backdrop-filter: blur(14px)`) com bordas sutis e sombras profundas.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico**: Tags semânticas (`<header>`, `<main>`, `<article>`, `<section>`, `<footer>`) focadas em SEO técnico e acessibilidade (a11y).
- **Tailwind CSS (v4)**: Motor de estilos utilitários de última geração, utilizando `@theme`, gradientes institucionais e compilação ultra-rápida via `@tailwindcss/cli`.
- **JavaScript Moderno (ES6+)**:
  - Menu mobile responsivo e controle de estado do header fixo.
  - Animações escalonadas de scroll com `IntersectionObserver` sem dependências pesadas.
  - FAQ interativo com expansão fluida.
- **Node.js & npm**: Pipeline de desenvolvimento e empacotamento de assets.

---

## ⚡ Diferenciais de Performance e SEO

- **Otimização de Imagens**: Formato moderno **WebP** com compressão de alta fidelidade para retratos e banners institucionais.
- **Carregamento Otimizado**: Dobra superior (Hero) com `fetchpriority="high"` e elementos secundários com `loading="lazy"`.
- **SEO & Metadados**:
  - Metatags Open Graph completas (`og:title`, `og:description`, `og:image`) configuradas para visualização enriquecida no WhatsApp, Facebook e LinkedIn.
  - Configuração de cabeçalhos semânticos e diretrizes amigáveis para indexação em buscadores.
- **Responsividade Total**: Layout testado e adaptado para resoluções Mobile (320px a 480px), Tablets (640px a 1024px) e Desktops ultrawide.

---

## 📂 Estrutura do Projeto

```plaintext
mariaEduardaAdv/
├── assests/
│   ├── icone/                 # Ícones em formato vetorial e raster
│   └── images/                # Fotografias institucionais e retratos em .webp
├── css/
│   ├── index.css              # Ponto de entrada do Tailwind v4 com temas e variáveis
│   └── output.css             # CSS final compilado e minificado para produção
├── script/
│   ├── animations.js          # Observer de animações, controle de menu e interações
│   └── README.md              # Documentação base de referência
├── .gitignore                 # Exclusões de ambiente e dependências locais
├── areas-de-atuacao.html      # Página de serviços e especialidades
├── artigos.html               # Página de blog e publicações jurídicas
├── contato.html               # Página de canais de atendimento e agendamento
├── index.html                 # Página inicial (Home / Landing Page)
├── package.json               # Configurações do projeto e scripts npm
├── package-lock.json          # Árvore de dependências trancada
├── politica-de-privacidade.html # Política de Privacidade e termos da LGPD
├── README.md                  # Este arquivo de documentação
├── robots.txt                 # Diretrizes para indexadores de busca
└── sobre.html                 # Página sobre a fundadora e trajetória
```

---

## 💻 Como Rodar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (versão 18+ recomendada)
- Git instalado

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/GuilhermePCastro/maria-eduarda-adv.git
   cd mariaEduardaAdv
   ```

2. **Instale as dependências de desenvolvimento:**
   ```bash
   npm install
   ```

3. **Inicie o modo de desenvolvimento do Tailwind (com observador de arquivos):**
   ```bash
   npm run dev
   ```

4. **Abra o site no navegador:**
   - Utilize a extensão **Live Server** no VS Code ou execute:
     ```bash
     npx serve .
     ```
   - Acesse `http://localhost:3000` (ou a porta indicada no terminal).

---

## 📜 Scripts Disponíveis

No arquivo `package.json`:

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o Tailwind CLI no modo `--watch` para compilar o CSS em tempo real a cada salvamento. |
| `npm run build` | Compila e minifica o CSS para produção no caminho `css/output.css`. |

---

## 👨‍💻 Autor e Contato

**Guilherme Castro**  
*Desenvolvedor Web & Analista de Software*

- **WhatsApp**: [+55 (11) 94681-4885](https://wa.me/5511946814885)
- **LinkedIn**: [guilherme-castro-32375916b](https://www.linkedin.com/in/guilherme-castro-32375916b)
- **GitHub**: [@GuilhermePCastro](https://github.com/GuilhermePCastro)
- **E-mail**: [guilhermepcastro.17@gmail.com](mailto:guilhermepcastro.17@gmail.com)

---

Desenvolvido com foco em alta performance e conversão. © 2026 Guilherme Castro.

