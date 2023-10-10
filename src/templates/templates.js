function layout({ title, content }) {
  return /*html*/ `
    <!doctype html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="normaliz.css">
    <link rel="stylesheet" href="styles.css">
    <title>${title}</title>
      </head>
      <body>
          ${content}
        </div>
      </body>
    </html>
  `;
}

module.exports = layout;
