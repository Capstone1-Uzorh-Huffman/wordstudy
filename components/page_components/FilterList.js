import Badge from "react-bootstrap/Badge";
import { Abbreviations } from "../../data/abbreviation";

function FilterList(props) {
    let currentFilters = [];

    props.filterTerms.forEach((ctg) => {
        currentFilters.push(Abbreviations.filter((word) => word.Abbreviation === ctg)[0].Definition);
        console.log(currentFilters);
    });

    return (
        <div className="filters">
            <h6>
                Filtering By:
                {currentFilters.map((cf) => {
                    return <Badge bg="dark">{cf}</Badge>;
                })}
                {props.filterMinMax.map((minmax) => {
                    return (
                        <Badge bg="dark">
                            {minmax.label} ({minmax.min} - {minmax.max})
                        </Badge>
                    );
                })}
            </h6>
        </div>
    );
}

export default FilterList;
