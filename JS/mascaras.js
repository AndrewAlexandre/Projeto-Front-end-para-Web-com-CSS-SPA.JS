function mascaraCPF(cpf) {
    cpf.value = cpf.value.replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function mascaraTelefone(tel) {
    tel.value = tel.value.replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2');
}

function mascaraCEP(cep) {
    cep.value = cep.value.replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2');
}

/**
 * Função principal que adiciona os event listeners nos campos.
 * Deve ser chamada sempre que o formulário for recarregado/injetado no DOM.
 */
function aplicarMascaras() {
    // Tenta obter os elementos.
    const cpf = document.getElementById('cpf');
    const telefone = document.getElementById('telefone');
    const cep = document.getElementById('cep');

    // Adiciona os listeners SOMENTE SE o elemento existir (Garante que não falha)
    if (cpf) {
        cpf.addEventListener('input', function() {
            mascaraCPF(this);
        });
    }

    if (telefone) {
        telefone.addEventListener('input', function() {
            mascaraTelefone(this);
        });
    }

    if (cep) {
        cep.addEventListener('input', function() {
            mascaraCEP(this);
        });
    }
}