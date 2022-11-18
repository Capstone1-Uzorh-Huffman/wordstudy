import CategoryHolder from "./CategoryHolder";
import CategoryList from "./CategoryList";

function Context() {
    const labels = ["SUBTLWF", "SUBTLCD", "AVAIL"];

    return (
        <CategoryHolder FilterHeader={"Context"}>
            {labels.map((label) => (
                <CategoryList FilterLabel={label} />
            ))}
        </CategoryHolder>
    );
}

export default Context;
