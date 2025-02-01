const palette = document.querySelector('.palette');
const generateBtn = document.getElementById('generate-btn');

// Function to generate a random hex color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to generate the color palette
function generatePalette() {
  palette.innerHTML = ''; // Clear previous colors
  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box');
    colorBox.style.backgroundColor = color;
    colorBox.textContent = color;

    // Add click event to copy color code
    colorBox.addEventListener('click', () => {
      navigator.clipboard.writeText(color).then(() => {
        alert(`Copied: ${color}`);
      });
    });

    palette.appendChild(colorBox);
  }
}

// Generate palette on button click
generateBtn.addEventListener('click', generatePalette);

// Generate initial palette on page load
generatePalette();