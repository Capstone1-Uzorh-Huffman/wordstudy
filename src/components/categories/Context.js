import CategoryHolder from "../utility_compoents/CategoryHolder";
import CategoryList from "../utility_compoents/CategoryList";

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
