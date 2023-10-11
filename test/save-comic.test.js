const test = require('node:test');
const assert = require('node:assert');

const { reset, request } = require('./helpers.js');
const { getComicById } = require(`../src/model/comic.js`);

test('POSTs to /save stores a new comic square', async function () {
  // Call the reset function before running the test
  reset();

  const { status, headers } = await request('/save', {
    method: 'POST',
    body: 'image=testString',
    redirect: 'manual',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
  });

  const comic = getComicById(1);

  assert.equal(
    status,
    302,
    `Expected log in to redirect, got instead status: ${status}`
  );

  assert.equal(
    headers.location,
    '/..',
    `Expected log in to redirect to home page but instead got: ${headers.location}`
  );

  assert.equal(
    comic.id,
    1,
    `Expected a comic with id 1 to exist in the database but got: ${comic.id}`
  );

  assert.equal(
    comic.image,
    'testString',
    `Expected image header to contain 'testString' but instead got: ${comic.image}`
  );
});

test('Subsequent POSTs to /saves stores a following comic square', async function () {
  // Call the reset function before running the test
  reset();

  await request('/save', {
    method: 'POST',
    body: 'image=testString',
    redirect: 'manual',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
  });

  await request('/save', {
    method: 'POST',
    body: 'image=testString2',
    redirect: 'manual',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
  });

  const comic = getComicById(2);

  assert.equal(
    comic.id,
    2,
    `Expected a comic with id 2 to exist in the database but got: ${comic.id}`
  );

  assert.equal(
    comic.image,
    'testString2',
    `Expected image header to contain 'testString2' but instead got: ${comic.image}`
  );
});
