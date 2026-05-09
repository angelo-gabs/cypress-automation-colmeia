# Desafio Colmeia QA

Projeto de automação de testes E2E desenvolvido para validação das funcionalidades da aplicação **Colmeia QA**, utilizando Cypress e JavaScript.

O projeto contempla testes automatizados, documentação de casos de teste manuais e registro de bugs identificados durante a execução dos cenários.

---

# Objetivos do Projeto

- Validar funcionalidades críticas da aplicação
- Identificar falhas funcionais e de usabilidade
- Documentar cenários de teste e bugs encontrados
- Aplicar boas práticas de automação E2E
- Utilizar o padrão Page Object Model (POM)
- Organizar testes e documentação de forma rastreável

---

# Tecnologias Utilizadas

- JavaScript
- Cypress
- Node.js
- Markdown
- Git & GitHub

---

# Funcionalidades Testadas

## Login

- Login com credenciais válidas
- Validação de credenciais inválidas
- Validação de campos obrigatórios
- Fluxo de recuperação de senha

## Dashboard

- Controle de acesso
- Expansão e recolhimento da sidebar
- Acesso às funcionalidades do sistema
- Menu de perfil do usuário

## Bancos de Dados

- Criação de registros
- Exclusão de registros
- Arquivamento de itens
- Persistência de dados
- Pesquisa e filtragem
- Reset da listagem

---

# Estrutura do Projeto

```txt
desafio-colmeia-qa/
│
├── cypress/                    # Estrutura principal dos testes automatizados
│   ├── e2e/
│   │   ├── dashboard.spec.cy.js
│   │   ├── database.spec.cy.js
│   │   └── login.spec.cy.js
│   │
│   ├── fixtures/               # Massa de dados utilizada nos testes
│   │   └── userData.json
│   │
│   ├── pages/                  # Implementação do padrão Page Object Model
│   │   ├── dashboardPage.js
│   │   ├── databasePage.js
│   │   └── loginPage.js
│   │
│   └── support/                # Configurações e comandos customizados do Cypress
│
├── docs/                       # Documentação de testes e bugs
│   ├── casos-de-teste/
│   │   ├── login.md
│   │   ├── dashboard.md
│   │   └── database.md
│   │
│   └── bug-reports/
│       └── bug-report.md
│
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

# Padrões Aplicados

- Page Object Model (POM)
- Separação de responsabilidades
- Organização modular dos testes
- Uso de fixtures para massa de dados
- Documentação versionada no repositório
- Rastreabilidade entre casos de teste e bugs

---

# Como Executar o Projeto

## Pré-requisitos

- Node.js instalado
- Git instalado

---

## Clonar o repositório

```bash
git clone <url-do-repositorio>
```

---

## Instalar dependências

```bash
npm install
```

---

## Executar Cypress em modo interativo

```bash
npx cypress open
```

---

## Executar testes em modo headless

```bash
npx cypress run
```

---

# Documentação

## Casos de Teste

- [Login](docs/casos-de-teste/login.md)
- [Dashboard](docs/casos-de-teste/dashboard.md)
- [Bancos de Dados](docs/casos-de-teste/database.md)

---

## Bug Reports

- [Relatório de Bugs](docs/bug-reports/bug-report.md)

---

# Bugs Identificados

Durante a execução dos testes foram identificados bugs relacionados a:

- Controle de acesso
- Persistência de dados
- Validação de campos
- Fluxos incompletos
- Componentes sem funcionalidade
- Problemas de usabilidade

Todos os bugs documentados encontram-se em:

```txt
docs/bug-reports/bug-report.md
```

---

# Autor

Desenvolvido por Angelo Gabriel Costa Silveira.
