const db = require(`../database/db.js`);
const { getComicById } = require(`../model/comic.js`);

function reset() {
  db.exec(/*sql*/ `
        DELETE FROM comics;
        DELETE FROM sqlite_sequence WHERE name IN ('comics');
      `);
}

function dailyWiper() {
  let comicDay;

  if (getComicById(1)) {
    comicDay = new Date(getComicById(1).created_at).getDay();
  } else {
    comicDay = new Date().getDay();
    console.log('no id=1 comic found');
  }

  let currentDay = new Date().getDay();

  if (currentDay !== comicDay) {
    reset();
    console.log('comic database reset');
  }
}

module.exports = { dailyWiper };
