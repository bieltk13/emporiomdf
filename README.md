# Empório da Arte MDF — Proposta de site ideal / V2

Versão demonstrativa **responsiva e funcional** de site institucional com catálogo e orçamento por WhatsApp. Desenvolvida para demonstrar uma jornada comercial mais clara para **varejo, atacado/revenda e projetos especiais**.

## Abrir o site

1. Extraia **todos os arquivos** do ZIP, sem alterar a estrutura das pastas.
2. Abra `index.html` em Chrome, Edge, Firefox ou Safari.
3. Para publicar, envie a pasta inteira para uma hospedagem estática (GitHub Pages, Netlify ou hospedagem própria). Não há backend nem banco de dados nesta demonstração.

## O que foi implementado

- Identidade visual com logo recortada da captura fornecida; cabeçalho, menu móvel e navegação por seções.
- **Três caminhos de compra:** uso pessoal, atacado/revenda e consulta para projeto ou evento.
- Catálogo com **8 modelos encontrados em anúncios públicos associados à loja** da Empório da Arte MDF, busca, filtros, visualização de detalhes e links aos anúncios.
- Lista de orçamento persistida apenas no navegador, com quantidades, remoção de itens e mensagem pronta para WhatsApp.
- **Cotação expressa** com perfil de compra, nome ou empresa (opcional), descrição do produto, quantidade, cidade/estado e observações (opcionais).
- Campos essenciais validados; mensagem montada e mostrada antes do envio; opção para editar, copiar ou abrir no WhatsApp.
- Opção de anexar ao texto os itens selecionados no catálogo.
- Informações de atendimento, Google Maps, avaliações públicas identificadas na pesquisa, FAQ e links de contato.
- SEO básico, marcação de dados estruturados e links públicos.
- SVG do WhatsApp **dentro do HTML**, sem dependência de Font Awesome ou arquivo SVG externo.
- Imagens SVG locais de reserva para uso quando os URLs das fotos dos anúncios não carregam.

## O que o site NÃO faz

- Não consulta estoque em tempo real.
- Não calcula preços, descontos, fretes nem prazos.
- Não processa pedidos, pagamentos, emissão de notas ou cadastro em servidor.
- Não envia automaticamente as informações para a empresa: **abre o WhatsApp com uma mensagem pré-preenchida para que o próprio visitante confirme o envio.**
- Não possui Google Analytics, Search Console nem painel de administração configurados. Esses recursos dependem de domínio, conta e autorização do responsável.
- Não verifica se todos os modelos exibidos foram fabricados pela empresa; foram identificados como **anunciados** em canais públicos.

## Conteúdo a confirmar antes da publicação comercial

- Confirmar que o **WhatsApp (45) 99978-4259** pertence ao atendimento comercial e recebe mensagens.
- Confirmar CNPJ, e-mail, endereço, horários, abrangência de envios e avaliação exibidos.
- Solicitar **logo em alta definição/vetor**, fotos reais da fábrica e **imagens autorizadas dos produtos** para substituir as ilustrações SVG locais e URLs externos.
- Confirmar estoque, materiais, dimensões, medidas mínimas de atacado, personalização e condições comerciais, para adicionar informações concretas.
- Verificar o estado do domínio `emporiodaartemdf.com`, pois já é divulgado nos canais da empresa; evitar substituição sem entender o site atual.
- Instalar ferramentas de medição de conversões apenas após publicar e obter autorização.

## Arquivos principais

- `index.html` — conteúdo, navegação, seções e ícones SVG locais.
- `styles.css` — estilos e responsividade.
- `script.js` — catálogo, busca, filtros, orçamento, formulário e WhatsApp.
- `assets/img/` — logo provisória, favicon, SVGs de reserva, mapa ilustrativo.
- `FONTES_DOS_PRODUTOS.txt` — links de referência dos oito modelos.

## Alteração de contatos e produtos

No `script.js`, alterar a constante `PHONE` e o array `products`. **O número de WhatsApp também consta em links diretos no `index.html`**, portanto deve ser atualizado ali em conjunto.

Para substituir imagens, salve os arquivos autorizados em `assets/img/` e ajuste o campo `image` de cada produto com o caminho local.

> Esta é uma **proposta comercial**. A utilidade demonstrada é facilitar a descoberta do catálogo e a formação de contatos qualificados, sobretudo para atacado. Não existe promessa de crescimento de vendas sem dados da operação e visitas reais.
