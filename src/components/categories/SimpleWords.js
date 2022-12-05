import CategoryHolder from "../utility_components/CategoryHolder";
import CategoryList from "../utility_components/CategoryList";

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
