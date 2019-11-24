# Office UI Fabric Starter-kit with React, Webpack, & Typescript 
> Minimal starter with hot module replacement (HMR) for rapid development with the Office UI Fabric UX framework.

This project is an extension of [vikpe's](https://github.com/vikpe) awesome **[React/Webpack/TypeScript starter-kit](https://github.com/vikpe/react-webpack-typescript-starter)**, configured to align with the UI Fabric design principles. If you are not using office-ui-fabric-react for building your UI/UX, then I highly suggest using his repo as a starting point instead of this one.

* **[React](https://facebook.github.io/react/)** (16.x)
* **[Webpack](https://webpack.js.org/)** (4.x)
* **[Typescript](https://www.typescriptlang.org/)** (3.x)
* **[Office UI Fabric](https://developer.microsoft.com/en-us/fabric#/)** (7.x for office-ui-fabric-react, 11.x for office-ui-fabric-core)
* **[Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)** using [React Hot Loader](https://github.com/gaearon/react-hot-loader) (4.x)
* [Babel](http://babeljs.io/) (7.x)
* [SASS](http://sass-lang.com/)
* [Jest](https://facebook.github.io/jest/) - Testing framework for React applications
* Production build script
* Image loading/minification using [Image Webpack Loader](https://github.com/tcoopman/image-webpack-loader)
* Typescript compiling using [Awesome Typescript Loader](https://github.com/s-panferov/awesome-typescript-loader) (5.x)
* Code quality (linting) for Typescript.

## Installation
1. Clone/download repo
2. `yarn install` (or `npm install` for npm)

## Usage
**Development**

`yarn run start-dev`

* Build app continuously (HMR enabled)
* App served @ `http://localhost:8080`

**Production**

`yarn run start-prod`

* Build app once (HMR disabled) to `/dist/`
* App served @ `http://localhost:3000`

---

**All commands**

Command | Description
--- | ---
`yarn run start-dev` | Build app continuously (HMR enabled) and serve @ `http://localhost:8080`
`yarn run start-prod` | Build app once (HMR disabled) to `/dist/` and serve @ `http://localhost:3000`
`yarn run build` | Build app to `/dist/`
`yarn run test` | Run tests
`yarn run lint` | Run Typescript linter
`yarn run lint --fix` | Run Typescript linter and fix issues
`yarn run start` | (alias of `yarn run start-dev`)

**Note**: replace `yarn` with `npm` in `package.json` if you use npm.
