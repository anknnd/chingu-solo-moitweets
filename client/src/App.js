import React from "react";
import SaveArea from "./components/SaveArea";
import SearchArea from './components/SearchArea';

const App = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        <SearchArea></SearchArea>
        <SaveArea></SaveArea>
      </div>
    </div>
  );
}

export default App;