import React from "react";
import "./index.css";

import LayoutContainer from "./modules/components/common/LayoutContainer/LayoutContainer";
import { Header } from "./modules/components/common/Header/Header";
import { ComponentsPreview } from "./modules/components/ComponentsPreview/ComponentsPreview";

function App() {
  return (
    <>
     <Header></Header>

      <LayoutContainer>
        <ComponentsPreview />
      </LayoutContainer>
    </>
  );
}

export default App;
