"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const span = document.getElementById("age");

    const birthDate = new Date(2001, 8, 22); // Months start from zero, so 8 is September, ugh..

    const ageDate = new Date(Date.now() - birthDate.getTime());

    span.textContent = `${Math.abs(ageDate.getUTCFullYear() - 1970)}`;
});
