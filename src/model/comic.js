const db = require('../database/db.js');

const insert_comic = db.prepare(/*sql*/ `
  INSERT INTO comics (image, caption, user_id)
  VALUES ($image, $caption, $user_id)
  RETURNING id
`);

function createComic(image, caption = 'default', user_id = 'Anonymous') {
  return insert_comic.get({ image, caption, user_id });
}

const select_comics = db.prepare(/*sql*/ `
  SELECT image, caption FROM comics 
`);

function listComics() {
  return select_comics.all();
}

const get_comic = db.prepare(/*sql*/ `
  SELECT id, image, caption, user_id, created_at FROM comics WHERE id = ?
`);

function getComicById(id) {
  return get_comic.get(id);
}

module.exports = { createComic, listComics, getComicById };
