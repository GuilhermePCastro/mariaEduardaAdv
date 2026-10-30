/**
 * ============================================================================
 * SCRIPT PRINCIPAL DE INTERATIVIDADE E PERFORMANCE
 * Dra. Maria Eduarda Roeeker | Advocacia Cível e Direito de Família
 * ============================================================================
 * Funcionalidades:
 * 1. Animações de entrada via IntersectionObserver (threshold: 0.15 + unobserve)
 * 2. Controle acessível do Menu Mobile (Hambúrguer Toggle, ARIA e tecla ESC)
 * 3. Efeito dinâmico de sombra e contraste no Header Fixo ao rolar a página
 * 4. Filtro interativo de categorias de artigos (artigos.html)
 * 5. Envio estruturado do formulário de contato direto para o WhatsApp (contato.html)
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  iniciarAnimacoesScroll();
  iniciarMenuMobile();
  iniciarControleHeaderScroll();
  iniciarFiltroArtigos();
  iniciarFormularioContato();
});

/**
 * 1. Revelação suave de elementos durante o scroll com IntersectionObserver
 */
function iniciarAnimacoesScroll() {
  const elementosAnimaveis = document.querySelectorAll(
    '.animar-cima, .animar-esquerda, .animar-direita'
  );

  if (!elementosAnimaveis.length) return;

  if (!('IntersectionObserver' in window)) {
    elementosAnimaveis.forEach((el) => el.classList.add('visivel'));
    return;
  }

  const opcoesObserver = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visivel');
        obs.unobserve(entry.target);
      }
    });
  }, opcoesObserver);

  elementosAnimaveis.forEach((el) => observer.observe(el));
}

/**
 * 2. Menu Mobile Responsivo (Toggle, Acessibilidade ARIA e Fechamento Automático)
 */
function iniciarMenuMobile() {
  const botaoMenu = document.getElementById('mobile-menu-btn');
  const menuMobile = document.getElementById('mobile-menu');
  const iconeAbrir = document.getElementById('menu-icon-open');
  const iconeFechar = document.getElementById('menu-icon-close');

  if (!botaoMenu || !menuMobile) return;

  const alternarMenu = (forcarFechamento = false) => {
    const estaAberto = botaoMenu.getAttribute('aria-expanded') === 'true';
    const novoEstado = forcarFechamento ? false : !estaAberto;

    botaoMenu.setAttribute('aria-expanded', String(novoEstado));

    if (novoEstado) {
      menuMobile.classList.remove('hidden');
      iconeAbrir?.classList.add('hidden');
      iconeFechar?.classList.remove('hidden');
    } else {
      menuMobile.classList.add('hidden');
      iconeAbrir?.classList.remove('hidden');
      iconeFechar?.classList.add('hidden');
    }
  };

  botaoMenu.addEventListener('click', () => alternarMenu(false));

  const linksMobile = menuMobile.querySelectorAll('a');
  linksMobile.forEach((link) => {
    link.addEventListener('click', () => alternarMenu(true));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      alternarMenu(true);
    }
  });
}

/**
 * 3. Controle do Header Fixo no Scroll
 */
function iniciarControleHeaderScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;

  const atualizarHeader = () => {
    if (window.scrollY > 24) {
      header.classList.add('shadow-xl', 'bg-[#3B2726]/95');
      header.classList.remove('bg-[#4A3231]/90');
    } else {
      header.classList.remove('shadow-xl', 'bg-[#3B2726]/95');
      header.classList.add('bg-[#4A3231]/90');
    }
  };

  window.addEventListener('scroll', atualizarHeader, { passive: true });
  atualizarHeader();
}

/**
 * 4. Filtro de Artigos por Categoria (artigos.html)
 */
function iniciarFiltroArtigos() {
  const botoesFiltro = document.querySelectorAll('.filtro-artigo');
  const cardsArtigo = document.querySelectorAll('.card-artigo');

  if (!botoesFiltro.length || !cardsArtigo.length) return;

  botoesFiltro.forEach((botao) => {
    botao.addEventListener('click', () => {
      const categoriaSelecionada = botao.getAttribute('data-filter');

      // Atualiza estado visual dos botões
      botoesFiltro.forEach((btn) => {
        btn.classList.remove('bg-[#815F5E]', 'text-[#E8DEDD]');
        btn.classList.add('bg-white', 'text-[#4A3231]');
      });
      botao.classList.remove('bg-white', 'text-[#4A3231]');
      botao.classList.add('bg-[#815F5E]', 'text-[#E8DEDD]');

      // Filtra os cards
      cardsArtigo.forEach((card) => {
        const categoriaCard = card.getAttribute('data-category');
        if (categoriaSelecionada === 'todos' || categoriaCard === categoriaSelecionada) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/**
 * 5. Envio Estruturado do Formulário de Contato Direto para o WhatsApp (contato.html)
 */
function iniciarFormularioContato() {
  const formulario = document.getElementById('form-contato-juridico');
  if (!formulario) return;

  formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome')?.value.trim() || '';
    const whatsapp = document.getElementById('whatsapp')?.value.trim() || '';
    const area = document.getElementById('area')?.value || '';
    const modalidade = document.getElementById('modalidade')?.value || '';
    const mensagem = document.getElementById('mensagem')?.value.trim() || '';

    const textoMensagem = [
      `Olá, Dra. Maria Eduarda! Vim pelo site e gostaria de agendar uma consulta.`,
      ``,
      `*Nome:* ${nome}`,
      `*WhatsApp:* ${whatsapp}`,
      `*Área da Demanda:* ${area}`,
      `*Preferência:* ${modalidade}`,
      `*Resumo do Caso:* ${mensagem}`,
    ].join('\n');

    const urlWhatsApp = `https://wa.me/5511999999999?text=${encodeURIComponent(textoMensagem)}`;
    window.open(urlWhatsApp, '_blank', 'noopener,noreferrer');
  });
}
