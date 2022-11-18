import CategoryHolder from "./CategoryHolder";
import CategoryList from "./CategoryList";

function Animacy() {
    const labels = ["Living", "Thought", "Repro", "Move", "Person", "Goals", "Mental", "Physical"];
    return (
        <CategoryHolder FilterHeader={"Animacy"}>
            {labels.map((label) => (
                <CategoryList FilterLabel={label} />
            ))}
        </CategoryHolder>
    );
}

export default Animacy;
