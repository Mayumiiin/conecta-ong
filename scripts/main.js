// Menu Mobile Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scroll para links âncora
    const anchors = document.querySelectorAll('a[href^="#"]');
    for (let i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    if (navLinks) {
                        navLinks.classList.remove('active');
                    }
                }
            }
        });
    }

    // Animação dos contadores (apenas na página inicial)
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        const observer = new IntersectionObserver(function(entries) {
            for (let i = 0; i < entries.length; i++) {
                if (entries[i].isIntersecting) {
                    animateCounters();
                    observer.unobserve(entries[i].target);
                }
            }
        }, { threshold: 0.5 });

        observer.observe(statsSection);
    }

    // Inicializa filtros de projetos (apenas na página de projetos)
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
        for (let i = 0; i < filterButtons.length; i++) {
            filterButtons[i].addEventListener('click', function() {
                for (let j = 0; j < filterButtons.length; j++) {
                    filterButtons[j].classList.remove('active');
                }
                this.classList.add('active');
                const filter = this.getAttribute('data-filter');
                filterProjects(filter);
            });
        }
    }

    // Fecha modal ao clicar fora
    window.onclick = function(event) {
        const modals = document.querySelectorAll('.modal');
        for (let i = 0; i < modals.length; i++) {
            if (event.target === modals[i]) {
                modals[i].classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    };
});

// Função para animar contadores
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number [data-target]');
    
    for (let i = 0; i < counters.length; i++) {
        const counter = counters[i];
        const target = parseFloat(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        
        (function(elem, finalValue, increment) {
            let current = 0;
            function updateCounter() {
                current += increment;
                if (current < finalValue) {
                    elem.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    elem.textContent = finalValue;
                }
            }
            updateCounter();
        })(counter, target, step);
    }
}

// Função para filtrar projetos
function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');
    
    for (let i = 0; i < projectCards.length; i++) {
        const card = projectCards[i];
        const categoryElement = card.querySelector('.project-category');
        
        if (!categoryElement) continue;
        
        const projectCategory = categoryElement.textContent.trim().toLowerCase();
        
        if (category === 'all') {
            card.style.display = 'block';
            setTimeout(function() {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, i * 50);
        } else {
            const normalizedCategory = category.replace('-', ' ');
            if (projectCategory === normalizedCategory) {
                card.style.display = 'block';
                setTimeout(function() {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, i * 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(function() {
                    card.style.display = 'none';
                }, 300);
            }
        }
    }
}

// Funções de Modal (mantidas para compatibilidade com código legado se houver)
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function openLoginModal() {
    openModal('loginModal');
}

function openVolunteerModal() {
    // Redireciona para a página de cadastro
    window.location.href = 'cadastro.html';
}

function openDonationModal() {
    openModal('donationModal');
}

function openRegisterModal() {
    closeModal('loginModal');
    openModal('registerModal');
}

function toggleCustomAmount(select) {
    const customGroup = document.getElementById('customAmountGroup');
    if (customGroup) {
        if (select.value === 'custom') {
            customGroup.classList.remove('hidden');
            const customInput = document.getElementById('donCustomAmount');
            if (customInput) {
                customInput.required = true;
            }
        } else {
            customGroup.classList.add('hidden');
            const customInput = document.getElementById('donCustomAmount');
            if (customInput) {
                customInput.required = false;
            }
        }
    }
}

// Handlers de formulários legados
function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    alert('Login realizado com sucesso! Bem-vindo(a), ' + email);
    closeModal('loginModal');
    event.target.reset();
}

function handleVolunteerSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    alert('Obrigado, ' + name + '! Seu cadastro foi recebido com sucesso. Entraremos em contato em breve com as próximas etapas.');
    closeModal('volunteerModal');
    event.target.reset();
}

function handleDonationSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const amount = formData.get('amount') === 'custom' ? formData.get('customAmount') : formData.get('amount');
    alert('Obrigado pela sua doação, ' + name + '! Você está contribuindo com R$ ' + amount + ',00. Em um ambiente real, você seria redirecionado para o gateway de pagamento.');
    closeModal('donationModal');
    event.target.reset();
}

function handleRegisterSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const ongName = formData.get('ongName');
    alert('Obrigado, ' + ongName + '! Seu cadastro foi enviado e será analisado por nossa equipe. Em breve você receberá um e-mail com os próximos passos.');
    closeModal('registerModal');
    event.target.reset();
}

function openProjectDetails(projectId) {
    alert('Detalhes do Projeto #' + projectId + '\n\nEm uma versão completa, aqui abriria uma página detalhada com mais informações, galeria de fotos, relatórios de impacto e opções para doar ou se voluntariar.');
}

function applyOpportunity(oppId) {
    const confirm = window.confirm('Deseja se candidatar para esta vaga?\n\nVocê será redirecionado para a página de cadastro.');
    if (confirm) {
        window.location.href = 'cadastro.html';
    }
}

// Adiciona transição suave nos cards de projetos
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(function(card) {
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
});