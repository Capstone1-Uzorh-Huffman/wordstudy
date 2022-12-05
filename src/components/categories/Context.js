import CategoryHolder from "../utility_compoents/CategoryHolder";
import CategoryList from "../utility_compoents/CategoryList";

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
