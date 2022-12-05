import CategoryHolder from "../utility_compoents/CategoryHolder";
import CategoryList from "../utility_compoents/CategoryList";

function SimpleWords(props) {
    const labels = ["IMG", "CNC", "AoA"];

    return (
        <CategoryHolder FilterHeader={"Imagery, Concreteness & Age of Acquisition"}>
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

export default SimpleWords;
