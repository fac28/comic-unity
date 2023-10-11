const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let painting = false;
let colour = '#333';
let thickness = 5;

function startPosition(e) {
  painting = true;
  draw(e);
}

function endPosition() {
  painting = false;
  ctx.beginPath();
}

function draw(e) {
  if (!painting) return;

  ctx.lineWidth = thickness;
  ctx.lineCap = 'round';
  ctx.strokeStyle = colour;

  ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);

//Colour event listeners
const colControls = document.querySelector('.color-controls');
const thicknessControls = document.querySelector('.thickness-controls');

colControls.addEventListener('click', (event) => {
  const target = event.target.id;
  console.log(target);
  if (target === 'black-button') colour = '#333';
  if (target === 'white-button') colour = 'white';
  if (target === 'red-button') colour = 'salmon';
  if (target === 'orange-button') colour = '#faae70';
  if (target === 'yellow-button') colour = '#f8db3a';
  if (target === 'green-button') colour = '#b1e052';
  if (target === 'blue-button') colour = 'cornflowerblue';
  if (target === 'purple-button') colour = 'mediumpurple';
});

thicknessControls.addEventListener('click', (event) => {
  const target = event.target.id;
  console.log(target);
  if (target === 'thickness-1') thickness = 2;
  if (target === 'thickness-2') thickness = 5;
  if (target === 'thickness-3') thickness = 10;
  if (target === 'thickness-4') thickness = 20;
  if (target === 'thickness-5') thickness = 40;
});

//Save button
const saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', () => {
  // Replace this with the URL of your Node.js server endpoint
  const endpoint = '/save';
  const dataURL = canvas.toDataURL('image/png');
  const base64Data = dataURL.replace(/^data:image\/png;base64,/, ''); // Remove data prefix
  // Send the dataURL to the server for saving

  fetch(endpoint, {
    method: 'POST',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ image: base64Data }),

  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.redirected) {
        window.location.href = response.url;
      }
    })
    .catch((error) => {
      // Handle errors here
      console.error('There was a problem with the fetch operation:', error);
    });
});
