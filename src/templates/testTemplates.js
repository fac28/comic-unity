function testTag (base64image) {
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
                <img src="data:image/png;base64,${base64image}" alt="Base64 Image">          
            </main>
        </div>
      </body>
    </html>
  `;
}

module.exports = { testTag };