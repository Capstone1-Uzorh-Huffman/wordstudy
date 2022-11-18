import CategoryHolder from "./CategoryHolder";
import CategoryList from "./CategoryList";

function Recall() {
    const labels = [
        "R1Overall",
        "R2Overall",
        "R3Overall",
        "R_totOverall",
        "R1Lab",
        "R2Lab",
        "R3Lab",
        "R_totLab",
        "R1Online",
        "R2Online",
        "R3Online",
        "R_totOnline"
    ];

    return (
        <CategoryHolder FilterHeader={"Recall"}>
            {labels.map((label) => (
                <CategoryList FilterLabel={label} />
            ))}
        </CategoryHolder>
    );
}

export default Recall;
