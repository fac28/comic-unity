const db = require("../database/db.js");

const insert_comic = db.prepare(/*sql*/ `
  INSERT INTO comics (imageBLOB, caption, user_id)
  VALUES ($imageBLOB, $caption, $user_id)
  RETURNING id
`);

function createComic(imageBLOB, caption, user_id) {
  return insert_comic.get({ imageBLOB, caption, user_id});
}

const select_comics = db.prepare(/*sql*/ `
  SELECT imageBLOB FROM comics 
`);

function listComics() {
  return select_comics.all();
}

// console.log(listComics())

bufferData = Buffer.from(listComics()[0].imageBLOB);

base64Data = bufferData.toString('base64');

console.log(base64Data)

module.exports = { createComic, listComics }