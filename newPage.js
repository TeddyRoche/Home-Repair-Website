const gridItemDestinations = {
    electric: ['electric1.html', 'electric2.html', 'electric3.html', 'electric4.html', 'electric5.html', 'electric6.html'],
    plumbing: ['plumbing1.html', 'plumbing2.html', 'plumbing3.html', 'plumbing4.html', 'plumbing5.html', 'plumbing6.html'],
    walls: ['walls1.html', 'walls2.html', 'walls3.html', 'walls4.html', 'walls5.html', 'walls6.html'],
    'floor-&-ceiling': ['floor-&-ceiling1.html', 'floor-&-ceiling2.html', 'floor-&-ceiling3.html', 'floor-&-ceiling4.html', 'floor-&-ceiling5.html', 'floor-&-ceiling6.html'],
    'heat-&-ac': ['heat-&-ac1.html', 'heat-&-ac2.html', 'heat-&-ac3.html', 'heat-&-ac4.html', 'heat-&-ac5.html', 'heat-&-ac6.html'],

};

function createAndNavigateToHTMLPage(sectionName, itemNumber) {
    const content = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>${sectionName} Item ${itemNumber}</title>
        </head>
        <body>
            <h1>${sectionName} Item ${itemNumber}</h1>
            <!-- Add your content here -->
        </body>
        </html>
    `;

    // Create a Blob from the HTML content
    const blob = new Blob([content], { type: 'text/html' });

    // Generate a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create an anchor link to navigate to the new page
    const link = document.createElement('a');
    link.href = url;

    // Trigger a click event to navigate to the new page
    link.click();

    // Revoke the URL to free up resources (optional)
    URL.revokeObjectURL(url);
}