import CategoryHolder from "./CategoryHolder";
import CategoryList from "./CategoryList";

function Lexical() {
    const labels = ["LEN", "OrthoN", "PhonoN", "NSyll",];

    return (
        <CategoryHolder FilterHeader={"Lexical"}>
            {labels.map((label) => (
                <CategoryList FilterLabel={label} />
            ))}
        </CategoryHolder>
    );
}

export default Lexical;
