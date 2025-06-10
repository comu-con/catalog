# ComuCon - Comunidade Conectada
## Resumo
Projeto de extensão. Catálogo digital colaborativo para a comunidade.
## Tecnologias
- [Nuxt](https://nuxt.com/):
	- Responsável pela geração de páginas estáticas referentes ao catálogo digital. As páginas serão geradas a partir de gatilhos no GitHub Actions. Cada item do catálogo será um arquivo no diretório `/content/sites`.
- [Puter](https://github.com/heyputer/puter):
	- Responsável pela autenticação e pela hospedagem do site estático/dados estruturados de cada usuário.
- [Cloudflare Workers](https://developers.cloudflare.com/workers/):
	- Servirá apenas como *middleware* entre o catálogo estático e o Github Actions. Gerará novas páginas estáticas após atualização do catálogo.
- [Grape.js](https://grapesjs.com/):
	- Open-source modular page-builder. Permitirá maior extensabilidade ao usuário final com conhecimento técnico intermediário.
- GitHub Pages:
	- Onde o site estático do projeto estará publicado.

## Roadmap
- [x] Definir tecnologias
- [x] Iniciar UI para o catálogo
	- [ ] Exibir ícone específico para cada rede social a partir da URL;
	- [ ] Ordenar por distância geográfica do usuário;
	- [ ] Implementar busca avançada e filtros;
- [x] Iniciar UI para registro de comércio/serviço
	- [ ] Adicionar máscaras aos campos;
	- [ ] Gerar arquivo `index.html` e subdomínio `nome_da_empresa.puter.site`;
	- [ ] Disparar `push` em `/content/sites`
- [ ] Implementar Grape.js para edição do site em `nome_da_empresa.puter.site`
- [ ] Criar submódulo em `/content/sites`
- [ ] Criar submódulo em `/content/static/BusinessTypes`
- [ ] Criar submódulo em `/.output/public`
- [ ] Implementar fluxo de deploy
	- [ ] Criar `workflows` em `/.github/workflows`;
	- [ ] Criar `worker` responsável por interceptar a criação de novos sites

## Funcionalidades posteriores
- [ ] Mural de postagens
- [ ] Fórum para a comunidade
- [ ] Chat em tempo real
- [ ] Mural de eventos
- [ ] Sistema de moderação colaborativa

## Contribuições
Tem alguma sugestão ou quer participar do projeto? Cria uma [issue](https://docs.github.com/pt/issues/tracking-your-work-with-issues/using-issues/creating-an-issue)!

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
