const comicHome = (content) => {
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
        <header class='header'>
          <h1>Comic-unity</h1>
          <form action="/button" method="GET"><button type="submit" class="button">+</button></form>
        </header>
        <main class="card-container">
          ${content
            .map(
              (x) => /*html*/ `<div class="card">
                  <img src="data:image/png;base64,${x.image}" alt="Base64 Image">
                  <p>${x.caption}</p>
                </div>`
            )
            .join('')}
        </main>
      </body>
    </html>
  `;
};

module.exports = comicHome;
