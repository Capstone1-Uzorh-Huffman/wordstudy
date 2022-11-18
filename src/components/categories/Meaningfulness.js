import CategoryHolder from "./CategoryHolder";
import CategoryList from "./CategoryList";

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
