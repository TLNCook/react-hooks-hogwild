function Filter({ checked, setChecked, sortBy, setSortBy }) {
    

    function handleGreasedChange() {
        setChecked((currentChecked) => !currentChecked);
    }
    function handleSortChange(e) {
        setSortBy(e.target.value)
    }
    return (
        <div>
            <lable htmlfor='greased'>Greased</lable>
            <input 
                type="checkbox"
                name="greased"
                id="greased"
                onChange={handleGreasedChange}
                checked={checked}
            />

            <fieldset>
                <legend>Select a SORT:</legend>
                <lable htmlFor="name">Name</lable>
                <input 
                    type="radio" 
                    name="name" 
                    id="name" 
                    value="name" 
                    onChange={handleSortChange}
                />
                <lable htmlFor="weight">weight</lable>
                <input 
                    type="radio" 
                    name="weight" 
                    id="weight" 
                    value="weight" 
                    onChange={handleSortChange}
                />
            </fieldset>
        </div>
    );
}
export default Filter