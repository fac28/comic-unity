const canvas = document.getElementById('canvas');
const caption = document.getElementById('caption');
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
  const target = event.target;
  switch (target.id) {
    case 'black-button':
      colour = '#333';
      colorSelected(target, '6495ed');
      break;
    case 'white-button':
      colour = 'white';
      colorSelected(target, '6495ed');
      break;
    case 'red-button':
      colour = 'salmon';
      colorSelected(target, '6495ed');
      break;
    case 'orange-button':
      colour = '#faae70';
      colorSelected(target, '6495ed');
      break;
    case 'yellow-button':
      colour = '#f8db3a';
      colorSelected(target, '9370d8');
      break;
    case 'green-button':
      colour = '#b1e052';
      colorSelected(target, 'faae70');
      break;
    case 'blue-button':
      colour = 'cornflowerblue';
      colorSelected(target, 'faae70');
      break;
    case 'purple-button':
      colour = 'mediumpurple';
      colorSelected(target, 'faae70');
      break;
  }
});

function colorSelected(e, color) {
  const buttons = document.querySelectorAll('.color-button');
  for (const button of buttons) {
    button.style.boxShadow = "";
  }
  e.style.boxShadow = `inset 0 0 0 5px #${color}`;
}

thicknessControls.addEventListener('click', (event) => {
  const target = event.target;
  switch (target.id) {
    case 'thickness-1':
      thickness = 2;
      thicknessSelected(target);
      break;
    case 'thickness-2':
      thickness = 5;
      thicknessSelected(target);
      break;
    case 'thickness-3':
      thickness = 10;
      thicknessSelected(target);
      break;
    case 'thickness-4':
      thickness = 20;
      thicknessSelected(target);
      break;
    case 'thickness-5':
      thickness = 40;
      thicknessSelected(target);
      break;
  }
});

function thicknessSelected(e) {
  const buttons = document.querySelectorAll('.thickness-button');
  for (const button of buttons) {
    button.style.boxShadow = "";
  }
  e.style.boxShadow = `inset 0 0 0 5px #6495ed`;
}

//Save button
const saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', () => {
  // Replace this with the URL of your Node.js server endpoint
  const endpoint = '/save';
  const dataURL = canvas.toDataURL('image/png');
  const base64Data = dataURL.replace(/^data:image\/png;base64,/, ''); // Remove data prefix

  if (caption.value.length > 50) {
    // alert('Please enter a caption with fewer than 50 characters.');
    if (!document.getElementById('captionError')) {
      const feedback = document.createElement('p');
      feedback.textContent = '⚠️ Caption limit of 50 characters!';
      feedback.setAttribute('id', 'captionError');
      caption.after(feedback);
    }
    return console.log(caption.value.length);
  }

  fetch(endpoint, {
    method: 'POST',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ image: base64Data, caption: caption.value }),
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
