import CategoryHolder from "../utility_compoents/CategoryHolder";
import CategoryList from "../utility_compoents/CategoryList";

function Recall(props) {
    const labels = [
        "R1Overall",
        "R2Overall",
        "R3Overall",
        "R_totOverall",
        "R1Lab",
        "R2Lab",
        "R3Lab",
        "R_totLab",
        "R1Online",
        "R2Online",
        "R3Online",
        "R_totOnline"
    ];

    return (
        <CategoryHolder FilterHeader={"Recall"}>
            {labels.map((label) => (
                <CategoryList
                    FilterLabel={label}
                    setFilterMinMax={props.setFilterMinMax}
                    removeFilter={props.removeFilter}
                />
            ))}
        </CategoryHolder>
    );
}

export default Recall;
