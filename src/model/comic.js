const db = require('../database/db.js');

const insert_comic = db.prepare(/*sql*/ `
  INSERT INTO comics (image, caption, user_id)
  VALUES ($image, $caption, $user_id)
  RETURNING id
`);

function createComic(image, caption = 'fun', user_id = 'Anonymous') {
  return insert_comic.get({ image, caption, user_id });
}

const select_comics = db.prepare(/*sql*/ `
  SELECT image FROM comics 
`);

function listComics() {
  return select_comics.all();
}

// console.log(listComics())

// bufferData = Buffer.from(listComics()[0].image);

// base64Data = bufferData.toString('base64');

// console.log(base64Data)

module.exports = { createComic, listComics };
