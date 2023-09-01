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
