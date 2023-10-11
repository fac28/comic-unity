const drawImage = () => {
  return /*html*/ `
    <!doctype html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="normalize.css">
    <link rel="stylesheet" href="styles.css">
    <title>Comic-unity</title>
      </head>
      <body>
        <header class='header'>
          <h1>Comic-unity</h1>
          <form action="/draw/back-button" method="GET"><button type="submit" class="button">Go back</button></form>
        </header>
        <main class="card-container">
          <div class="flex">
            <canvas id='canvas' height="500px" width="500px"></canvas>
            <div class="flex-column justify-content-center"><p>Caption:</p><textarea name="caption" id="caption" rows="6">Default Text</textarea>
            </div>
            <div class="flex-column">
              <div class="color-controls">
                <button id='black-button' class="color-button"></button>
                <button id='white-button' class="color-button white"></button>
                <button id='red-button' class="color-button red"></button>
                <button id='orange-button' class="color-button orange"></button>
                <button id='yellow-button' class="color-button yellow"></button>
                <button id='green-button' class="color-button green"></button>
                <button id='blue-button' class="color-button blue"></button>
                <button id='purple-button' class="color-button purple"></button>
              </div>
              <div class="thickness-controls">
                <button id='thickness-1' class="thickness-button"></button>
                <button id='thickness-2' class="thickness-button"></button>
                <button id='thickness-3' class="thickness-button"></button>
                <button id='thickness-4' class="thickness-button"></button>
                <button id='thickness-5' class="thickness-button"></button>
              </div>
              <button id='save-button' class="button">Save Image</button>
            </div>
          </div>
        </main>
        <script src='draw.js'></script>
      </body>
    </html>
  `;
};

module.exports = drawImage;
