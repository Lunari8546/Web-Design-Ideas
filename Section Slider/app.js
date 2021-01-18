// Section Slider
var sections = document.getElementsByTagName("section");

var currentSection = document.querySelector(".currentSection");
var currentSectionIndex = 0;

refreshSectionIndex();

// window.onscroll is hard-coded.
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (currentScrollPos < (window.innerHeight)) {
        if (currentScrollPos >= (window.innerHeight * 0.5)) {
            sections[1].classList.remove("hidden");
        } else {
            sections[1].classList.add("hidden");
        };
    };

    refreshSectionIndex();
};

function refreshSectionIndex() {
    for (i = 0; i < sections.length; i++) {
        if (!sections[i].classList.contains("hidden")) {
            currentSectionIndex = i;
        };
    };

    var maxSection = document.querySelector(".maxSection");

    currentSection.textContent = "0" + (currentSectionIndex + 1);
    maxSection.textContent = "0" + sections.length;

    var sliderLine = document.querySelector(".sliderLine");
    var height = 22.7 / (sections.length / (currentSectionIndex + 1));

    sliderLine.style.height = `${height}vh`;
}