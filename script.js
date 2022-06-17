const segments = [
    "green",
    "red",
    "yellow",
    "blue",
];

function setOutput(goal, resultSegment, resultValue, distanceToCenter) {
    const output = document.querySelector(".output");
    output.querySelector(".goal").innerText = `Goal: ${goal}`;
    output.querySelector(".result").innerText = `Result: ${resultSegment} (${resultValue})`;
    output.querySelector(".distance").innerText = `Distance to center: ${distanceToCenter}`;
}

document.querySelectorAll(".wc > .wheel").forEach((element) => {
    element.addEventListener("click", () => {
        let goal = Math.random() * 36000;

        element.style.transitionDuration = "";
        element.parentNode.querySelector(".wheel-arrow").style.transitionDuration = "0s";
        element.parentNode.querySelector(".wheel-arrow").style.transform = "";

        // Reset the wheel
        element.style.transitionDuration = "0s";
        element.style.transform = "rotate(0deg)";
        element.style.transitionDuration = "";

        // Spin the wheel
        element.style.transform = `rotate(${goal}deg)`;

        // Get the result
        let result = Math.floor(
            (
                goal
                + (360 / segments.length / 2) // Is needed if pointer is in the center of a segment
            )
            / (360 / segments.length)
        ) % segments.length;

        // Get how close the pointer is to the center of the segment
        let distanceToCenter = ((
            (
                goal
                + (360 / segments.length / 2) // Is needed if pointer is in the center of a segment
            )
            / (360 / segments.length)
        ) % 1 - 0.5) * 2;

        setOutput(goal, segments[result], result, distanceToCenter);
    });
});