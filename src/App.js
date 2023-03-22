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
import SplitTable from "./components/page_components/SplitTable";

function App() {
    const [searchTerms, setSearchTerms] = useState("");
    const [filterTerms, setFilterTerms] = useState([]);
    const [minMaxFilter, setMaxFilter] = useState(new Map());
    const [numWords, setNumWords] = useState("0");

    //const ttest2 = require("@stdlib/stats-ttest2");
    //var ttest = ttest2([1, 2, 3, 4, 5], [2, 3, 4, 5, 6]);

    const addFilter = ({ label, min, max }) => {
        setMaxFilter((map) => new Map(map.set(label, { min, max })));
    };

    const removeFilter = (label) => {
        setMaxFilter((map) => {
            map.delete(label);
            return new Map(map);
        });
    };

    const getMinMaxArray = () => {
        const minMaxArray = [];
        minMaxFilter.forEach((item, label) => {
            minMaxArray.push({ label: label, min: item.min, max: item.max });
        });

        return minMaxArray;
    };
    /**
     *
     * @param {*} filterItem
     * @param {*} operation
     */
    const updateFilter = (filterItem, status) => {
        let temp = filterTerms;
        if (status) {
            temp.push(filterItem);
        } else {
            temp.splice(temp.indexOf(filterItem), 1);
        }
        console.log(temp);
        setFilterTerms([...temp]);
    };

    return (
        <div className="App">
            <h1 className="app-header">{`Animacy & Normative Data`}</h1>
            <Tabs defaultActiveKey="home" className="mb-3 sn-wrapper" justify>
                <Tab eventKey="home" title="Find Word Attributes">
                    <SearchBox setSearchTerms={setSearchTerms} />
                    <WordTable searchTerms={searchTerms} />
                </Tab>
                <Tab eventKey="search" title="Create Word Lists">
                    <AttributeSearch
                        updateFilter={updateFilter}
                        setFilterMinMax={addFilter}
                        removeFilter={removeFilter}
                    />
                    <FilterList filterTerms={filterTerms} filterMinMax={getMinMaxArray()} />
                    <SplitTable setNumWords={setNumWords} />
                    <ListTable
                        filterTerms={filterTerms}
                        filterMinMax={getMinMaxArray()}
                        tableName={"Full List"}
                        numWord={"0"}
                    />
                    <ListTable
                        filterTerms={filterTerms}
                        filterMinMax={getMinMaxArray()}
                        tableName={"List 1"}
                        numWord={numWords}
                    />
                    <ListTable
                        filterTerms={filterTerms}
                        filterMinMax={getMinMaxArray()}
                        tableName={"List 2"}
                        numWord={numWords}
                    />
                </Tab>
                <Tab eventKey="info" title="More Information">
                    <InfoTable />
                </Tab>
            </Tabs>
        </div>
    );
}

export default App;
