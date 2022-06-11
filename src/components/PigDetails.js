function PigDetails({greased, weight, specialty, highestMedalAchieved}) {
    return (
        <section>
            <p>{greased ? "greased" : "clean"} - {weight} - {specialty} - {" "} {highestMedalAchieved}
            </p>
        </section>
    )
}
export default PigDetails