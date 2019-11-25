# UI Fabric Progressive Web App

This project is an extension of the **[Office UI Fabric Developer Starter-kit](https://github.com/matthewvilhauer/ui-fabric-dev-starter-kit)**, designed first and foremost to be a **[Progressive Web App (PWA)](https://developers.google.com/web/progressive-web-apps/)**

#### What does "Progressive" mean anyway?
* It meets the **[Progressive Web App Standards](https://developers.google.com/web/progressive-web-apps/checklist)** set by Google.
* [Why should you care?](https://blog.bitsrc.io/what-is-a-pwa-and-why-should-you-care-388afb6c0bad)

### Built with the latest and greatest web technologies
* **[React](https://facebook.github.io/react/)** (>16.8.x)
* **[Typescript](https://www.typescriptlang.org/)** (>7.x)
* **[Webpack](https://webpack.js.org/)** (>4.x)
  * Configured to generate a Web App Manifest and a Service Worker during a production build
  * Provides basic image and static asset caching for ultra-fast load times
* **[Office UI Fabric](https://developer.microsoft.com/en-us/fabric#/)** (7.x for office-ui-fabric-react, 11.x for office-ui-fabric-core)
  * Comes with extra @uifabric packages to assist developers in creating a seamless UI based on the UI Fabric UX framework
* **[Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)** using [React Hot Loader](https://github.com/gaearon/react-hot-loader) (4.x)
* [Babel](http://babeljs.io/) (7.x)
* [SASS](http://sass-lang.com/)
* Production build script
* Image loading/minification using [Image Webpack Loader](https://github.com/tcoopman/image-webpack-loader)

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
