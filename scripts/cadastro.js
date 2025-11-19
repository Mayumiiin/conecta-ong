// Máscaras de input
document.addEventListener('DOMContentLoaded', function() {
    const cpfInput = document.getElementById('cpf');
    const telefoneInput = document.getElementById('telefone');
    const cepInput = document.getElementById('cep');
    const motivacaoTextarea = document.getElementById('motivacao');
    const form = document.getElementById('volunteerForm');

    // Máscara para CPF
    if (cpfInput) {
        cpfInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length <= 11) {
                value = value.replace(/(\d{3})(\d)/, '$1.$2');
                value = value.replace(/(\d{3})(\d)/, '$1.$2');
                value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
                e.target.value = value;
            }
        });
    }

    // Máscara para Telefone
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length <= 11) {
                if (value.length <= 10) {
                    value = value.replace(/(\d{2})(\d)/, '($1) $2');
                    value = value.replace(/(\d{4})(\d)/, '$1-$2');
                } else {
                    value = value.replace(/(\d{2})(\d)/, '($1) $2');
                    value = value.replace(/(\d{5})(\d)/, '$1-$2');
                }
                e.target.value = value;
            }
        });
    }

    // Máscara para CEP
    if (cepInput) {
        cepInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length <= 8) {
                value = value.replace(/(\d{5})(\d)/, '$1-$2');
                e.target.value = value;
            }
        });

        // Buscar endereço pelo CEP (simulação)
        cepInput.addEventListener('blur', function() {
            const cep = this.value.replace(/\D/g, '');
            if (cep.length === 8) {
                buscarCEP(cep);
            }
        });
    }

    // Contador de caracteres para motivação
    if (motivacaoTextarea) {
        motivacaoTextarea.addEventListener('input', function() {
            const charCount = document.getElementById('charCount');
            const currentLength = this.value.length;
            charCount.textContent = currentLength;
            
            if (currentLength < 50) {
                charCount.style.color = '#ef4444';
            } else if (currentLength > 450) {
                charCount.style.color = '#f59e0b';
            } else {
                charCount.style.color = '#10b981';
            }
        });
    }

    // Validação do formulário
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validarFormulario()) {
                enviarFormulario();
            }
        });

        // Validação em tempo real
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validarCampo(this);
            });

            input.addEventListener('input', function() {
                if (this.classList.contains('invalid')) {
                    validarCampo(this);
                }
            });
        });
    }
});

// Função para buscar CEP (simulação)
function buscarCEP(cep) {
    // Em produção, usar API ViaCEP: https://viacep.com.br/ws/${cep}/json/
    console.log('Buscando CEP:', cep);
    
    // Simulação de preenchimento automático
    setTimeout(() => {
        // Aqui você faria a chamada real à API
        // Por enquanto, apenas uma simulação
        if (cep === '01310100') {
            document.getElementById('endereco').value = 'Avenida Paulista';
            document.getElementById('cidade').value = 'São Paulo';
            document.getElementById('estado').value = 'SP';
        }
    }, 500);
}

// Validação de CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    
    if (cpf.length !== 11) return false;
    
    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1{10}$/.test(cpf)) return false;
    
    // Validação do primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let digito1 = resto >= 10 ? 0 : resto;
    
    if (digito1 !== parseInt(cpf.charAt(9))) return false;
    
    // Validação do segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let digito2 = resto >= 10 ? 0 : resto;
    
    return digito2 === parseInt(cpf.charAt(10));
}

