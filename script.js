//Pop-up ------------------------------------------------------------------------------------
//window.onload = function() {
//    alert("Welcome! This is my Current Senior Project that is currently in Development and is not live yet. Please feel free to look around, but dont expect a finished project. Thank You!!");
//};

document.addEventListener("DOMContentLoaded", function() {
    const inputElement = document.querySelector(".Search-Bar .input");
    const searchWrap = document.querySelector(".Search-Bar");
    const widthelement = document.querySelector(".search_wrap .search_box");
    const toggleButton = document.getElementById("toggleButton");
    function closeSearchBar() {
        inputElement.style.display = "none";
        widthelement.style.width = "60px";
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
    "Floor-&-Ceiling", "Heat-&-AC",  "About"
];
const GridPages = {
    Electric: ['outlet'],
    Plumbing: [],
    Walls: [],
    'Floor-&-Ceiling': [],
    'Heat-&-AC': [],

};

const imageFormats = ['jpg', 'jpeg', 'png', 'gif', 'webp']; // Add more formats if needed

const styleSheet = document.styleSheets[0]; // Get the first stylesheet
const sectionsContainer = document.querySelector('.sections');


function Search_Function(){
    const input = document.getElementById("myInput").value;
    sectionNames.forEach(sectionName => {
        for(const i of GridPages[sectionName]){
            if (input == i){
                location.href = `Webpages/${i}/${i}.html?item=${i}`;
                return false;
            }
            else if (input == "sad"){
                location.href = "suggestion_sad.html";
                return false;
            }
            else {
                alert('Invalid Input.');
            }
        }
    });
}
    


//Background Color------------------------------------------------------------------------
sectionNames.forEach(sectionName => {
    if (sectionName !== "Home" && sectionName !== "About") {
    const sectionClassName = sectionName.replace(/\s+/g, '-').toLowerCase();
    const sectionDiv = document.createElement('div');
    sectionDiv.classList.add(sectionClassName);
    sectionDiv.classList.add('section'); // Add a class to the section
    sectionDiv.id = sectionName.toLowerCase().replace(/\s+/g, '-');

    //Background Image---------------------------------------------------------------------
    let sectionImageFormat = null;
    for (const format of imageFormats) {
        const imageUrl = `images/${sectionClassName}.${format}`;

        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
            sectionImageFormat = format;
            const sectionImageUrl = `images/${sectionClassName}.${sectionImageFormat}`;
            sectionDiv.style.backgroundImage = `url(${sectionImageUrl})`;

        };
    }

    const sectionLink = document.createElement('a');
    sectionLink.href = `#${sectionDiv.id}`;
    sectionLink.textContent = sectionName;
    const sectionGrid = document.createElement('section');
    sectionGrid.classList.add('grid-con');
    console.log(GridPages[sectionName].length);
    // Creates the Grid----------------------------------------------------------------------
    if (GridPages.hasOwnProperty(sectionName)) {
        for (const i of GridPages[sectionName]) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.style.borderWidth = '2px';
            gridItem.style.borderStyle = 'solid';
            
            // Grid Images
            let backgroundImageUrl;
            for (const format of imageFormats) {
                const imageUrl = `WebPages/${i}/${i}.${format}`;
                const img = new Image();
                img.src = imageUrl;
                img.onload = () => {
                    backgroundImageUrl = imageUrl;
                    gridItem.style.backgroundImage = `url(${backgroundImageUrl})`;
                    gridItem.style.backgroundSize = 'cover';
                    gridItem.style.backgroundRepeat = 'no-repeat';
                    gridItem.style.backgroundPosition = 'center';
                };
            }

            const spanItem = document.createElement('span');
            spanItem.classList.add('item');
            spanItem.classList.add(`${i}`);

            const link = document.createElement('a');
            link.href = `WebPages/${i}/${i}.html?item=${i}`;
            link.appendChild(spanItem);

            gridItem.appendChild(link);
            sectionGrid.appendChild(gridItem);

        }
    }
    sectionDiv.appendChild(sectionLink);
    sectionDiv.appendChild(sectionGrid);
    sectionsContainer.appendChild(sectionDiv);
    }
});

// Get all section elements
const sectionElements = document.querySelectorAll('.section');

// Set the "Electric" section as active when the page loads
document.addEventListener("DOMContentLoaded", function () {
    // Activate the "Electric" section
    const firstSection = document.getElementById('electric');
    firstSection.classList.add('active-section');

    // Deactivate all other sections (except "Home")
    sectionElements.forEach(function (section) {
        if (section !== firstSection && section.id !== 'home' && section.id !== 'about') {
            section.classList.add('hidden-section');
        }
    });
});

//Background Image-------------------------------------------------------------------------
function setBackgroundImage(sectionElement, sectionName) {
    const imageName = sectionName.toLowerCase().replace(/\s+/g, '-');
    const imageUrl = `images/${imageName}.jpg`; // Adjust the path to your images folder
    
    sectionElement.style.backgroundImage = `url('${imageUrl}')`;
}

//Side Menu-------------------------------------------------------------------------------------
const scrollButtonsContainer = document.querySelector('.scroll-buttons');

sectionNames.forEach((sectionName, index) => {
    // Skip the first item (index 0), which is "Home"
    if (index === 0 || index === sectionNames.length -1) {
        return;
    }

    const scrollButton = document.createElement('a');
    scrollButton.classList.add('scroll-button');
    scrollButton.href = `#${sectionName.toLowerCase().replace(/ /g, '-')}`;
    scrollButton.textContent = sectionName;
    scrollButtonsContainer.appendChild(scrollButton);
});


//Scroll Wheel Snap----------------------------------------------------------------------------
let currentIndex = 0;

function scrollToSection(index) {
    const targetSection = document.querySelector('.section');
    if (targetSection) {
        const offsetTop = targetSection.clientHeight * index;
        
    }
}

document.querySelectorAll('.scroll-button').forEach((link, index) => {
    link.addEventListener('click', event => {
        event.preventDefault();

        currentIndex = index; // Update currentIndex on link click

        scrollToSection(currentIndex);

        sectionElements.forEach(function (section, i) {
            if (i === currentIndex || section.id === 'home' || section.id === 'about') {
                section.classList.remove('hidden-section');
                section.classList.add('active-section');
            } else {
                section.classList.add('hidden-section');
                section.classList.remove('active-section');
            }
        });
    });
});

//Banner Button------------------------------------------------------------------------------
const sliderLinks = document.querySelectorAll('.slider-link');

sliderLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        const target = event.target.dataset.target;
        const targetElement = document.getElementById(target);
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
});
//Banner Button------------------------------------------------------------------------------

//Banner-------------------------------------------------------------------------------------
     // Get the slider element
const slider = document.querySelector('.slider');
// Get the total number of slides
const totalSlides = slider.children.length;
// Set the current slide index
let currentSlide = 0;

// Function to scroll to the next slide
function scrollToNextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  const slideWidth = slider.offsetWidth;
  slider.scroll({
    left: slideWidth * currentSlide,
    behavior: 'smooth'
  });
}

// Set an interval to scroll to the next slide every 15 seconds
setInterval(scrollToNextSlide, 15000);
//Banner-------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const sections = ['home-sec', 'sections-sec', 'about-sec'];
    let wheelIndex = 0;
    let isScrolling = false;

    function scrollToSection(index) {
        const targetSection = document.getElementById(sections[index]);
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    
    // Scroll to the initial section (Home)
    scrollToSection(wheelIndex);
});


