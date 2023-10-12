const db = require(`../database/db.js`);
const { getComicById } = require(`../model/comic.js`);

function reset() {
  db.exec(/*sql*/ `
        DELETE FROM comics;
        DELETE FROM sqlite_sequence WHERE name IN ('comics');
      `);
}

function weeklyWiper() {
  let comicDate;

  if (getComicById(1)) {
    comicDate = new Date(getComicById(1).created_at).getTime();
  } else {
    comicDate = new Date().getTime();
    console.log('no id=1 comic found');
  }

  let currentDay = new Date().getTime();
  const weekInMilliseconds = 7 * 24 * 60 * 60 * 1000;

  if (currentDay - comicDate >= weekInMilliseconds) {
    reset();
    console.log('comic database reset');
  }
}

module.exports = { weeklyWiper };
