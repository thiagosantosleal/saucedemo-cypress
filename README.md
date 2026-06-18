# Automação de Testes - SauceDemo

Projeto desenvolvido como parte de uma avaliação técnica para a vaga de Quality Assurance (QA).

O projeto contempla:

- História do Usuário
- Critérios de Aceite
- Matriz de Rastreabilidade
- Casos de Teste em BDD
- Automação com Cypress + TypeScript
- Pipeline de Integração Contínua (CI) com GitHub Actions

---

## Objetivo

Automatizar os principais fluxos da aplicação SauceDemo utilizando Cypress com TypeScript, seguindo o padrão **Page Object Model (POM)**, além de documentar todo o processo de testes, desde a especificação da História do Usuário até a implementação da automação e da pipeline de Integração Contínua.

---

## Tecnologias utilizadas

- Cypress
- TypeScript
- Node.js
- Git
- GitHub
- GitHub Actions

---

## Estrutura do projeto

```text
.
├── .github/
│   └── workflows/
│       └── cypress.yml
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.ts
│   │   ├── cart.cy.ts
│   │   ├── checkout.cy.ts
│   │   └── finishOrder.cy.ts
│   ├── pages/
│   │   ├── LoginPage.ts
│   │   ├── InventoryPage.ts
│   │   ├── CartPage.ts
│   │   └── CheckoutPage.ts
│   └── support/
│       ├── commands.ts
│       └── e2e.ts
├── .gitignore
├── cypress.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

## Casos de teste automatizados

- CT001 – Validar login com credenciais válidas.
- CT003 – Validar adição de produto ao carrinho.
- CT007 – Verificar checkout com todos os campos obrigatórios preenchidos.
- CT011 – Validar finalização da compra com sucesso.

---

## Como executar o projeto

### Instalar as dependências

```bash
npm install
```

### Abrir o Cypress

```bash
npm run test:ui
```

### Executar todos os testes

```bash
npm test
```

### Executar testes individuais

```bash
npm run test:login
npm run test:cart
npm run test:checkout
npm run test:finish
```

---

## Padrão utilizado

- Page Object Model (POM)
- Testes independentes
- Organização por cenários de teste
- Separação entre Page Objects e testes automatizados
- Código desenvolvido em TypeScript

---

## Observações

Os cenários automatizados foram selecionados com base na criticidade do fluxo de compra da aplicação, priorizando as principais funcionalidades do sistema:

- Login
- Adição de produto ao carrinho
- Checkout
- Finalização da compra

Essa abordagem prioriza a automação dos fluxos de maior valor para o negócio, garantindo maior cobertura dos cenários críticos da aplicação.

---

## Pipeline de CI

O projeto possui uma pipeline de Integração Contínua (CI) utilizando **GitHub Actions**.

A pipeline é executada automaticamente a cada **push** ou **Pull Request** para a branch `main`, realizando:

- Checkout do código;
- Instalação das dependências do projeto;
- Execução dos testes automatizados com Cypress.

---

## Autor

**Thiago Santos Leal**

Projeto desenvolvido para fins de avaliação técnica para a vaga de **Quality Assurance (QA)**.