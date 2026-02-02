# 🎬 IFRS || Cinema

Projeto desenvolvido como parte da disciplina de **Desenvolvimento Web Front-End**, com o objetivo de simular uma experiência completa de compra de ingressos de cinema, desde o login do usuário até a seleção de assentos e finalização da compra.

---

## 📌 Visão Geral

O **IFRS || Cinema** é uma aplicação web front-end que permite:

- Autenticação de usuário  
- Visualização de filmes em cartaz  
- Escolha interativa de assentos (inteira e meia-entrada)  
- Cálculo automático do valor total  
- Finalização da compra  

O foco do projeto está na **manipulação do DOM**, **gerenciamento de estado no navegador** e **organização de código**, utilizando apenas tecnologias web fundamentais.

## 🧩 Funcionalidades Implementadas

### 🔐 Página de Login
- Formulário com usuário e senha
- Validação em JavaScript
- Feedback visual de erro
- Redirecionamento após login bem-sucedido

**Credenciais padrão:**
- Usuário: `Cinema`
- Senha: `123`

### 🎥 Página de Seleção de Filmes
- Grid responsivo de filmes
- Cards interativos
- Separação entre filmes em cartaz e em breve
- Armazenamento do filme selecionado no `localStorage`

### 💺 Página de Seleção de Assentos
- Representação visual da sala de cinema
- Assentos organizados por fileiras
- Legenda de estados (livre, ocupada, inteira, meia)
- Seleção individual de assentos
- Escolha de tipo de ingresso antes da seleção
- Atualização do valor total em tempo real
- Resumo da compra

## 🛠️ Tecnologias Utilizadas

### ✔ HTML5
- Estruturação semântica das páginas
- Organização clara do conteúdo

### ✔ CSS3
- Layout responsivo
- Flexbox e Grid Layout
- Variáveis CSS para padronização visual
- Componentização de estilos

### ✔ JavaScript (ES6+)
- Manipulação do DOM
- Eventos e estados da aplicação
- Uso de `localStorage`
- Separação de responsabilidades por arquivo

### ✔ Git & GitHub
- Controle de versão do projeto
- Organização por commits

### ✔ Prettier
- Padronização automática do código
- Estilo consistente de indentação
- Melhoria da legibilidade e manutenção

## 📂 Estrutura do Projeto

```text
/projeto-cinema
│
├── assets
│   ├── css
│   │   ├── global.css
│   │   ├── login.css
│   │   ├── movies.css
│   │   └── cinema.css
│   │
│   └── js
│       ├── login.js
│       ├── movies.js
│       └── cinema.js
│
├── login.html
├── movies.html
├── cinema.html
└── README.md
