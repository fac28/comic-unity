const insert_comic = db.prepare(/*sql*/ `
  INSERT INTO comics (image, caption, user_id)
  VALUES ($image, $caption, $user_id)
  RETURNING id
`);

function createComic(image, caption, user_id) {
  return insert_comic.get({ image, caption, user_id});
}

const select_comics = db.prepare(/*sql*/ `
  SELECT content, created_at FROM comics 
  ORDER BY created_at DESC
`);

function listComics() {
  return select_comics.all();
}

module.exports = { createComic, listComics }