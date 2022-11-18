import CategoryHolder from "./CategoryHolder";
import CategoryList from "./CategoryList";

function SimpleWords() {
    const labels = ["IMG", "CNC", "AoA"];

    return (
        <CategoryHolder FilterHeader={"Simple Words"}>
            {labels.map((label) => (
                <CategoryList FilterLabel={label} />
            ))}
        </CategoryHolder>
    );
}

export default SimpleWords;
