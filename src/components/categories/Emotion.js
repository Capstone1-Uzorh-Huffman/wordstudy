import CategoryHolder from "./CategoryHolder";
import CategoryList from "./CategoryList";

function Emotion() {
    const labels = ["DOM", "VAL", "ARO"];

    return (
        <CategoryHolder FilterHeader={"Emotions"}>
            {labels.map((label) => (
                <CategoryList FilterLabel={label} />
            ))}
        </CategoryHolder>
    );
}

export default Emotion;
