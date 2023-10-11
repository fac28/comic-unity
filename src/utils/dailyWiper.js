let day = new Date().getDay();

function reset() {
  db.exec(/*sql*/ `
        DELETE FROM comics;
      `);
}

function dailyWiper(day) {
  const currentDay = new Date().getDay(); // Get the current day (0 for Sunday, 1 for Monday, etc.)

  if (currentDay !== day) {
    reset();
    day = currentDay;
  }
}

module.exports = { dailyWiper };
