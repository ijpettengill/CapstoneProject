CREATE TABLE users (
  username varchar(25) PRIMARY KEY,
  password TEXT NOT NULL,
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL CHECK (position('@' IN email) > 1),
  is_admin boolean NOT NULL DEFAULT FALSE,
  zip_code integer
);

CREATE TABLE config (
  api_key text PRIMARY KEY,
  secret_key text NOT NULL,
  api_token text NOT NULL
);

CREATE TABLE favorite (
  user_id varchar(25) REFERENCES users ON DELETE CASCADE,
  pet_id integer,
  pet_info text NOT NULL,
  PRIMARY KEY (user_id, pet_id)
);

CREATE TABLE recently_view_pet (
  user_id varchar(25) REFERENCES users ON DELETE CASCADE,
  pet_id integer,
  pet_info text NOT NULL,
  PRIMARY KEY (user_id, pet_id)
);

CREATE TABLE pet_comments (
  msg_id serial,
  pet_id integer NOT NULL,
  user_id varchar(25) REFERENCES users ON DELETE CASCADE,
  pet_info text NOT NULL,
  msg_title text NOT NULL,
  msg_body text NOT NULL,
  msg_time timestamp NOT NULL,
  PRIMARY KEY (msg_id, pet_id)
);

CREATE TABLE
CACHE (
  request_url text PRIMARY KEY,
  request_response text NOT NULL,
  request_time timestamp NOT NULL
);

CREATE INDEX request_url ON
CACHE (request_url);