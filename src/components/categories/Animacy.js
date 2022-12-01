import CategoryHolder from "../utility_compoents/CategoryHolder";
import CategoryList from "../utility_compoents/CategoryList";

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
