const palette = document.querySelector('.palette');
const generateBtn = document.getElementById('generate-btn');

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generatePalette() {
  palette.innerHTML = ''; 
  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box');
    colorBox.style.backgroundColor = color;
    colorBox.textContent = color;

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
