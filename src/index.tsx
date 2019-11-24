import { Fabric, loadTheme } from "office-ui-fabric-react";
import * as React from "react";
import {render} from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

loadTheme({
  palette: {
    themePrimary: '#0078d4',
    themeLighterAlt: '#f3f9fd',
    themeLighter: '#d0e7f8',
    themeLight: '#a9d3f2',
    themeTertiary: '#5ca9e5',
    themeSecondary: '#1a86d9',
    themeDarkAlt: '#006cbe',
    themeDark: '#005ba1',
    themeDarker: '#004377',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#bab8b7',
    neutralSecondary: '#a3a2a0',
    neutralPrimaryAlt: '#8d8b8a',
    neutralPrimary: '#323130',
    neutralDark: '#605e5d',
    black: '#494847',
    white: '#ffffff',
  },
});

const rootEl = document.getElementById("root");

render(
  <Fabric>
    <App />
  </Fabric>,
  rootEl,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();