// Validação de campo individual
function validarCampo(campo) {
    const errorElement = document.getElementById(campo.id + 'Error');
    let mensagemErro = '';
    
    // Remove classe de erro anterior
    campo.classList.remove('invalid');
    if (errorElement) {
        errorElement.textContent = '';
    }
    
    // Verifica se o campo é obrigatório e está vazio
    if (campo.hasAttribute('required') && !campo.value.trim()) {
        mensagemErro = 'Este campo é obrigatório';
    }
    // Validações específicas por tipo de campo
    else if (campo.value.trim()) {
        switch(campo.id) {
            case 'nome':
                if (campo.value.trim().length < 3) {
                    mensagemErro = 'Nome deve ter pelo menos 3 caracteres';
                } else if (!/^[a-záàâãéèêíïóôõöúçñ\s]+$/i.test(campo.value)) {
                    mensagemErro = 'Nome deve conter apenas letras';
                }
                break;
                
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(campo.value)) {
                    mensagemErro = 'E-mail inválido';
                }
                break;
                
            case 'telefone':
                const telefone = campo.value.replace(/\D/g, '');
                if (telefone.length < 10 || telefone.length > 11) {
                    mensagemErro = 'Telefone inválido';
                }
                break;
                
            case 'cpf':
                if (!validarCPF(campo.value)) {
                    mensagemErro = 'CPF inválido';
                }
                break;
                
            case 'dataNascimento':
                const hoje = new Date();
                const nascimento = new Date(campo.value);
                const idade = hoje.getFullYear() - nascimento.getFullYear();
                const mesAtual = hoje.getMonth();
                const mesNascimento = nascimento.getMonth();
                
                let idadeReal = idade;
                if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())) {
                    idadeReal--;
                }
                
                if (idadeReal < 18) {
                    mensagemErro = 'Você deve ter pelo menos 18 anos';
                } else if (idadeReal > 100) {
                    mensagemErro = 'Idade inválida';
                }
                break;
                
            case 'cep':
                const cep = campo.value.replace(/\D/g, '');
                if (cep.length !== 8) {
                    mensagemErro = 'CEP inválido';
                }
                break;
                
            case 'motivacao':
                if (campo.value.trim().length < 50) {
                    mensagemErro = 'A motivação deve ter pelo menos 50 caracteres';
                }
                break;
                
            case 'termos':
                if (campo.type === 'checkbox' && !campo.checked) {
                    mensagemErro = 'Você deve aceitar os termos de uso';
                }
                break;
        }
    }
    
    // Exibe mensagem de erro se houver
    if (mensagemErro) {
        campo.classList.add('invalid');
        if (errorElement) {
            errorElement.textContent = mensagemErro;
        }
        return false;
    }
    
    return true;
}

// Validação do formulário completo
function validarFormulario() {
    const form = document.getElementById('volunteerForm');
    const campos = form.querySelectorAll('input[required], select[required], textarea[required]');
    let valido = true;
    
    campos.forEach(campo => {
        if (!validarCampo(campo)) {
            valido = false;
        }
    });
    
    if (!valido) {
        // Rola para o primeiro campo inválido
        const primeiroInvalido = form.querySelector('.invalid');
        if (primeiroInvalido) {
            primeiroInvalido.scrollIntoView({ behavior: 'smooth', block: 'center' });
            primeiroInvalido.focus();
        }
        
        // Exibe mensagem de erro geral
        alert('Por favor, corrija os erros no formulário antes de enviar.');
    }
    
    return valido;
}

// Função para enviar o formulário
function enviarFormulario() {
    const form = document.getElementById('volunteerForm');
    const formData = new FormData(form);
    const dados = {};
    
    for (let [key, value] of formData.entries()) {
        dados[key] = value;
    }
    
    console.log('Dados do formulário:', dados);
    
    // Aqui você faria o envio real dos dados para o servidor
    // Por enquanto, apenas simula o envio
    
    // Exibe loading
    const submitBtn = form.querySelector('button[type="submit"]');
    const textoOriginal = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';
    
    // Simula requisição ao servidor
    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = textoOriginal;
        
        // Esconde formulário e mostra mensagem de sucesso
        form.style.display = 'none';
        document.getElementById('successMessage').classList.remove('hidden');
        
        // Rola para a mensagem de sucesso
        document.getElementById('successMessage').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 2000);
}

// Função para resetar o formulário
function resetForm() {
    const form = document.getElementById('volunteerForm');
    const successMessage = document.getElementById('successMessage');
    
    form.reset();
    form.style.display = 'block';
    successMessage.classList.add('hidden');
    
    // Remove classes de erro
    const camposInvalidos = form.querySelectorAll('.invalid');
    camposInvalidos.forEach(campo => {
        campo.classList.remove('invalid');
    });
    
    // Limpa mensagens de erro
    const mensagensErro = form.querySelectorAll('.error-message');
    mensagensErro.forEach(msg => {
        msg.textContent = '';
    });
    
    // Reseta contador de caracteres
    document.getElementById('charCount').textContent = '0';
    
    // Rola para o topo do formulário
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Previne envio do formulário ao pressionar Enter em campos que não sejam textarea
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('volunteerForm');
    if (form) {
        form.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
            }
        });
    }
});