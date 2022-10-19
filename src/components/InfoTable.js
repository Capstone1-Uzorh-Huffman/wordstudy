import { wordDescriptions } from "../data/info.js";
import { abbreviations } from "../data/abbreviation.js";
import { resources } from "../data/resources.js";
import "../style.scss";

function InfoTable(props) {
    return (
        <div>
            <div className={"infoCard"}>
                <h1 className={"infoCardTitle"}>Word Definitions</h1>
                <div className={"wd-table2col"}>
                    {wordDescriptions.map((wordDescriptions) => {
                        return (
                            <div className={"wd-row"}>
                                <p>
                                    <div className={"wd-word"}>{wordDescriptions.Word}</div>
                                    <div className={"wd-des"}>{wordDescriptions.Description}</div>
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className={"infoCard"}>
                <h1 className={"infoCardTitle"}>Abrevations</h1>
                <div className={"wd-table4col"}>
                    {abbreviations.map((abbreviations) => {
                        return (
                            <div className={"wd-row"}>
                                <p>
                                    <strong>{abbreviations.Abrevation}</strong> : {abbreviations.Definition}
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
                                <p>{resources.Reference}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default InfoTable;
