import CategoryHolder from "../utility_components/CategoryHolder";
import CategoryList from "../utility_components/CategoryList";

function Meaningfulness(props) {
    const labels = ["MNG", "FAM"];

    return (
        <CategoryHolder FilterHeader={"Meaningfulness & Familiarity"}>
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

export default Meaningfulness;
