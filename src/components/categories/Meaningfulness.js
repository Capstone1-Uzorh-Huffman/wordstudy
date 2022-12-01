import CategoryHolder from "../utility_compoents/CategoryHolder";
import CategoryList from "../utility_compoents/CategoryList";

function Meaningfulness() {
    const labels = ["MNG", "FAM"];

    return (
        <CategoryHolder FilterHeader={"Meaningfulness"}>
            {labels.map((label) => (
                <CategoryList FilterLabel={label} />
            ))}
        </CategoryHolder>
    );
}

export default Meaningfulness;
