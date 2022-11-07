import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchNav from "./components/SearchNav";
import SearchBox from "./components/SearchBox";
import WordTable from "./components/WordTable";
import AttributeSearch from "./components/AttributeSearch";
import InfoTable from "./components/InfoTable";
import "./style.scss";

function App() {
    const [searchTerms, setSearchTerms] = useState("");
    return (
        <div className="App">
            <div className="app-wrapper">
                <div>
                    <h1 className="app-header">Animacy & Normative Data</h1>
                </div>
                <SearchNav />
            </div>
            <SearchBox setSearchTerms={setSearchTerms} />
            <AttributeSearch />
            {<WordTable searchTerms={searchTerms} />}
            <InfoTable />
        </div>
    );
}

export default App;
