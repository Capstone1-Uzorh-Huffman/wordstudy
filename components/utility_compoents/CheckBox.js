function CheckBox(props) {
    return (
        <label className="checkLabel">
            <input
                onChange={(event) => {
                    let checkVal = event.target.checked;
                    props.updateFilter(props.Label.value, checkVal);
                }}
                className="checkInput"
                type="checkbox"
            />
            {props.Label.key}
        </label>
    );
}

export default CheckBox;
