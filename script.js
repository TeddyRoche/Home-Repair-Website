

//Pop-up ------------------------------------------------------------------------------------
window.onload = function() {
    alert("Welcome! This is my Current Senior Project that is currently in Development and is not live yet. Please feel free to look around, but dont expect a finished project. Thank You!!");
};
//Pop-up ------------------------------------------------------------------------------------


document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.querySelector(".dropdown");
    var dropdownContent = document.querySelector(".dropdown-content");
    
    dropdown.addEventListener("click", function() {
        dropdown.classList.toggle("open");
    });
});


const sectionNames = [
    "Home", "Kitchen", "Living Room", "Office", 
    "Attic", "Bathroom", "Dinning Room", 
    "Bedroom", "Basement", "Laundry Room"
];
const imageFormats = ['jpg', 'jpeg', 'png', 'gif']; // Add more formats if needed

const styleSheet = document.styleSheets[0]; // Get the first stylesheet
const sectionsContainer = document.querySelector('.sections');


sectionNames.forEach(sectionName => {
    const sectionClassName = sectionName.replace(/\s+/g, '-').toLowerCase();
    const cssRule = `
        .${sectionClassName} {
            background-color: ${getRandomColor()};
        }
    `;
    styleSheet.insertRule(cssRule, styleSheet.cssRules.length);

    

    const sectionDiv = document.createElement('div');
    sectionDiv.classList.add(sectionClassName);
    sectionDiv.classList.add('section'); // Add a class to the section
    sectionDiv.id = sectionName.toLowerCase().replace(/\s+/g, '-');

    let sectionImageFormat = null;
    for (const format of imageFormats) {
        const imageUrl = `images/${sectionClassName}.${format}`;
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
            sectionImageFormat = format;
            const sectionImageUrl = `images/${sectionClassName}.${sectionImageFormat}`;
            sectionDiv.style.backgroundImage = `url(${sectionImageUrl})`;
            sectionDiv.style.backgroundSize = 'cover'; // This makes the image cover the entire element
            sectionDiv.style.backgroundRepeat = 'no-repeat';
            sectionDiv.style.backgroundPosition = 'center';
            sectionDiv.style.opacity = '70%';
        };
    }

    const sectionLink = document.createElement('a');
    sectionLink.href = `#${sectionDiv.id}`;
    sectionLink.textContent = sectionName;

    const sectionGrid = document.createElement('section');
    sectionGrid.classList.add('grid-con');

    for (let i = 1; i <= 6; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item'); 
        gridItem.style.backgroundColor = getRandomColor(); 
        gridItem.style.border = getRandomColor(); 
        gridItem.style.borderWidth = '2px';
        gridItem.style.borderStyle = 'solid';

        let backgroundImageUrl;
        for (const format of imageFormats) {
        const imageUrl = `images/${sectionClassName}-${i}.${format}`;
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
            backgroundImageUrl = imageUrl;
            gridItem.style.backgroundImage = `url(${backgroundImageUrl})`;
            gridItem.style.backgroundSize = 'cover'; // This makes the image cover the entire element
            gridItem.style.backgroundRepeat = 'no-repeat';
            gridItem.style.backgroundPosition = 'center';
        };
    }

        const spanItem = document.createElement('span');
        spanItem.classList.add('item');
        spanItem.classList.add(`${sectionClassName}-${i}`);
        spanItem.textContent = i;
        gridItem.appendChild(spanItem);
        sectionGrid.appendChild(gridItem);
    }

    sectionDiv.appendChild(sectionLink);
    sectionDiv.appendChild(sectionGrid);
    sectionsContainer.appendChild(sectionDiv);
});

function setBackgroundImage(sectionElement, sectionName) {
    const imageName = sectionName.toLowerCase().replace(/\s+/g, '-');
    const imageUrl = `images/${imageName}.jpg`; // Adjust the path to your images folder
    sectionElement.style.backgroundImage = `url('${imageUrl}')`;
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const scrollButtonsContainer = document.querySelector('.scroll-buttons');

        sectionNames.forEach(sectionName => {
            const scrollButton = document.createElement('a');
            scrollButton.classList.add('scroll-button');
            scrollButton.href = `#${sectionName.toLowerCase().replace(/ /g, '-')}`;
            scrollButton.textContent = sectionName;
            scrollButtonsContainer.appendChild(scrollButton);
        });

// Scroll wheel snapping behavior
let currentIndex = 0;
let isScrolling = false;

function scrollToSection(index) {
    const targetSection = document.querySelector('.section');
    if (targetSection) {
        const offsetTop = targetSection.clientHeight * index;
        isScrolling = true;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

document.querySelectorAll('.scroll-button').forEach((link, index) => {
    link.addEventListener('click', event => {
        event.preventDefault();
        currentIndex = index; // Update currentIndex on link click
        scrollToSection(currentIndex);
    });
});

window.addEventListener('wheel', event => {
    if (!isScrolling) {
        if (event.deltaY > 0) {
            currentIndex = Math.min(currentIndex + 1, sectionNames.length - 1);
        } else {
            currentIndex = Math.max(currentIndex - 1, 0);
        }

        scrollToSection(currentIndex);

        event.preventDefault();
    }
});

window.addEventListener('scroll', () => {
    isScrolling = false;
});


