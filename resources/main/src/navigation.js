"use strict";

/*
The website is divided into a few sections. Only one section is visible at a time.
Multipage UX is simulated via a URL parameter, e.g. `?section=pageA`, `?section=pageB`.
*/

const nav = ["home", "games", "coding", "music", "irl", "czech"]; // section identifiers
const radios = []; // navigation button references
const sections = []; // section references

const paramPrefix = "?section=";
const paramPrefixLength = paramPrefix.length;

// When the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // Get references for navigation buttons and set their onclick listeners; Get references for sections
    nav.forEach((element, index) => {
        radios[index] = document.getElementById(`r_${element}`);
        radios[index].onclick = function () {
            navigationClick(element, true);
        };

        sections[index] = document.getElementById(`s_${element}`);
    });

    // If there is already some URL parameter, try to show corresponding section (same logic as user clicking a navigation button)
    // Else the default section will be shown
    navigationClick(window.location.search.substring(paramPrefixLength), false);
});

// When user clicks a navigation button or on page load
const navigationClick = (id, isFromButton) => {

    if (!isFromButton) {
        // If the URL parameter is not in the correct format, set it to the default value (`?section=home`)
        if (!nav.includes(id)) {
            id = nav[0];
        }

        // Check the corresponding button
        radios[nav.indexOf(id)].checked = true;
    }

    // Show section corresponding to the `id` and hide the rest
    nav.forEach((element, index) => {
        sections[index].style = `display: ${id === element ? "default" : "none"}`;
    });

    // Change the URL parameter
    history.replaceState(null, "", `${paramPrefix}${id}`);
};
