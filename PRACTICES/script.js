// Get the elements
let heading = document.getElementById('heading');
let description = document.getElementById('description');
let changeButton = document.getElementById('changeBtn');

// Function to change text and styling
function changeTextAndStyle() {
    // Change text content
    heading.textContent = 'DOM Manipulation in Action!';
    description.textContent = 'The content and style have been updated!';

    // Change text style
    heading.style.color = 'purple';
    heading.style.fontSize = '36px';
    heading.style.fontFamily = 'Arial, sans-serif';

    description.style.color = 'green';
    description.style.fontSize = '20px';
    description.style.fontStyle = 'italic';
}

// Event listener for the button click
changeButton.addEventListener('click', changeTextAndStyle);
