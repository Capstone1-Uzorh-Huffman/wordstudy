import CategoryHolder from "../utility_components/CategoryHolder";
import CategoryList from "../utility_components/CategoryList";

function Lexical(props) {
    const labels = ["LEN", "OrthoN", "PhonoN", "NSyll"];

    return (
        <CategoryHolder FilterHeader={"Lexical"}>
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

export default Lexical;
