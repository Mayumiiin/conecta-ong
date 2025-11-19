# 🤝 Conecta ONGs - Plataforma de Gestão para ONGs

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

> Plataforma web completa e profissional que permite a ONGs gerenciar suas atividades, divulgar projetos, captar recursos e engajar voluntários.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Contexto e Relevância](#contexto-e-relevância)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar](#como-executar)
- [Páginas](#páginas)
- [Personas e Casos de Uso](#personas-e-casos-de-uso)
- [Requisitos Técnicos](#requisitos-técnicos)
- [Capturas de Tela](#capturas-de-tela)
- [Roadmap](#roadmap)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Contato](#contato)

---

## 🎯 Sobre o Projeto

A **Conecta ONGs** é uma plataforma web desenvolvida para atender às necessidades do terceiro setor brasileiro, oferecendo ferramentas profissionais e gratuitas para gestão de projetos sociais, captação de recursos e engajamento de voluntários.

### Objetivos

#### Objetivo Geral
Desenvolver uma plataforma web completa e profissional que permita a ONGs gerenciar suas atividades, divulgar projetos, captar recursos e engajar voluntários, aplicando de forma integrada conceitos modernos de desenvolvimento front-end.

#### Objetivos Específicos
- ✅ Aplicar fundamentos de HTML5 na criação de estruturas semânticas complexas
- ✅ Implementar layouts responsivos e sistemas de design usando CSS3 avançado
- ✅ Desenvolver funcionalidades interativas e dinâmicas com JavaScript
- ✅ Integrar ferramentas de versionamento, acessibilidade e boas práticas web
- ✅ Simular um ambiente de desenvolvimento profissional
- ✅ Produzir documentação técnica de qualidade

---

## 🌍 Contexto e Relevância

O terceiro setor brasileiro representa uma força econômica e social significativa:

- 💰 **R$ 15+ bilhões** movimentados anualmente
- 👥 **~3 milhões** de pessoas empregadas
- 🏢 **820+ mil** organizações da sociedade civil (IBGE)
- ⚠️ **Apenas 30%** possuem presença digital adequada

Esta realidade apresenta uma oportunidade única para aplicar conhecimentos de desenvolvimento front-end em um contexto socialmente relevante, ajudando ONGs a superarem limitações orçamentárias e técnicas.

---

## ⚡ Funcionalidades

### 🏠 Área Institucional
- Página inicial com missão, visão e valores
- Histórico e conquistas da organização
- Seção "Sobre" detalhada
- Estatísticas de impacto com animações
- Depoimentos de voluntários

### 📊 Gestão de Projetos
- Cadastro detalhado de projetos sociais
- Sistema de categorização por área
- Indicadores de impacto e resultados
- Barras de progresso de metas
- Filtros interativos por categoria

### 👥 Engajamento de Voluntários
- Portal de oportunidades de voluntariado
- Sistema de inscrição e cadastro
- Badges de urgência e novidade
- Informações de localização e horário
- Formulário completo de voluntário

### 💰 Captação de Recursos
- Sistema de doações online
- Valores pré-definidos e personalizados
- Opção de doação recorrente
- Seleção de projeto específico
- Mensagens de transparência

### 📱 Comunicação
- Seção de depoimentos
- Informações de contato completas
- Links para redes sociais
- Newsletter (estrutura preparada)

---

## 🛠️ Tecnologias Utilizadas

### Front-end
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e responsividade
- **JavaScript (Vanilla)** - Interatividade

### Conceitos Aplicados
- ✨ HTML5 Semântico (`header`, `nav`, `main`, `section`, `article`, `footer`)
- 🎨 CSS Grid e Flexbox
- 📱 Design Responsivo (Mobile-first)
- 🎭 Animações e Transições CSS
- ⚡ JavaScript Vanilla (ES5 compatível)
- ♿ Acessibilidade (WCAG 2.1)
- 🔍 SEO (Meta tags, estrutura semântica)
- 🎯 Progressive Enhancement


---

## 🚀 Como Executar

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code, Sublime Text, etc.)
- Servidor local (opcional: Live Server, Python SimpleHTTPServer)

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/conecta-ongs.git
cd conecta-ongs
```

2. **Abra o projeto**
```bash
# Opção 1: Abrir diretamente no navegador
open index.html

# Opção 2: Usar Live Server (VS Code Extension)
# Clique com botão direito em index.html > Open with Live Server

# Opção 3: Python HTTP Server
python -m http.server 8000
# Acesse: http://localhost:8000
```

3. **Navegue pela plataforma**
- Acesse `index.html` para a página inicial
- Explore `projetos.html` para projetos e voluntariado
- Visite `cadastro.html` para o formulário de cadastro

---

## 📄 Páginas

### 1️⃣ index.html - Página Inicial
**Conteúdo:**
- Hero section com call-to-action
- Estatísticas de impacto animadas
- Seção "Sobre a ONG"
- Funcionalidades da plataforma
- Depoimentos de usuários
- Informações de contato

**Imagens utilizadas:**
- Banner hero (voluntários)
- Equipe trabalhando
- Comunidade sendo atendida

### 2️⃣ projetos.html - Projetos e Voluntariado
**Conteúdo:**
- Catálogo de projetos sociais
- Sistema de filtros por categoria
- Oportunidades de voluntariado
- Informações sobre doações
- Transparência e prestação de contas

**Imagens utilizadas:**
- 6 imagens de projetos (educação, saúde, meio ambiente, animais)
- Ícones de categorias

### 3️⃣ cadastro.html - Formulário de Cadastro
**Conteúdo:**
- Formulário completo de voluntário
- Validação HTML5 nativa
- Máscaras de input (CPF, telefone, CEP)
- Agrupamento lógico de campos
- Campos obrigatórios e opcionais

**Campos do formulário:**
- Nome Completo
- E-mail
- CPF (com máscara)
- Telefone (com máscara)
- Data de Nascimento
- Endereço
- CEP (com máscara)
- Cidade
- Estado
- Área de interesse
- Disponibilidade

---

## ✅ Requisitos Técnicos

### HTML5 Semântico
- ✅ Estrutura semântica completa em todas as páginas
- ✅ Hierarquia de títulos (h1-h6) lógica e consistente
- ✅ Tags semânticas (`header`, `nav`, `main`, `section`, `article`, `footer`)
- ✅ Atributos ARIA para acessibilidade

### CSS3 Avançado
- ✅ Design responsivo (Mobile-first)
- ✅ CSS Grid e Flexbox
- ✅ Variáveis CSS (Custom Properties)
- ✅ Animações e transições
- ✅ Media queries bem definidas
- ✅ Breakpoints: 768px, 1024px, 1200px

### JavaScript
- ✅ Código vanilla (sem frameworks)
- ✅ Compatibilidade ES5
- ✅ Validação de formulários
- ✅ Máscaras de input
- ✅ Animações interativas
- ✅ Sistema de filtros
- ✅ Modais e componentes dinâmicos

### Acessibilidade (WCAG 2.1 - Nível AA)
- ✅ Navegação por teclado
- ✅ Suporte a leitores de tela
- ✅ Contraste adequado (mínimo 4.5:1)
- ✅ Labels associadas a inputs
- ✅ Atributos ARIA

### Performance
- ✅ Tempo de carregamento < 5 segundos
- ✅ Imagens otimizadas
- ✅ CSS minificado (produção)
- ✅ JavaScript otimizado

### SEO
- ✅ Meta tags completas
- ✅ Estrutura semântica
- ✅ URLs amigáveis
- ✅ Alt text em imagens

---

## 🗺️ Roadmap

### Fase 1 - MVP ✅ (Concluída)
- [x] Estrutura HTML5 das 3 páginas
- [x] Design responsivo completo
- [x] Formulário de cadastro com validação
- [x] Sistema de filtros de projetos
- [x] Animações e interatividade

### Fase 2 - Backend (Futuro)
- [ ] API REST com Node.js
- [ ] Banco de dados (MongoDB/PostgreSQL)
- [ ] Autenticação de usuários
- [ ] Dashboard administrativo
- [ ] Sistema de notificações

### Fase 3 - Avançado (Futuro)
- [ ] Integração com gateway de pagamento
- [ ] Sistema de mensagens interno
- [ ] Upload de arquivos (relatórios, fotos)
- [ ] Geração de certificados PDF
- [ ] Analytics e relatórios

### Fase 4 - Mobile (Futuro)
- [ ] Progressive Web App (PWA)
- [ ] App nativo (React Native)
- [ ] Notificações push
- [ ] Modo offline

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Diretrizes de Contribuição
- Mantenha a estrutura semântica HTML5
- Siga o padrão de código existente
- Teste em múltiplos navegadores
- Valide acessibilidade
- Documente mudanças significativas

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📞 Contato

**Conecta ONGs**
- 📧 Email: contato@conectaongs.org.br
- 📱 Telefone: (11) 98765-4321
- 🌐 Website: [conectaongs.org.br](https://conectaongs.org.br)
- 📍 Endereço: Av. Paulista, 1000 - São Paulo, SP

**Desenvolvedor**
- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [Seu Nome](https://linkedin.com/in/seu-perfil)
- Email: seu.email@exemplo.com

---

## 🙏 Agradecimentos

- Instituto Brasileiro de Geografia e Estatística (IBGE) pelos dados sobre o terceiro setor
- Comunidade de desenvolvedores open source
- Todas as ONGs que inspiraram este projeto
- Voluntários que fazem a diferença no Brasil

---

## 📊 Estatísticas do Projeto

```
Linhas de Código: ~3.000+
Arquivos HTML: 3
Arquivos CSS: 1
Arquivos JS: 1
Componentes: 15+
Páginas: 3
Tempo de Desenvolvimento: 40 horas
```

---

<div align="center">
  <p>Feito com ❤️ para o terceiro setor brasileiro</p>
  <p>⭐ Se este projeto te ajudou, considere dar uma estrela!</p>
</div>

---

## 🔖 Tags

`#ong` `#voluntariado` `#doacao` `#html5` `#css3` `#javascript` `#frontend` `#webdev` `#social` `#terceiro-setor` `#brasil` `#opensource` `#responsive` `#accessibility` `#semantic-html`
# conecta-ong
