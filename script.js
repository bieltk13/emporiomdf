/* Empório da Arte MDF — site demonstrativo sem bibliotecas externas.
   WhatsApp: ícone vetorial embutido no HTML; link externo construído apenas no clique. */
'use strict';

const PHONE = '5545999784259';
const STORAGE_KEY = 'emporio-da-arte-lista-orcamento-v1';
const products = [
  {
    id: 'caixa-dobradica',
    name: 'Caixa MDF com dobradiça e fecho',
    short: 'Uma base versátil para decorar ou presentear.',
    description: 'Caixa em MDF cru com dobradiça e fecho metálico, ideal para pintura, personalização e projetos de artesanato.',
    details: 'Caixa 20 × 15 cm; opções e alturas conforme anúncio.',
    category: 'caixas', label: 'Caixas em MDF', tag: 'Versátil',
    image: 'https://down-br.img.susercontent.com/file/br-11134207-820lu-mup3ocfscphdfc',
    fallback: 'assets/img/fallback-caixa.svg',
    url: 'https://shopee.com.br/Caixa-MDF-20x15-com-Dobradi%C3%A7a-e-Fecho-MDF-Cru-i.751074337.11995106596'
  },
  {
    id: 'caixa-floral',
    name: 'Caixa vazada floral Margaridas',
    short: 'Detalhes delicados em corte vazado.',
    description: 'Caixa de MDF cru com desenhos florais vazados na tampa, indicada para lembranças, presentes e artesanato criativo.',
    details: 'MDF cru de 3 mm; confira medidas no anúncio.',
    category: 'caixas', label: 'Caixas em MDF', tag: 'Destaque',
    image: 'https://down-br.img.susercontent.com/file/6362f54b0fbedacd457e391df88c9e84',
    fallback: 'assets/img/fallback-floral.svg',
    url: 'https://shopee.com.br/Caixa-mdf-Vazada-Floral-Margaridas-3mm-cru-i.751074337.15978901784'
  },
  {
    id: 'organizador-gavetas',
    name: 'Organizador de quatro gavetas',
    short: 'Organização com espaço para personalizar.',
    description: 'Organizador em MDF cru com quatro gavetas, útil para pequenos objetos, bijuterias e materiais de artesanato.',
    details: 'Aproximadamente 19 × 19 × 19 cm (A × L × C), conforme anúncio.',
    category: 'organizadores', label: 'Organizadores', tag: 'Prático',
    image: 'https://down-br.img.susercontent.com/file/sg-11134201-22110-71yh823tc1jvb7',
    fallback: 'assets/img/fallback-gavetas.svg',
    url: 'https://shopee.com.br/Caixa-Organizadora-4-Gavetas-19A-X-19L-X-19C-Em-mdf-cru-i.751074337.22605995094'
  },
  {
    id: 'caixa-cha',
    name: 'Caixa de chá com três divisórias',
    short: 'Um detalhe especial para o cantinho do chá.',
    description: 'Caixa de chá em MDF cru com divisórias e detalhe frontal, preparada para receber diferentes técnicas de acabamento.',
    details: '24,5 × 10,5 × 10 cm (C × L × A), conforme anúncio.',
    category: 'organizadores', label: 'Organizadores', tag: '',
    image: 'https://down-br.img.susercontent.com/file/sg-11134201-7rcdp-lrdcfyowvsqg3c',
    fallback: 'assets/img/fallback-cha.svg',
    url: 'https://shopee.com.br/Caixa-De-Ch%C3%A1-Com-vidro-Na-Frente-3-Div.-24-5C-X-10-5L-X-10A-Em-mdf-cru-i.751074337.20099190555'
  },
  {
    id: 'porta-chaves',
    name: 'Porta-chaves com margaridas',
    short: 'Um toque floral e funcional na parede.',
    description: 'Porta-chaves de parede em MDF com recortes de margaridas e ganchos, perfeito para personalização.',
    details: 'Porta-chaves decorativo; consulte as dimensões no anúncio.',
    category: 'decoracao', label: 'Decoração', tag: 'Decorativo',
    image: 'https://down-br.img.susercontent.com/file/sg-11134201-7rdyh-lzfbe4196yje9c',
    fallback: 'assets/img/fallback-chave.svg',
    url: 'https://shopee.com.br/Porta-Chaves-4-Margaridas-Em-mdf-cru-Para-Artesanato-i.751074337.23593230590'
  },
  {
    id: 'caixa-remedio',
    name: 'Caixa para remédios com fecho',
    short: 'Organização e personalização no dia a dia.',
    description: 'Caixa em MDF cru com dobradiça, fecho e passagens para fita, ideal para um projeto personalizado.',
    details: '30 × 20 × 15 cm (C × L × A), conforme anúncio.',
    category: 'caixas', label: 'Caixas em MDF', tag: '',
    image: 'https://down-br.img.susercontent.com/file/sg-11134201-7rbm6-lly0cmy2uc6b81',
    fallback: 'assets/img/fallback-caixa.svg',
    url: 'https://shopee.com.br/Caixa-de-Rem%C3%A9dio-dobradi%C3%A7a-Passa-Fita-15A-X-20L-X-30C-Em-mdf-cru-i.751074337.23596931148'
  },
  {
    id: 'caixa-coelho',
    name: 'Caixa box coelho da Páscoa',
    short: 'Para lembrancinhas com personalidade.',
    description: 'Caixinha de MDF cru com desenho de coelho, voltada para lembranças e projetos temáticos de Páscoa.',
    details: '8 × 8 × 8,5 cm (C × L × A), conforme anúncio.',
    category: 'sazonais', label: 'Datas especiais', tag: 'Sazonal',
    image: 'https://down-br.img.susercontent.com/file/sg-11134201-23020-q5z38niqt4mvb5',
    fallback: 'assets/img/fallback-coelho.svg',
    url: 'https://shopee.com.br/Caixa-Vazada-Cara-De-Coelho-8A-X-8L-X-8C-Em-mdf-cru-i.751074337.23621705483'
  },
  {
    id: 'cesta-esmaltes',
    name: 'Cesta organizadora para esmaltes',
    short: 'Compartimentos pensados para organizar.',
    description: 'Cesta em MDF cru com divisórias e uma gaveta, planejada para guardar esmaltes e acessórios.',
    details: '24 divisórias e 1 gaveta; 25 × 20 × 22 cm (A × L × C), conforme anúncio.',
    category: 'organizadores', label: 'Organizadores', tag: 'Organização',
    image: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lwt2w1k5nvqua4',
    fallback: 'assets/img/fallback-esmaltes.svg',
    url: 'https://shopee.com.br/Cesta-Para-Esmalte-pequena---24-Div.---1-gaveta----Vazada-Esmaltes-na-frente----25A-X-20L-X-22C---Em-mdf-cru-i.751074337.22192584322'
  }
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const productById = new Map(products.map(p => [p.id, p]));
const state = { category: 'todos', search: '', list: loadList(), open: null, selectedProduct: null, priorFocus: null };
let toastTimeout;

function loadList() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return {};
    return Object.fromEntries(Object.entries(raw)
      .filter(([id, n]) => productById.has(id) && Number.isInteger(n) && n > 0)
      .map(([id, n]) => [id, Math.min(99, n)]));
  } catch (_) { return {}; }
}
function saveList() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.list)); } catch (_) {} }
function icon(name) { return `<svg class="icon" aria-hidden="true"><use href="#ico-${name}"></use></svg>`; }
function escapeHtml(v) { return String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function imgFor(p, alt, extraClass = '') {
  return `<img class="${extraClass}" src="${escapeHtml(p.fallback)}" data-remote="${escapeHtml(p.image)}" data-fallback="${escapeHtml(p.fallback)}" alt="${escapeHtml(alt)}" loading="lazy">`;
}
function hydrateRemoteImages(root = document) {
  $$('img[data-fallback]', root).forEach(img => {
    if (!img.dataset.remote) img.dataset.remote = img.getAttribute('src');
    if (img.dataset.remoteLoaded === '1') return;
    img.dataset.remoteLoaded = '1';
    const remote = img.dataset.remote;
    img.src = img.dataset.fallback; // Ilustração local enquanto o anúncio não carregar.
    if (!/^https:\/\//.test(remote)) return;
    const preloader = new Image();
    preloader.onload = () => {
      if (img.isConnected && img.dataset.remote === remote) {
        img.dataset.fallbackUsed = '0';
        img.src = remote;
      }
    };
    preloader.onerror = () => {}; // Mantém ilustração em caso de bloqueio externo.
    preloader.src = remote;
  });
}
function totalCount() { return Object.values(state.list).reduce((s, n) => s + n, 0); }
function normalizedSearch(value) { return String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR'); }
function showToast(text) {
  $('#toast-text').textContent = text;
  $('#toast').hidden = false;
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => { $('#toast').hidden = true; }, 2600);
}
function imageErrorHandler(event) {
  const img = event.target;
  if (img.tagName !== 'IMG' || !img.dataset.fallback || img.dataset.fallbackUsed === '1') return;
  img.dataset.fallbackUsed = '1';
  img.src = img.dataset.fallback;
}
document.addEventListener('error', imageErrorHandler, true);

function renderProducts() {
  const search = normalizedSearch(state.search.trim());
  const filtered = products.filter(p => (state.category === 'todos' || state.category === p.category)
    && (!search || `${p.name} ${p.short} ${p.description} ${p.label}`.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR').includes(search)));
  const grid = $('#products-grid');
  grid.innerHTML = filtered.map(p => `<article class="product-card" data-id="${p.id}">
    <div class="product-media">${imgFor(p, p.name)}${p.tag ? `<span class="product-tag">${escapeHtml(p.tag)}</span>` : ''}
      <button type="button" class="quick-view" data-action="details" data-id="${p.id}" aria-label="Ver detalhes de ${escapeHtml(p.name)}" title="Ver detalhes">${icon('up-right')}</button>
    </div>
    <div class="product-body"><span class="product-category">${escapeHtml(p.label)}</span><h3 class="product-name">${escapeHtml(p.name)}</h3>
      <p class="product-description">${escapeHtml(p.short)}</p>
      <div class="product-actions"><button type="button" class="add-to-quote" data-action="add" data-id="${p.id}">${icon('plus')} Adicionar à lista</button><button type="button" class="product-details-link" data-action="details" data-id="${p.id}">Detalhes</button></div>
    </div>
  </article>`).join('');
  $('#no-results').hidden = filtered.length !== 0;
  hydrateRemoteImages(grid);
}
function refreshListUI() {
  const total = totalCount();
  $('#header-cart-count').textContent = String(total);
  $('#header-cart-count').hidden = total === 0;
  $('#header-cart').setAttribute('aria-label', `Abrir lista de orçamento, ${total} ${total === 1 ? 'produto' : 'produtos'}`);
  $('#float-quote-count').textContent = String(total);
  $('#drawer-count').textContent = `(${total})`;
  $('#send-quote').disabled = total === 0;
  $('#clear-list').disabled = total === 0;
  const items = $('#quote-items');
  items.innerHTML = Object.entries(state.list).map(([id, qty]) => {
    const p = productById.get(id);
    if (!p) return '';
    return `<div class="quote-item" data-id="${id}">${imgFor(p, p.name)}<div><h3>${escapeHtml(p.name)}</h3><small>${escapeHtml(p.label)}</small>
      <div class="quote-controls"><div class="quantity"><button type="button" data-change="-1" data-id="${id}" aria-label="Diminuir quantidade de ${escapeHtml(p.name)}">${icon('minus')}</button><span aria-label="Quantidade">${qty}</span><button type="button" data-change="1" data-id="${id}" aria-label="Aumentar quantidade de ${escapeHtml(p.name)}" ${qty >= 99 ? 'disabled' : ''}>${icon('plus')}</button></div><button type="button" class="remove-item" data-remove="${id}">Remover</button></div>
    </div></div>`;
  }).join('');
  $('#quote-empty').hidden = total > 0;
  hydrateRemoteImages(items);
}
function changeQty(id, delta) {
  if (!productById.has(id)) return;
  const n = (state.list[id] || 0) + delta;
  if (n <= 0) delete state.list[id];
  else state.list[id] = Math.min(99, n);
  saveList(); refreshListUI();
}
function addItem(id) {
  if (!productById.has(id)) return;
  if ((state.list[id] || 0) >= 99) { showToast('Limite de 99 unidades por item.'); return; }
  changeQty(id, 1); showToast('Produto adicionado à sua lista.');
}
function openOverlay(type) {
  if (state.open) closeOverlay(false);
  state.priorFocus = document.activeElement;
  state.open = type;
  $('#overlay').hidden = false;
  $('#quote-drawer').hidden = type !== 'drawer';
  $('#product-modal').hidden = type !== 'modal';
  $('#quote-drawer').setAttribute('aria-hidden', String(type !== 'drawer'));
  $('#product-modal').setAttribute('aria-hidden', String(type !== 'modal'));
  document.body.classList.add('no-scroll');
  const focusTarget = type === 'drawer' ? $('#quote-drawer [data-close-overlay]') : $('#product-modal [data-close-overlay]');
  focusTarget.focus();
}
function closeOverlay(restoreFocus = true) {
  $('#overlay').hidden = true;
  $('#quote-drawer').hidden = true;
  $('#product-modal').hidden = true;
  $('#quote-drawer').setAttribute('aria-hidden', 'true');
  $('#product-modal').setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
  state.open = null;
  if (restoreFocus && state.priorFocus && document.contains(state.priorFocus)) state.priorFocus.focus();
}
function openProduct(id) {
  const p = productById.get(id);
  if (!p) return;
  state.selectedProduct = id;
  $('#modal-category').textContent = p.label.toUpperCase();
  $('#modal-title').textContent = p.name;
  $('#modal-description').textContent = p.description;
  $('#modal-details').textContent = p.details;
  const modalImage = $('#modal-image');
  modalImage.dataset.fallback = p.fallback;
  modalImage.dataset.remote = p.image;
  delete modalImage.dataset.remoteLoaded;
  delete modalImage.dataset.fallbackUsed;
  modalImage.src = p.fallback;
  modalImage.alt = p.name;
  $('#modal-shopee').href = p.url;
  hydrateRemoteImages($('#product-modal'));
  openOverlay('modal');
}
function openWhatsApp(message) {
  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
  // Um link real evita pop-ups duplicados causados pelo retorno null de window.open com noopener.
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  link.remove();
}
function sendQuote() {
  const chosen = Object.entries(state.list).filter(([id, qty]) => productById.has(id) && qty > 0);
  if (!chosen.length) return;
  const type = $('#buyer-type').value;
  const notes = $('#buyer-notes').value.trim();
  const lines = chosen.map(([id, qty], i) => `${i + 1}. ${productById.get(id).name} — ${qty} unidade(s)`);
  const message = [
    'Olá! Gostaria de solicitar um orçamento ao Empório da Arte MDF.',
    '',
    `Tipo de compra: ${type}`,
    '',
    'Produtos de interesse:',
    ...lines,
    ...(notes ? ['', `Observações: ${notes}`] : []),
    '',
    'Podem confirmar valores, disponibilidade, medidas, prazo e entrega?'
  ].join('\n');
  openWhatsApp(message);
}
function closeMobileMenu() {
  $('#main-nav').classList.remove('is-open');
  $('#menu-toggle').setAttribute('aria-expanded','false');
  $('#menu-toggle').setAttribute('aria-label','Abrir menu');
  $('#menu-icon use').setAttribute('href','#ico-menu');
}
function setupEvents() {
  $$('.chip').forEach(button => button.addEventListener('click', () => {
    state.category = button.dataset.category;
    $$('.chip').forEach(c => { c.classList.toggle('active', c === button); c.setAttribute('aria-pressed', String(c === button)); });
    renderProducts();
  }));
  $('#catalog-search').addEventListener('input', event => { state.search = event.target.value; renderProducts(); });
  $('#clear-filters').addEventListener('click', () => {
    state.category = 'todos'; state.search = ''; $('#catalog-search').value = '';
    $$('.chip').forEach(c => { const active = c.dataset.category === 'todos'; c.classList.toggle('active', active); c.setAttribute('aria-pressed', String(active)); });
    renderProducts();
  });
  $('#products-grid').addEventListener('click', event => {
    const button = event.target.closest('[data-action]');
    if (!button) return;
    if (button.dataset.action === 'details') openProduct(button.dataset.id);
    if (button.dataset.action === 'add') addItem(button.dataset.id);
  });
  $('#header-cart').addEventListener('click', () => openOverlay('drawer'));
  $('#float-quote').addEventListener('click', () => openOverlay('drawer'));
  $('#modal-add').addEventListener('click', () => {
    if (state.selectedProduct) addItem(state.selectedProduct);
  });
  $('#overlay').addEventListener('click', () => closeOverlay());
  $$('[data-close-overlay]').forEach(b => b.addEventListener('click', () => closeOverlay()));
  $('#quote-items').addEventListener('click', event => {
    const changer = event.target.closest('[data-change]');
    const remover = event.target.closest('[data-remove]');
    if (changer) changeQty(changer.dataset.id, Number(changer.dataset.change));
    if (remover) { changeQty(remover.dataset.remove, -999); showToast('Produto removido.'); }
  });
  $('#drawer-go-products').addEventListener('click', () => { closeOverlay(false); $('#produtos').scrollIntoView({behavior:'smooth'}); });
  $('#clear-list').addEventListener('click', () => { state.list = {}; saveList(); refreshListUI(); showToast('Lista limpa.'); });
  $('#send-quote').addEventListener('click', sendQuote);
  $('#menu-toggle').addEventListener('click', () => {
    const menu = $('#main-nav');
    const open = menu.classList.toggle('is-open');
    $('#menu-toggle').setAttribute('aria-expanded', String(open));
    $('#menu-toggle').setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    $('#menu-icon use').setAttribute('href', open ? '#ico-x' : '#ico-menu');
  });
  $$('.main-nav a').forEach(a => a.addEventListener('click', closeMobileMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') { if (state.open) closeOverlay(); else closeMobileMenu(); }
    if (event.key !== 'Tab' || !state.open) return;
    const activeEl = state.open === 'drawer' ? $('#quote-drawer') : $('#product-modal');
    const focusable = $$('button:not(:disabled), a[href], input:not(:disabled), textarea:not(:disabled), select:not(:disabled)', activeEl).filter(e => e.getClientRects().length);
    if (!focusable.length) return;
    const first = focusable[0], last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
  $('#back-top').addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
  const onScroll = () => {
    $('.site-header').classList.toggle('is-scrolled', window.scrollY > 12);
    $('#back-top').classList.toggle('is-visible', window.scrollY > 720);
  };
  addEventListener('scroll', onScroll, {passive:true}); onScroll();
  if ('IntersectionObserver' in window) {
    const sections = ['inicio','produtos','atacado','cotacao','sobre','avaliacoes','contato']
      .map(id => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $$('.main-nav a').forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === `#${entry.target.id}`));
        }
      });
    }, {rootMargin:'-20% 0px -65% 0px',threshold:0});
    sections.forEach(section => observer.observe(section));
  }
}

