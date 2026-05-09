# Relatório de Bugs — Aplicação Colmeia

## Ambiente de Testes

| Campo | Descrição |
|---|---|
| **Ambiente** | QA |
| **Navegador** | Google Chrome |
| **Tipo de Teste** | Manual + Automação E2E |
| **Ferramenta Utilizada** | Cypress |

---

# Login

## Bug 1 — Mensagem de erro exibida após login válido

| Campo | Descrição |
|---|---|
| **Título do Bug** | Mensagem de login inválido exibida após autenticação bem-sucedida |
| **Prioridade** | Média |
| **Tipo do Bug** | Funcional / UX |
| **Passo de reprodução** | 1. Acessar a tela de login <br> 2. Informar credenciais válidas <br> 3. Clicar em “Entrar” |
| **Resultado esperado** | Usuário deve acessar o dashboard sem mensagens de erro |
| **Resultado encontrado** | Sistema informa falha no login, porém permite acesso ao dashboard |

---

## Bug 2 — Link “Esqueceu sua senha?” sem funcionamento

| Campo | Descrição |
|---|---|
| **Título do Bug** | Recuperação de senha não executa ação |
| **Prioridade** | Baixa |
| **Tipo do Bug** | Funcional |
| **Passo de reprodução** | 1. Abrir tela de login <br> 2. Clicar em “Esqueceu sua senha?” |
| **Resultado esperado** | Sistema deve abrir fluxo de recuperação de senha |
| **Resultado encontrado** | Nenhuma ação ocorre após o clique |

---

# Dashboard / Home

## Bug 3 — Dashboard acessível sem autenticação

| Campo | Descrição |
|---|---|
| **Título do Bug** | Usuário não autenticado consegue acessar dashboard |
| **Prioridade** | Crítica |
| **Tipo do Bug** | Segurança / Controle de acesso |
| **Passo de reprodução** | 1. Acessar diretamente `/dashboard` sem login |
| **Resultado esperado** | Sistema deve bloquear acesso ou redirecionar para login |
| **Resultado encontrado** | Dashboard é carregado normalmente |

---

## Bug 4 — Botão de perfil sem funcionalidade

| Campo | Descrição |
|---|---|
| **Título do Bug** | Botão “Candidato” não executa ação |
| **Prioridade** | Baixa |
| **Tipo do Bug** | Funcional |
| **Passo de reprodução** | 1. Realizar login <br> 2. Clicar em “Candidato” no header |
| **Resultado esperado** | Sistema deve abrir menu de perfil ou opções da conta |
| **Resultado encontrado** | Nenhuma ação é executada |

---

## Bug 5 — Sidebar não recolhe após expansão

| Campo | Descrição |
|---|---|
| **Título do Bug** | Menu lateral permanece expandido |
| **Prioridade** | Baixa |
| **Tipo do Bug** | Usabilidade |
| **Passo de reprodução** | 1. Expandir sidebar <br> 2. Clicar novamente no botão de menu |
| **Resultado esperado** | Sidebar deve alternar entre expandido e recolhido |
| **Resultado encontrado** | Sidebar permanece aberta |

---

# Bancos de Dados

## Bug 6 — Sistema permite criação de banco de dados com nome vazio

| Campo | Descrição |
|---|---|
| **Título do Bug** | Banco de dados é criado com nome vazio após múltiplas tentativas de salvar |
| **Prioridade** | Média |
| **Tipo do Bug** | Validação / Funcional |
| **Passo de reprodução** | 1. Acessar “Bancos de Dados” <br> 2. Clicar em “Criar” <br> 3. Deixar o campo vazio <br> 4. Clicar em “Salvar” duas vezes |
| **Resultado esperado** | Sistema deve impedir criação de registros com nome vazio |
| **Resultado encontrado** | Após múltiplas tentativas, o sistema cria um banco de dados sem nome |

---

## Bug 7 — Dados não persistem após atualização da página

| Campo | Descrição |
|---|---|
| **Título do Bug** | Registros criados desaparecem após refresh |
| **Prioridade** | Alta |
| **Tipo do Bug** | Persistência de dados |
| **Passo de reprodução** | 1. Criar item em “Bancos de Dados” <br> 2. Atualizar página |
| **Resultado esperado** | Registro deve continuar listado após reload |
| **Resultado encontrado** | Item desaparece após atualização |

---

## Bug 8 — Função de arquivamento não funciona corretamente

| Campo | Descrição |
|---|---|
| **Título do Bug** | Itens não aparecem na área de arquivados após arquivamento |
| **Prioridade** | Média |
| **Tipo do Bug** | Funcional |
| **Passo de reprodução** | 1. Criar item <br> 2. Clicar em “Arquivar” <br> 3. Verificar seção de arquivados |
| **Resultado esperado** | Item deve sair da listagem principal e aparecer em arquivados |
| **Resultado encontrado** | Item é removido da listagem principal, porém não aparece na seção de arquivados |

---

# Colmeia Forms

## Bug 9 — Página acessível sem funcionalidades disponíveis

| Campo | Descrição |
|---|---|
| **Título do Bug** | Página “Colmeia Forms” sem conteúdo funcional |
| **Prioridade** | Baixa |
| **Tipo do Bug** | Funcionalidade incompleta |
| **Passo de reprodução** | 1. Acessar página “Colmeia Forms” |
| **Resultado esperado** | Página deve possuir funcionalidades, conteúdo ou orientação ao usuário |
| **Resultado encontrado** | Tela é carregada sem ações ou conteúdo funcional |