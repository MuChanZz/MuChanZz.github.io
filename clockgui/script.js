const clockElement = document.getElementById('clock');
const settingsElement = document.getElementById('window');

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    clockElement.textContent = timeString;
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Shift") { // 右Shiftキー判定
        const targetElement = document.getElementById('draggable');
        if (targetElement.classList.contains('hidden')) {
            targetElement.classList.remove('hidden');
        } else {
            targetElement.classList.add('hidden');
        }
    }
});

document.getElementById('border-width').addEventListener('input', (event) => {
    const value = event.target.value;
    document.getElementById('border-width-value').textContent = value;
    clockElement.style.borderWidth = `${value}px`;
});

document.getElementById('border-color').addEventListener('input', (event) => {
    const value = event.target.value;
    clockElement.style.borderColor = value;
});

document.getElementById('box-color').addEventListener('input', (event) => {
    const value = event.target.value;
    clockElement.style.backgroundColor = value;
});

document.getElementById('text-color').addEventListener('input', (event) => {
    const value = event.target.value;
    clockElement.style.color = value;
});

document.getElementById('shadow-color').addEventListener('input', (event) => {
    const value = event.target.value;
    clockElement.style.boxShadow = `0 0 ${document.getElementById('blur').value}px ${value}`;
});

document.getElementById('blur').addEventListener('input', (event) => {
    const value = event.target.value;
    document.getElementById('blur-value').textContent = value;
    clockElement.style.boxShadow = `0 0 ${value}px ${document.getElementById('shadow-color').value}`;
});

document.getElementById('font-size').addEventListener('input', (event) => {
    const value = event.target.value;
    document.getElementById('font-size-value').textContent = value;
    clockElement.style.fontSize = `${value}px`;
});

document.getElementById('box-width').addEventListener('input', (event) => {
    const value = event.target.value;
    document.getElementById('box-width-value').textContent = value;
    clockElement.style.width = `${value}px`;
});

setInterval(updateClock, 1000);
updateClock();

const windowElement = document.getElementById('draggable');
    const titleBar = windowElement.querySelector('.settings-window');

    let isDragging = false;
    let offsetX, offsetY;

    titleBar.addEventListener('mousedown', function(e) {
        isDragging = true;
        offsetX = e.clientX - windowElement.offsetLeft;
        offsetY = e.clientY - windowElement.offsetTop;
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            windowElement.style.left = (e.clientX - offsetX) + 'px';
            windowElement.style.top = (e.clientY - offsetY) + 'px';
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
    });

const inputRange1 = document.getElementById("border-width");
const activeColor1 = "#0066d3";
const inactiveColor1 = "#555555";

inputRange1.addEventListener("input", function() {
  const ratio = (this.value - this.min) / (this.max - this.min) * 100;
  this.style.background = `linear-gradient(90deg, ${activeColor1} ${ratio}%, ${inactiveColor1} ${ratio}%)`;
});

const inputRange2 = document.getElementById("blur");
const activeColor2 = "#0066d3";
const inactiveColor2 = "#555555";

inputRange2.addEventListener("input", function() {
  const ratio = (this.value - this.min) / (this.max - this.min) * 100;
  this.style.background = `linear-gradient(90deg, ${activeColor2} ${ratio}%, ${inactiveColor2} ${ratio}%)`;
});

const inputRange3 = document.getElementById("font-size");
const activeColor3 = "#0066d3";
const inactiveColor3 = "#555555";

inputRange3.addEventListener("input", function() {
  const ratio = (this.value - this.min) / (this.max - this.min) * 100;
  this.style.background = `linear-gradient(90deg, ${activeColor3} ${ratio}%, ${inactiveColor3} ${ratio}%)`;
});

const inputRange4 = document.getElementById("box-width");
const activeColor4 = "#0066d3";
const inactiveColor4 = "#555555";

inputRange4.addEventListener("input", function() {
  const ratio = (this.value - this.min) / (this.max - this.min) * 100;
  this.style.background = `linear-gradient(90deg, ${activeColor4} ${ratio}%, ${inactiveColor4} ${ratio}%)`;
});