const contentMap = {

};

// Define a function to load content based on the item number
async function loadContent() {
    // Get the item number from the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const itemNumber = urlParams.get('item');

    // Define a function to load content from a file
    async function loadContentFromFile(filePath) {
        try {
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const content = await response.text();
            return content;
        } catch (error) {
            console.error('Error loading content:', error);
            return null;
        }
    }

    // Example usage: Load content from a text file
    const contentFilePath = 'Page-Layout.txt'; // Replace with the actual path to your text file

    // Load content from the file
    const fileContent = await loadContentFromFile(contentFilePath);

    // Get the element where you want to display the content
    const contentElement = document.getElementById('content');

    // Set the content based on the itemNumber or use the file content
    if (itemNumber && contentMap[itemNumber]) {
        contentElement.innerHTML = contentMap[itemNumber];
    } else if (fileContent) {
        contentElement.innerHTML = fileContent;
    } else {
        contentElement.innerHTML = 'Item not found';
    }
}

// Call the loadContent function when the page loads
window.onload = loadContent;
