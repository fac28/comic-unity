BEGIN;

INSERT INTO users VALUES
  (1, 'sillyuser1', '$2a$12$A74tKw96m82AEZpJrIEQxecZGscKayJD/hD5/I6DuqKEJoQlAlNYO', '2017-12-25 00:00:00'),
  (2, 'sillyuser2', '$2a$12$o2NP8ykiki.T11qRQOCnBeX68PhwXHprM/hxHkbAfqotWo2XT.vdW', '2017-12-25 00:00:00'),
  (3, 'sillyuser3', '$2a$12$8HIQ9kqN0brBUfDigfSfB.9BlSsICw4LQ/tiw4U/zMW5QWtuTqMG6', '2017-12-25 00:00:00'),
  (4, 'sillyuser4', '$2a$12$vpUb03L0WVHMfrHducL2SumogekzuPfh9Ych0Il8Zkt5Baqch7QZq', '2017-12-25 00:00:00'),
  (5, 'sillyuser5', '$2a$12$4luxIrDKiU.bpasgzWuRwurBeGX8JNc7Q.taioE6nP3ZUGsN8cH2i', '2017-12-25 00:00:00')
-- ON CONFLICT DO NOTHING;

-- INSERT INTO comics VALUES
--   (1, randomblob(16), 'this is steve', 1),
--   (2, randomblob(16), 'he is silly', 2),
--   (3, randomblob(16), 'silly is steve', 3);
-- ON CONFLICT DO NOTHING;

INSERT INTO comics VALUES
  (1, '1', 'this is steve', 1),
  (2, '2', 'he is silly', 2),
  (3, '3', 'silly is steve', 3);
-- ON CONFLICT DO NOTHING;

COMMIT;
