import { wordDescriptions } from "../../data/info.js";
import { Abbreviations } from "../../data/abbreviation.js";
import { resources } from "../../data/resources.js";
import "../wordstudy/src/style.scss";

function InfoTable(props) {
    return (
        <div>
            <div className={"infoCard"}>
                <h1 className={"infoCardTitle"}>Word Definitions</h1>
                <div className={"wd-table2col"}>
                    {wordDescriptions.map((wordDescriptions) => {
                        return (
                            <div className={"wd-row"}>
                                <div className="infoTable-pair">
                                    <div className={"wd-word"}>{wordDescriptions.Word}</div>
                                    <div className={"wd-des"}>{wordDescriptions.Description}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className={"infoCard"}>
                <h1 className={"infoCardTitle"}>Abrevations</h1>
                <div className={"wd-table4col"}>
                    {Abbreviations.map((abbreviations) => {
                        return (
                            <div className={"wd-row"}>
                                <p>
                                    <strong>{abbreviations.Abbreviation}</strong> : {abbreviations.Definition}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className={"infoCard"}>
                <h1 className={"infoCardTitle"}>Resources</h1>
                <div className={"wd-table1"}>
                    {resources.map((resources) => {
                        return (
                            <div className={"wd-row"}>
                                <li>{resources.Reference}</li>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default InfoTable;
