
const comicHome = () => {
  return /*html*/ `
    <!doctype html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="normalize.css">
    <link rel="stylesheet" href="styles.css">
    <title>Comic-Unity</title>
      </head>
      <body>
        <h1>Hello</h1>
        <canvas id='canvas' width="500px" height="500px"></canvas>
        <button id="save-button">Save Button</button>
      </body>
      <script src="draw.js"></script>
    </html>
  `;
};

module.exports = comicHome;
