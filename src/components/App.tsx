import * as React from "react";
import { hot } from "react-hot-loader";
import "./../assets/scss/App.scss";
import CardHorizontalExample from './CustomCard';
import { initializeIcons } from '@uifabric/icons';
import { Icon, Label } from "office-ui-fabric-react";

class App extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    initializeIcons();
  }
  public render() {
    return (
      <div className="App">
        <div className="center">
          <Icon iconName="AdminOLogoInverse32" className={"developerIcon"} />
          <Icon iconName="DeveloperTools" className={"developerIcon"} />
        </div>
        <Label className="pageHeader center">Office UI Fabric starter-kit with React, TypeScript, and Webpack</Label>
        <CardHorizontalExample />
      </div>
    );
  }
}

declare let module: object;

export default hot(module)(App);
