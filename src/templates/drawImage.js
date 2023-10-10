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
            <div class="flex-column">
              <div class="controls">
                <button id='red-button' class="button red">red</button>
                <button id='blue-button' class="button blue">blue</button>
                <button id='black-button' class="button">black</button>
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
