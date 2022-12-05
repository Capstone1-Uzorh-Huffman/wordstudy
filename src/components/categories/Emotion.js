import CategoryHolder from "../utility_compoents/CategoryHolder";
import CategoryList from "../utility_compoents/CategoryList";

function Emotion(props) {
    const labels = ["DOM", "VAL", "ARO"];

    return (
        <CategoryHolder FilterHeader={"Emotions"}>
            {labels.map((label) => (
                <CategoryList
                    FilterLabel={label}
                    setFilterMinMax={props.setFilterMinMax}
                    removeFilter={props.removeFilter}
                />
            ))}
        </CategoryHolder>
    );
}

export default Emotion;
