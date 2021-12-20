import React, { useState } from "react";
import packageJson from "../package.json";
import { getBuildDate, refreshCacheAndReload } from "./utils/utils";
import withClearCache from "./ClearCache";
import Popper from "./components/Popper";

const ClearCacheComponent = withClearCache(MainApp);

function App() {
  return <ClearCacheComponent />;
}

function MainApp() {
  const [showPopper, setShowPopper] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <span>
          Build date package.json:
          <p>{getBuildDate(packageJson.buildDate)}</p>
        </span>
      </header>

      <Popper
        show={showPopper}
        hide={() => setShowPopper(false)}
        reload={refreshCacheAndReload}
      />
    </div>
  );
}

export default App;
