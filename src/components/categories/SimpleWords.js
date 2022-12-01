import CategoryHolder from "../utility_compoents/CategoryHolder";
import CategoryList from "../utility_compoents/CategoryList";

function SimpleWords() {
    const labels = ["IMG", "CNC", "AoA"];

    return (
        <CategoryHolder FilterHeader={"Semantics"}>
            {labels.map((label) => (
                <CategoryList FilterLabel={label} />
            ))}
        </CategoryHolder>
    );
}

export default SimpleWords;
