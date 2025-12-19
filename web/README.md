
# 📘 Documentação de Testes Automatizados – WebDojo (Cypress)

## 📌 Visão Geral

Este repositório contém os **testes automatizados da aplicação WebDojo**, desenvolvidos utilizando **Cypress** para validação de fluxos end-to-end (E2E).

A aplicação **WebDojo** está no **mesmo repositório** e deve estar em execução localmente para que os testes funcionem corretamente.

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- Cypress
- JavaScript
- Serve (para subir a aplicação localmente)

---

## 📂 Estrutura do Projeto Cypress

```
cypress/
├── e2e/                  # Casos de teste end-to-end
├── fixtures/             # Massa de dados para testes
│   ├── cep.json
│   ├── consultancy.json
│   └── document.pdf
├── support/              # Configurações e reutilização de código
│   ├── actions/          # Ações reutilizáveis (Page Actions)
│   │   └── consultancy.actions.js
│   ├── commands.js       # Comandos customizados do Cypress
│   ├── e2e.js             # Configuração global dos testes
│   └── utils.js           # Funções utilitárias
```

### 📁 Descrição das Pastas

- **e2e/**: Contém os arquivos de teste (`*.cy.js`) com os cenários automatizados.
- **fixtures/**: Dados mockados utilizados nos testes, como JSONs e arquivos para upload.
- **support/actions/**: Implementa ações reutilizáveis, seguindo um padrão semelhante a Page Objects.
- **commands.js**: Define comandos customizados do Cypress para reaproveitamento de código.
- **e2e.js**: Arquivo carregado antes da execução dos testes (hooks globais).
- **utils.js**: Funções auxiliares usadas em diferentes testes.

---

## ▶️ Executando a Aplicação WebDojo

Antes de rodar os testes, é **obrigatório** iniciar a aplicação WebDojo localmente.

```bash
npm run dev
```

A aplicação será iniciada em:
```
http://localhost:3000
```

---

## ▶️ Executando os Testes Automatizados

Scripts disponíveis no `package.json`:

```json
"scripts": {
  "dev": "serve -s dist -p 3000",
  "test": "npx cypress run --config viewportWidth=1920,viewportHeight=1080",
  "test:ui": "npx cypress open",
  "test:login": "npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=1920,viewportHeight=1080",
  "test:login:mobile": "npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=414,viewportHeight=896"
}
```

### 🧪 Executar Todos os Testes

```bash
npm run test
```

### 🖥️ Modo Interativo

```bash
npm run test:ui
```

### 🔐 Testes de Login (Desktop)

```bash
npm run test:login
```

### 📱 Testes de Login (Mobile)

```bash
npm run test:login:mobile
```

---

## 🧩 Padrões Utilizados

- Page Actions Pattern
- Fixtures para massa de dados
- Comandos customizados do Cypress

---

## ✅ Boas Práticas

- Sempre iniciar a aplicação antes dos testes
- Reutilizar ações e comandos
- Evitar hard-code de dados
- Executar testes mobile e desktop

---

🚀 **Bons testes!**
