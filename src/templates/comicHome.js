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
        <header>
          <h1>Comic-unity</h1>
          <form><button>+</button></form>
        </header>
        <main>
          ${content}
        </main>
      </body>
    </html>
  `;
};

module.exports = comicHome;
