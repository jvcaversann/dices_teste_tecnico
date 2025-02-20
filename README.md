🎲 Roll Dices

Este é um projeto para rolagem de dados digitais que permite selecionar e rolar diferentes tipos de dados (D2, D4, D6, D8, D10, D12 e D20), mantendo um histórico das rolagens.

🚀 Tecnologias Utilizadas

Frontend: Next.js, TypeScript, TailwindCSS

Backend: Node.js, Prisma

Banco de Dados: PostgreSQL

📌 Requisitos

Node.js: Versão 18 ou superior

Docker

Git

Gerenciador de pacotes npm ou yarn

📥 Instalação e Configuração

Clone o repositório

Instale as dependências

cd frontend
npm install
cd backend
npm install

Configuração do Banco de Dados

Crie um arquivo .env na pasta backend

Copie o conteúdo do .env.example e preencha a DATABASE_URL

Rode o comando "docker compose up" para subir o banco de dados.

Rode o comando "npx prisma migrate dev" para subir as tabelas no banco de dados.

Inicie o backend:

cd backend
npm run dev

Inicie o frontend:

cd frontend
npm run dev

🎲 Como Funciona

Selecione um dos 7 tipos de dados (D2, D4, D6, D8, D10, D12 e D20)

Clique no botão para rolar o dado

Veja o resultado da rolagem

O histórico das rolagens será armazenado e mostrado.
