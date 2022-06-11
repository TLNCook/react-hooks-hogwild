import React, { useState } from "react";
import PigDetails from "./PigDetails"

function HogItem({ 
    name, 
    image, 
    greased, 
    specialty, 
    weight, 
    'highest medal achieved': highestMedalAchieved,
}) {
const [showDetails, setShowDetails] = useState(false)
    function handleClick() {
        setShowDetails((currentShowDetails) => !currentShowDetails)
    }
    return(
        <article className='pigTile' onClick={handleClick}>
            <h3>{name}</h3>
            <img src={image} alt={name} className="miniPigTile"/>
            { showDetails && (
            <PigDetails 
                greased={greased} 
                specialty={specialty} 
                weight={weight} 
                highestMedalAchieved={highestMedalAchieved}
            /> 
        )}
            {/* could also write { showDetails && <p> this pig was clicked on </p>} */}
        </article>
    );
}
export default HogItem