const DIR = 'src';

const server = require(`../${DIR}/server.js`);
const db = require(`../${DIR}/database/db.js`);

function reset() {
  db.exec(/*sql*/ `
      DELETE FROM users;
      DELETE FROM sessions;
      DELETE FROM comics;
      DELETE FROM sqlite_sequence WHERE name IN ('sessions', 'users', 'comics');
    `);
}

async function request(pathname, options = {}) {
  const app = server.listen(0);
  const { port } = app.address();
  const url = new URL(pathname, `http://localhost:${port}`);
  options.headers = { ...options.headers, connection: 'close' };
  const response = await fetch(url, options);
  app.close();
  const body = await response.text();
  const headers = Object.fromEntries(response.headers);
  return { status: response.status, body, headers };
}

const get_comic = db.prepare(/*sql*/ `
  SELECT id, image, caption, user_id FROM comics WHERE id = ?
`);

function getComicById(id) {
  return get_comic.get(id);
}

module.exports = {
  reset,
  request,
  db,
  getComicById,
};
