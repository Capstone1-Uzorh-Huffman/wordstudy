import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBox from "./components/page_components/SearchBox";
import WordTable from "./components/page_components/WordTable";
import AttributeSearch from "./components/page_components/AttributeSearch";
import InfoTable from "./components/page_components/InfoTable";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./style.scss";
import ListTable from "./components/page_components/listTable";
import FilterList from "./components/page_components/FilterList";

function App() {
    const [searchTerms, setSearchTerms] = useState("");
    const [filterTerms, setFilterTerms] = useState([]);

    /**
     *
     * @param {*} filterItem
     * @param {*} operation
     */
    const updateFilter = (filterItem, operation = false) => {
        let temp = filterTerms;
        if (operation) {
            temp.push(filterItem);
        } else {
            temp = temp.filter((item) => {
                return item.key !== filterItem.key;
            });
        }

        setFilterTerms(temp);
    };

    return (
        <div className="App">
            <h1 className="app-header">Animacy & Normative Data</h1>
            <Tabs defaultActiveKey="home" className="mb-3 sn-wrapper" justify>
                <Tab eventKey="home" title="Find Word Attributes">
                    <SearchBox setSearchTerms={setSearchTerms} />
                    <WordTable searchTerms={searchTerms} />
                </Tab>
                <Tab eventKey="search" title="Create Word Lists">
                    <AttributeSearch updateFilter={updateFilter} />
                    <FilterList />
                    <ListTable filterTerms={filterTerms} />
                    <ListTable />
                    <ListTable />
                </Tab>
                <Tab eventKey="info" title="More Information">
                    <InfoTable />
                </Tab>
            </Tabs>
        </div>
    );
}

export default App;
