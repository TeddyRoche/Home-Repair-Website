document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".scroll");
    const prevButton = document.getElementById("prev-page");
    const nextButton = document.getElementById("next-page");

    const pages = document.querySelectorAll(".page");
    let currentPageIndex = 0;

    prevButton.addEventListener("click", () => {
        currentPageIndex = (currentPageIndex - 1 + pages.length) % pages.length;
        scrollToPage(currentPageIndex);
    });

    nextButton.addEventListener("click", () => {
        currentPageIndex = (currentPageIndex + 1) % pages.length;
        scrollToPage(currentPageIndex);
    });

    function scrollToPage(index) {
        const page = pages[index];
        scrollContainer.scrollTo({
            left: page.offsetLeft,
            behavior: "smooth",
        });
    }
});

function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    const inputElement = document.querySelector(".Search-Bar .input");
    const searchWrap = document.querySelector(".Search-Bar");
    const widthelement = document.querySelector(".search_wrap .search_box");
    const toggleButton = document.getElementById("toggleButton");
    const input = document.getElementById("myInput");
    function closeSearchBar() {
        inputElement.style.display = "none";
        widthelement.style.width = "60px";
        input.value = "";
    }

    toggleButton.addEventListener("click", function() {
        // Check the current display property
        if (inputElement.style.display === "none" || inputElement.style.display === "") {
            inputElement.style.display = "block";
            widthelement.style.width = "700px";
        } else {
            inputElement.style.display = "none";
        }
    });
    document.body.addEventListener("click", function(event) {
        const isInsideSearchWrap = searchWrap.contains(event.target);
        if (!isInsideSearchWrap) {
            closeSearchBar();
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const button1 = document.querySelector(".search_wrap .search_box .btn.btn_common");
    const button2 = document.querySelector(".search_wrap .search_box .btn-2.btn_common-2");
    const searchWrap = document.querySelector(".Search-Bar");
    const toggleButton = document.getElementById("toggleButton");

    function closeSearchBar() {
        button1.style.display = "block";
        button2.style.display = "none";

    }

    toggleButton.addEventListener("click", function() {
        if (button1.style.display === "block" || button1.style.display === "") {
            button1.style.display = "none";
            button2.style.display = "block";
        } else {
            button1.style.display = "block";
            button2.style.display = "none";
        }
    });
    document.body.addEventListener("click", function(event) {
        const isInsideSearchWrap = searchWrap.contains(event.target);
        if (!isInsideSearchWrap) {
            closeSearchBar();
        }
    });


});
//Lists-------------------------------------------------------------------------------------
const sectionNames = [
    "Home", "Electric", "Plumbing", "Walls", 
    "Floor/Ceiling", "Heat/AC",  "About"
];
const GridPages = {
    Electric: ['outlet'],
    Plumbing: [],
    Walls: [],
    'Floor/Ceiling': [],
    'Heat/AC': [],

};

const imageFormats = ['jpg', 'jpeg', 'png', 'gif', 'webp']; // Add more formats if needed

const styleSheet = document.styleSheets[0]; // Get the first stylesheet
const sectionsContainer = document.querySelector('.sections');


function searchAndOpen() {
    // Get the input value and convert it to lowercase
    const input = document.getElementById("myInput").value.toLowerCase();

    // Check if the input matches any category in GridPages
    for (const category in GridPages) {
        if (GridPages.hasOwnProperty(category)) {
            const keywords = GridPages[category];
            if (keywords.includes(input)) {
                const url = `${input}/${input}.html`;
                openWebpage(url);
                return; // Stop searching after the first match
            }
        }
    }

    alert("No matching category found.");
}

function openWebpage(url) {
    // Open the corresponding webpage in a new tab
    window.location.href = url;
}
