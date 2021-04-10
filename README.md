# svelte app template for buk.io projects

This is a project template for [Svelte](https://svelte.dev) apps. It is based on the official svelte template that lives at https://github.com/sveltejs/template-webpack.

This repository has incorporated the following customizations reflecting the current development environment of the Buk.io dev team.

- Webpack
- Sass
- Typescript
- PostCSS (autoprefixer)

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit https://github.com/bukio/template-webpack svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start webpack:

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see your app running. Edit a component file in `src`, save it, and the page should reload with your changes.


## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
now
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.