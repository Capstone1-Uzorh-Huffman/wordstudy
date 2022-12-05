import CategoryHolder from "../utility_components/CategoryHolder";
import CategoryList from "../utility_components/CategoryList";

function Context(props) {
    const labels = ["SUBTLWF", "SUBTLCD", "AVAIL"];

    return (
        <CategoryHolder FilterHeader={"Context"}>
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

export default Context;
