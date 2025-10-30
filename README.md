
🐱 ONG Frajola - Projeto Front-end para Web com CSS

✨ Visão Geral do Projeto
Este repositório contém o desenvolvimento Front-end completo de um website institucional para a ONG Frajola, uma organização fictícia dedicada ao resgate e adoção responsável de felinos em Duque de Caxias, RJ.
O projeto foi construído com foco na semântica HTML5, na estilização avançada com CSS3 e na implementação de funcionalidades básicas em JavaScript para melhorar a experiência do usuário.

💡 Destaque Arquitetural: O site principal segue o modelo MPA (Multiple Page Application), mas a página de Cadastro é implementada como um Mini-SPA (Single Page Application), onde a troca do formulário pela mensagem de sucesso é feita dinamicamente sem recarregar a página.

🚀 Tecnologias e Recursos Utilizados
HTML5: Estrutura semântica de todas as páginas.
CSS3: Estilização, layout e design responsivo.
JavaScript (Puro): Para funcionalidades interativas, como máscaras de input e a lógica do Mini-SPA.

🎨 Destaques de CSS e Design
O design do projeto é moderno, limpo e utiliza um esquema de cores discreto (preto/cinza e fundo claro) com destaque para botões estilizados e uso eficiente de layout:
Layout Consistente: O header com a área de logo e o menu de navegação (nav.main-nav) utilizam Flexbox para centralização e alinhamento responsivo dos itens.
Botões e Links: Os links de navegação são estilizados como "pills" arredondadas, com transições suaves (transition: all 0.3s ease;) e efeitos de sombra (box-shadow) no hover.
Layout da Galeria: A página galeria.html utiliza o CSS Grid Layout para organizar os cartões de gatos em uma grade dinâmica, garantindo que o layout se adapte elegantemente a diferentes tamanhos de tela (grid-template-columns: repeat(auto-fit, minmax(350px, 1fr))).
Responsividade (Mobile First): Todos os arquivos CSS incluem blocos de @media queries (para max-width: 768px e max-width: 480px) para garantir que o site seja totalmente acessível e utilize layouts otimizados em dispositivos móveis.

💻 Destaques de Funcionalidade (JavaScript) 
O projeto inclui scripts JavaScript dedicados para aprimorar a usabilidade e a arquitetura do formulário de cadastro:
Máscaras de Input (mascaras.js): O arquivo aplica automaticamente máscaras de formatação em tempo real para os campos de CPF, Telefone e CEP, facilitando a entrada de dados pelo usuário.
Ex: CPF: 000.000.000-00.
Ex: Telefone: (00) 00000-0000 (incluindo o 9º dígito).
Ex: CEP: 00000-000.
Mini-SPA (cadastro-spa.js): A página Cadastro.html utiliza o conceito de Single Page Application (SPA) de forma localizada:
O formulário é carregado dinamicamente via JavaScript.
A submissão é feita via AJAX, e a troca para a mensagem de sucesso é realizada sem que o usuário perceba um recarregamento completo da página, proporcionando uma experiência de usuário moderna e fluida.


*******************************************

******************************

⚙️ Como Executar
Clone o repositório: git clone https://github.com/AndrewAlexandre/Projeto-Front-end-para-Web-com-CSS-SPA.JS
Abra o projeto:
Navegue até o diretório principal.
Abra o arquivo index.html no seu navegador favorito para iniciar a navegação.

👤 Autor
Andrew Alexandre Elias da Cruz
GitHub: AndrewAlexandre
Linkedin: https://www.linkedin.com/in/andrew-alexandre-16207a2a8/
