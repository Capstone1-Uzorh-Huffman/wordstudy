import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBox from "./components/SearchBox";
import WordTable from "./components/WordTable";
import AttributeSearch from "./components/AttributeSearch";
import InfoTable from "./components/InfoTable";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./style.scss";
import ListTable from "./components/listTable";

function App() {
    const [searchTerms, setSearchTerms] = useState("");
    return (
        <div className="App">
            <h1 className="app-header">Animacy & Normative Data</h1>
            <Tabs defaultActiveKey="home" className="mb-3 sn-wrapper" justify>
                <Tab eventKey="home" title="Find Word Attributes">
                    <SearchBox setSearchTerms={setSearchTerms} />
                    <WordTable searchTerms={searchTerms} />
                </Tab>
                <Tab eventKey="search" title="Create Word Lists">
                    <AttributeSearch />
                    <ListTable />
                    <ListTable />
                    <ListTable />
                </Tab>
                <Tab eventKey="info" title="More Info">
                    <InfoTable />
                </Tab>
            </Tabs>
        </div>
    );
}

export default App;
