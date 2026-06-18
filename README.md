# Automação de Testes - SauceDemo

## Descrição

Projeto desenvolvido como parte de uma avaliação técnica para a vaga de QA.

A automação foi desenvolvida utilizando Cypress com TypeScript, seguindo o padrão Page Object Model (POM), com foco na organização, reutilização de código e manutenção dos testes.

---

## Tecnologias utilizadas

- Cypress
- TypeScript
- Node.js

---

## Estrutura do projeto

```
cypress/
│
├── e2e/
│   ├── login.cy.ts
│   ├── cart.cy.ts
│   ├── checkout.cy.ts
│   └── finishOrder.cy.ts
│
├── pages/
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
└── support/
    ├── commands.ts
    └── e2e.ts
```

---

## Casos de teste automatizados

- CT001 – Validar login com credenciais válidas
- CT003 – Validar adição de produto ao carrinho
- CT007 – Validar checkout com todos os campos obrigatórios preenchidos
- CT011 – Validar finalização da compra com sucesso

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
- Separação entre páginas e cenários de teste
- Código desenvolvido em TypeScript

## Observações

Os cenários automatizados foram escolhidos com base na criticidade do fluxo de compra, contemplando as principais funcionalidades da aplicação:

- Login
- Adição de produto ao carrinho
- Checkout
- Finalização da compra

Essa abordagem prioriza a automação dos fluxos de maior valor para o negócio.