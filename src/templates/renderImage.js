function renderImage (content) {
    return /*html*/ `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Test</title> 
      </head>
      <body>
            <main>
            <h1>test</h1>
                ${content}         
            </main>
        </div>
      </body>
    </html>
  `;
}

module.exports = { renderImage };