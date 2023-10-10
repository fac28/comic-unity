const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let painting = false;
let colour = 'black';

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

  ctx.lineWidth = 5;
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
const controls = document.querySelector('.controls');

controls.addEventListener('click', (event) => {
  const target = event.target.id;
  console.log(target);
  if (target === 'black-button') colour = 'black';
  if (target === 'blue-button') colour = 'cornflowerblue';
  if (target === 'red-button') colour = 'salmon';

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
