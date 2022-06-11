import { useState } from 'react'
import HogItem from "./HogItem"
import Filter from "./Filter"

function HogList({ hogs }) {
    const [checked, setChecked] = useState(false);
    const [sortBy, setSortBy] = useState(false);

    const greasedHogs = hogs.filter((hog) => hog.greased);
    const filteredHogs = checked ? greasedHogs : hogs

    // could also write it as:
    // const filteredHogs = hogs.filter((hog) => checked ? checked === hog.greased : true)
    
    function sortedHogs() {
        if (sortBy == "name") {
            const sortedByName = [...filteredHogs].sort((hogA, hogB) => hogA.name.toLowerCase().localeCompare(hogB.name.toLowercse())
            );
            return sortedByName;
        } else if (sortBy === "weight") {
            const sortedByWeight = [...filteredHogs].sort((hogA, hogB) => hogA.weight - hogB.weight);
            return sortedByWeight;
        } else {
            return filteredHogs;
        }
    }

    const renderHogs = sortedHogs().map((hog) => (<HogItem key={hog.name} {...hog} />
    ));

    return (
        <main>
            <Filter 
                checked={checked} 
                setChecked={setChecked} 
                sortBy={sortBy} 
                setSortBy={setSortBy}
            />
            {renderHogs}
        </main>
    )}

export default HogList