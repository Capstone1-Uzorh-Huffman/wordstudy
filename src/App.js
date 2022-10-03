import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchNav from "./components/SearchNav";
import SearchBox from "./components/SearchBox";
import WordTable from "./components/WordTable";
import AttributeSearch from "./components/AttributeSearch";

function App() {
    const [searchTerms, setSearchTerms] = useState("");
    return (
        <div className="App">
            <div style={{ backgroundColor: "black", color: "white", marginTop: "0", paddingTop: "3rem" }}>
                <div>
                    <h1 style={{ fontSize: "3rem", fontWeight: "Bold", fontFamily: "-moz-initial" }}>
                        Animacy & Normative Data
                    </h1>
                </div>
                <SearchNav />
            </div>
            <SearchBox setSearchTerms={setSearchTerms} />
            <AttributeSearch />
            <WordTable searchTerms={searchTerms} />
        </div>
    );
}

export default App;
