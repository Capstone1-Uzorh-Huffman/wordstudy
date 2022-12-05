import Row from "react-bootstrap/Row";
import CategoryHolder from "../utility_components/CategoryHolder";
import CheckBox from "../utility_components/CheckBox";

function Category(props) {
    const Animal = [
        { key: "Bird", value: "A B" },
        { key: "Fish", value: "A F" },
        { key: "Insect", value: "A I" },
        { key: "Mammal", value: "A M" },
        { key: "Other", value: "A O" },
        { key: "Reptile", value: "A R" }
    ];
    const Enviroment = [
        { key: "Areas", value: "E A" },
        { key: "Buildings", value: "E B" },
        { key: "Celestial Bodies", value: "E C" },
        { key: "Landscapes", value: "E L" }
    ];
    const Human = [
        { key: "Actor", value: "H A" },
        { key: "Descriptor", value: "H D" },
        { key: "Profession", value: " H P" },
        { key: "Relative", value: "H R" }
    ];
    const Object = [
        { key: "Clothing", value: "O C" },
        { key: "Food & Drinks", value: "O E" },
        { key: "Furniture", value: "O F" },
        { key: "Instruments", value: "O I" },
        { key: "Man-made", value: "O M" },
        { key: "Natural", value: "O N" },
        { key: "Other", value: "O O" },
        { key: "Tool", value: "O T" },
        { key: "Weapon", value: " O W" }
    ];
    const Plants = [
        { key: "Edible", value: "P E" },
        { key: "Inedible", value: "P I" }
    ];
    const Other = [
        { key: "Body Part", value: "B" },
        { key: "Collective Noun", value: "C" },
        { key: "Living Thing (Misc.)", value: "L" },
        { key: "Ambiguous", value: "Q" },
        { key: "Supernatural", value: "S" },
        { key: "Vehicle", value: "V" },
        { key: "Weather", value: "W" }
    ];

    // const selected = [];

    return (
        <div>
            <CategoryHolder FilterHeader={"Category"}>
                <Row className="ctg">
                    <CategoryHolder FilterHeader={"Animal"}>
                        {Animal.map((label) => {
                            return <CheckBox updateFilter={props.updateFilter} Label={label} />;
                        })}
                    </CategoryHolder>
                </Row>
                <Row className="ctg">
                    <CategoryHolder className="ctg" FilterHeader={"Enviroment"}>
                        {Enviroment.map((label) => {
                            return <CheckBox updateFilter={props.updateFilter} Label={label} />;
                        })}
                    </CategoryHolder>
                </Row>
                <Row className="ctg">
                    <CategoryHolder className="ctg" FilterHeader={"Human"}>
                        {Human.map((label) => {
                            return <CheckBox updateFilter={props.updateFilter} Label={label} />;
                        })}
                    </CategoryHolder>
                </Row>
                <Row className="ctg">
                    <CategoryHolder FilterHeader={"Object"}>
                        {Object.map((label) => {
                            return <CheckBox updateFilter={props.updateFilter} Label={label} />;
                        })}
                    </CategoryHolder>
                </Row>
                <Row className="ctg">
                    <CategoryHolder FilterHeader={"Plants"}>
                        {Plants.map((label) => {
                            return <CheckBox updateFilter={props.updateFilter} Label={label} />;
                        })}
                    </CategoryHolder>
                </Row>
                <Row className="ctg">
                    <CategoryHolder FilterHeader={"Other"}>
                        {Other.map((label) => {
                            return <CheckBox updateFilter={props.updateFilter} Label={label} />;
                        })}
                    </CategoryHolder>
                </Row>
            </CategoryHolder>
        </div>
    );
}

export default Category;