$('#current-year').textContent = String(new Date().getFullYear());
$('#total-products').textContent = String(products.length);
renderProducts();
refreshListUI();
hydrateRemoteImages();
setupEvents();


/* V2: Cotação expressa por WhatsApp. Nenhum dado é enviado ao servidor. */
(function setupQuickQuote(){
  const form=document.getElementById('rfq-form');
  if (!form) return;
  const result=document.getElementById('rfq-result');
  const error=document.getElementById('rfq-error');
  const fields=['rfq-profile','rfq-name','rfq-product','rfq-quantity','rfq-location','rfq-extra'];
  const el=id=>document.getElementById(id);
  const get=id=>el(id).value.trim();
  const formatList=()=>Object.entries(state.list).filter(([id,n])=>productById.has(id)&&n>0)
    .map(([id,n],i)=>`${i+1}. ${productById.get(id).name} — ${n} unidade(s)`);
  function refreshCount(){
    const n=totalCount();el('rfq-list-count').textContent=String(n);
    const c=el('rfq-include-list');c.disabled=n===0;
    if (n===0) c.checked=false;
  }
  function clearErrors(){
    error.hidden=true;
    fields.forEach(id=>el(id).classList.remove('rfq-invalid'));
  }
  function showError(message,id){
    error.textContent=message;error.hidden=false;
    if (id){el(id).classList.add('rfq-invalid');el(id).focus();}
  }
  function generateMessage(){
    clearErrors();
    const profile=get('rfq-profile'), name=get('rfq-name'), product=get('rfq-product'), place=get('rfq-location'), extra=get('rfq-extra');
    const amount=Number(get('rfq-quantity'));
    if(!profile){showError('Selecione seu perfil de compra.','rfq-profile');return null;}
    if(!product){showError('Descreva o produto ou tipo de peça que procura.','rfq-product');return null;}
    if(!Number.isInteger(amount)||amount<1||amount>99999){showError('Informe uma quantidade válida entre 1 e 99.999 unidades.','rfq-quantity');return null;}
    if(!place){showError('Informe sua cidade e estado para consulta de entrega.','rfq-location');return null;}
    const lines=[
      'Olá, Empório da Arte MDF! Gostaria de consultar um orçamento.',
      '',`Perfil de compra: ${profile}`,
      ...(name?[`Nome / empresa: ${name}`]:[]),
      `Cidade / UF: ${place}`,
      `Produto desejado: ${product}`,
      `Quantidade estimada: ${amount} unidade(s)`,
      ...(extra?[`Informações adicionais: ${extra}`]:[])
    ];
    const chosen=el('rfq-include-list').checked?formatList():[];
    if(chosen.length)lines.push('','Também tenho interesse nestes itens do catálogo:',...chosen);
    lines.push('','Podem confirmar valores, disponibilidade, medidas, prazo e condições de entrega?');
    return lines.join('\n');
  }
  form.addEventListener('submit',event=>{
    event.preventDefault();
    const message=generateMessage();if(!message) return;
    el('rfq-preview').value=message;
    el('rfq-send-whatsapp').href=`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
    form.hidden=true;
    result.hidden=false;
    result.scrollIntoView({behavior:'smooth',block:'nearest'});
    el('rfq-send-whatsapp').focus({preventScroll:true});
  });
  el('rfq-edit').addEventListener('click',()=>{
    result.hidden=true;form.hidden=false;
    el('rfq-product').focus({preventScroll:true});
  });
  el('rfq-copy').addEventListener('click',async()=>{
    const message=el('rfq-preview').value;
    try{
      if(navigator.clipboard&&window.isSecureContext) await navigator.clipboard.writeText(message);
      else {el('rfq-preview').focus();el('rfq-preview').select();if(!document.execCommand('copy'))throw Error('clipboard');}
      showToast('Mensagem copiada.');
    }catch(_){showToast('Selecione o texto para copiar.');el('rfq-preview').focus();el('rfq-preview').select();}
  });
  document.querySelectorAll('[data-journey]').forEach(a=>a.addEventListener('click',()=>{
    const kind=a.getAttribute('data-journey');
    if(kind==='revenda')el('rfq-profile').value='Atacado / revenda';
    if(kind==='evento')el('rfq-profile').value='Evento / empresa';
    if(kind==='varejo'){state.category='todos';state.search='';el('catalog-search').value='';document.querySelectorAll('.chip').forEach(c=>{const act=c.dataset.category==='todos';c.classList.toggle('active',act);c.setAttribute('aria-pressed',String(act));});renderProducts();}
    if(!result.hidden){result.hidden=true;form.hidden=false;}
    refreshCount();
  }));
  document.getElementById('header-cart').addEventListener('click',refreshCount);
  document.getElementById('float-quote').addEventListener('click',refreshCount);
  document.getElementById('quote-items').addEventListener('click',()=>setTimeout(refreshCount,0));
  document.getElementById('products-grid').addEventListener('click',()=>setTimeout(refreshCount,0));
  refreshCount();
})();
