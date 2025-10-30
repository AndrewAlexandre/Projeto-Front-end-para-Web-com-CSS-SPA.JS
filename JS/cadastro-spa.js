
const CADASTRO_ROOT = document.getElementById('cadastro-spa-root');
const FORM_ACTION_URL = "https://formspree.io/f/mwprdrpp";

// --------------------------------------------------------
// 1. TEMPLATES (O HTML Gerado por JS)
// --------------------------------------------------------

// Função para gerar o template do formulário
const FormTemplate = () => `
    <section class="cadastro-info">
        <h2>Faça a diferença😻</h2>
        <p>Você está a um passo de se tornar parte do nosso time de protetores felinos!</p>
        <p>Seja qual for a forma que escolher ajudar – adotando um gatinho, dedicando seu tempo como voluntário ou contribuindo como doador/patrocinador – seu apoio é essencial para resgatarmos e reabilitarmos mais vidas.</p>
        <p>Por favor, preencha o formulário abaixo para que possamos entender melhor como você deseja fazer a diferença.</p>
        <p>Atenção: Todos os seus dados são confidenciais e utilizados apenas para a comunicação da ONG Frajola.</p>
    </section>

    <form id="main-cadastro-form">
        <input type="hidden" name="_subject" value="Novo cadastro - ONG Frajola">

        <fieldset>
            <legend>Dados Pessoais</legend>               
            <label for="nome">Nome completo:</label>
            <input type="text" id="nome" name="Nome completo" required 
                   minlength="3" maxlength="100" 
                   placeholder="Digite seu nome completo">                
            <label for="cpf">CPF:</label>
            <input type="text" id="cpf" name="CPF" required 
                   pattern="[0-9.-]*"  
                   placeholder="000.000.000-00"
                   maxlength="14">               
            <label for="nascimento">Data de Nascimento:</label>
            <input type="date" id="nascimento" name="Data de Nascimento" required
                   max="2024-12-31">               
            <label for="telefone">Telefone:</label>
            <input type="tel" id="telefone" name="Telefone" required
                   pattern="[0-9() -]*"
                   placeholder="(21) 99999-9999"
                   maxlength="15">               
            <label for="email">E-mail:</label>
            <input type="email" id="email" name="E-mail" required
                   placeholder="seu@email.com">
        </fieldset>

        <fieldset>
            <legend>Endereço</legend>
            
            <label for="cep">CEP:</label>
            <input type="text" id="cep" name="CEP" required
                   pattern="[0-9-]*"
                   placeholder="00000-000"
                   maxlength="9">
            
            <label for="endereco">Endereço:</label>
            <input type="text" id="endereco" name="Endereço" required
                   placeholder="Rua, Avenida, etc.">
            
            <label for="cidade">Cidade:</label>
            <input type="text" id="cidade" name="Cidade" required
                   placeholder="Sua cidade">
            
            <label for="estado">Estado:</label>
            <select id="estado" name="Estado" required>
                <option value="">Selecione seu estado</option>
                <option value="AC">Acre</option><option value="AL">Alagoas</option><option value="AP">Amapá</option><option value="AM">Amazonas</option><option value="BA">Bahia</option><option value="CE">Ceará</option><option value="DF">Distrito Federal</option><option value="ES">Espírito Santo</option><option value="GO">Goiás</option><option value="MA">Maranhão</option><option value="MT">Mato Grosso</option><option value="MS">Mato Grosso do Sul</option><option value="MG">Minas Gerais</option><option value="PA">Pará</option><option value="PB">Paraíba</option><option value="PR">Paraná</option><option value="PE">Pernambuco</option><option value="PI">Piauí</option><option value="RJ">Rio de Janeiro</option><option value="RN">Rio Grande do Norte</option><option value="RS">Rio Grande do Sul</option><option value="RO">Rondônia</option><option value="RR">Roraima</option><option value="SC">Santa Catarina</option><option value="SP">São Paulo</option><option value="SE">Sergipe</option><option value="TO">Tocantins</option>
            </select>
        </fieldset>

        <fieldset>
            <legend>Como você pode ajudar?</legend>
            
            <label for="tipo">Como deseja ajudar?</label>
            <select id="tipo" name="Tipo de ajuda" required>
                <option value="">Selecione...</option>
                <option value="Doador">Doador</option>
                <option value="Voluntário">Voluntário</option>
                <option value="Adotante">Adotante</option>
                <option value="Patrocínio">Patrocínio</option>
            </select>
            
            <label for="mensagem">Mensagem (opcional):</label>
            <textarea id="mensagem" name="Mensagem" rows="4" 
                      placeholder="Conte-nos mais sobre você ou sua ajuda..."></textarea>
        </fieldset>

        <button type="submit">Enviar Cadastro</button>
    </form>
`;

// Template de Sucesso (Será exibido após o envio)
const SuccessTemplate = () => `
    <section class="cadastro-info success-message">
        <h2 style="color: #4CAF50;">🎉 Cadastro Enviado com Sucesso!</h2>
        <p>Agradecemos imensamente seu interesse em ajudar a ONG Frajola.</p>
        <p>Sua contribuição é vital para o resgate e reabilitação dos nossos gatinhos.</p>
        <p>Em breve, nossa equipe entrará em contato através do e-mail ou telefone fornecido.</p>
        <a href="Cadastro.html" class="botao-novo-cadastro">Fazer Outro Cadastro</a>
    </section>
`;

// --------------------------------------------------------
// 2. ROTEAMENTO E LÓGICA DE SPA
// --------------------------------------------------------

function renderContent(template) {
    CADASTRO_ROOT.innerHTML = template();
    // A cada injeção de conteúdo (SPA), precisamos reaplicar as máscaras!
    if (template === FormTemplate && typeof aplicarMascaras !== 'undefined') {
        aplicarMascaras();
        setupFormSubmission(); // Configura a submissão AJAX
    }
}

function setupFormSubmission() {
    const form = document.getElementById('main-cadastro-form');
    if (!form) return;

    form.addEventListener('submit', async function(event) {
        event.preventDefault(); // Impede o envio tradicional (MPA)
        
        const button = form.querySelector('button[type="submit"]');
        button.disabled = true;
        button.textContent = 'Enviando...';

        try {
            // Submissão via AJAX para manter o conceito de SPA
            const formData = new FormData(form);
            const response = await fetch(FORM_ACTION_URL, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Sucesso: renderiza a tela de sucesso (SPA)
                renderContent(SuccessTemplate);
            } else {
                // Falha: exibe mensagem e mantém o formulário
                alert('Ocorreu um erro ao enviar o cadastro. Por favor, tente novamente ou entre em contato por e-mail.');
                button.disabled = false;
                button.textContent = 'Enviar Cadastro';
            }
        } catch (error) {
            console.error('Erro de rede:', error);
            alert('Erro de conexão. Verifique sua rede e tente novamente.');
            button.disabled = false;
            button.textContent = 'Enviar Cadastro';
        }
    });
}


// Inicia o mini-SPA: renderiza o formulário ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    if (CADASTRO_ROOT) {
        renderContent(FormTemplate);
    }
});