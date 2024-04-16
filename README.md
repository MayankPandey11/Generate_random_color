# Generate_random_color

```javascript
// Generate a random RGB color
function generateRandomColor() {
    const r = Math.floor(Math.random() * 255); // Random value for red (0-255)
    const g = Math.floor(Math.random() * 255); // Random value for green (0-255)
    const b = Math.floor(Math.random() * 255); // Random value for blue (0-255)
    return `rgb(${r}, ${g}, ${b})`; // Return the RGB color string
}

// Usage example
const randomColor = generateRandomColor();
console.log(randomColor); // Output the random RGB color
