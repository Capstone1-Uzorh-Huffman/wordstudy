import CategoryHolder from "../utility_compoents/CategoryHolder";
import CategoryList from "../utility_compoents/CategoryList";

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
