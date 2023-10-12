const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const Database = require('better-sqlite3');

// eslint-disable-next-line no-undef
const db = new Database(process.env.DB_FILE);

// eslint-disable-next-line no-undef
const schemaPath = join(__dirname, 'schema.sql');
const schema = readFileSync(schemaPath, 'utf-8');
db.exec(schema);

module.exports = db;
