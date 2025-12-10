// src/App.tsx
import React, { useState } from "react";
import "./App.css"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import ConsolaList from "./components/ConsolaList";
import Sidebar from "./components/SideBar";
import { datos, USERS } from "./data/datos";

function App() {
  const [filterTag, setFilterTag] = useState("");

  const consolas = datos.consolas.filter(
    (c) => !filterTag || c.tag === filterTag
  );

  return (
    <div className="app-container">
      <Sidebar
        consolas={datos.consolas}
        users={USERS}
        onFilter={setFilterTag}
      />

      <div className="main-content-wrapper">
        <Header />
        <ConsolaList consolas={consolas} limit={20} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
