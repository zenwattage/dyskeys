-- Users table for storing user id, email, and password
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL
);

-- Alphabets table for storing alphabet types, and their uppercase and lowercase characters
CREATE TABLE alphabets (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    uppercase_characters TEXT NOT NULL,
    lowercase_characters TEXT NOT NULL
);

-- Dictionary table for storing words and their definitions
CREATE TABLE dictionary (
    id SERIAL PRIMARY KEY,
    word VARCHAR(255) UNIQUE NOT NULL,
    definition TEXT NOT NULL
);

-- UserAlphabets table for storing user chosen rotated version of an alphabet
CREATE TABLE user_alphabets (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    alphabet_id INTEGER NOT NULL,
    rotation INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (alphabet_id) REFERENCES alphabets(id) ON DELETE CASCADE
);