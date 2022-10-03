import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchNav from "./components/SearchNav";
import SearchBox from "./components/SearchBox";
import WordTable from "./components/WordTable";
import InfoTable from "./components/InfoTable";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div className="App">
            <span>
                <div style={{ marginTop: "3rem" }}>
                    <h1 style={{ fontSize: "3rem", fontWeight: "lighter" }}>Animacy & Normative Data</h1>
                </div>
                <SearchNav />
            </span>
            <SearchBox setSearchTerm={setSearchTerm} />
            <WordTable searchTerm={searchTerm} />
            <InfoTable searchTerm={searchTerm} />
        </div>
    );
}

export default App;
