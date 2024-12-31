import { faker } from '@faker-js/faker';
import mysql from 'mysql2';

// Generate a random user
const getRandomUser = () => {
  return [
    faker.string.uuid(),         // UUID for id
    faker.internet.username(),   // Faker username
    faker.internet.email(),      // Faker email
    faker.internet.password()    // Faker password
  ];
};

// Generate 100 fake users
const data = [];
for (let i = 1; i <= 100; i++) {
  data.push(getRandomUser());
}

// MySQL connection configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'my_app',
});

// Query to insert multiple rows
const query = "INSERT INTO user (id, username, email, password) VALUES ?";

// Insert data
connection.query(query, [data], (err, res) => {
  if (err) {
    console.error("Error:", err); // Proper error handling
  } else {
    console.log("Insert Successful:", res); // Log success
  }

  // Close the connection after the query completes
  connection.end();
});
