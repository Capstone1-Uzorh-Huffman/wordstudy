import CategoryHolder from "../utility_compoents/CategoryHolder";
import CategoryList from "../utility_compoents/CategoryList";

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
