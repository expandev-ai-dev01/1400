# Escola de Inglês - Frontend

Site institucional para divulgar o trabalho da escola de inglês, apresentar as turmas disponíveis e mostrar a metodologia de ensino.

## Tecnologias

- React 18.3.1
- TypeScript 5.6.3
- Vite 5.4.11
- React Router DOM 6.26.2
- TailwindCSS 3.4.14
- TanStack Query 5.59.20
- Axios 1.7.7
- React Hook Form 7.53.1
- Zod 3.23.8

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   ├── providers.tsx      # Provedores globais
│   └── router.tsx         # Configuração de rotas
├── pages/                 # Páginas da aplicação
│   ├── layouts/          # Layouts compartilhados
│   ├── Home/             # Página inicial
│   ├── About/            # Sobre nós
│   ├── Classes/          # Turmas
│   ├── Methodology/      # Metodologia
│   ├── Contact/          # Contato
│   └── NotFound/         # Página 404
├── core/                  # Componentes e utilitários globais
│   ├── components/       # Componentes reutilizáveis
│   ├── lib/              # Configurações de bibliotecas
│   └── utils/            # Funções utilitárias
├── domain/               # Domínios de negócio (a serem implementados)
└── assets/               # Recursos estáticos
    └── styles/           # Estilos globais
```

## Instalação

```bash
# Instalar dependências
npm install

# Copiar arquivo de ambiente
cp .env.example .env

# Configurar variáveis de ambiente no .env
```

## Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Lint
npm run lint
```

## Variáveis de Ambiente

- `VITE_API_URL`: URL base da API (padrão: http://localhost:4000)
- `VITE_API_VERSION`: Versão da API (padrão: v1)
- `VITE_API_TIMEOUT`: Timeout das requisições em ms (padrão: 30000)

## Páginas Disponíveis

- `/` - Página inicial
- `/sobre` - Sobre a escola
- `/turmas` - Turmas disponíveis
- `/metodologia` - Metodologia de ensino
- `/contato` - Formulário de contato

## Próximos Passos

- Implementar domínios de negócio conforme features
- Adicionar testes unitários e de integração
- Implementar autenticação (se necessário)
- Adicionar mais componentes reutilizáveis
- Integrar com backend quando disponível