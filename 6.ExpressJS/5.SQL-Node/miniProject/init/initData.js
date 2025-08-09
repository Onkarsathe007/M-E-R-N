const conn = require("../config/conn.js");
// Connect to the database
conn.connect((err) => {
  if (err) {
    console.error("❌ Error connecting to the database:", err);
    return;
  }
  console.log("✅ Connected to MariaDB");

  // Step 1: Create the table if it doesn't exist
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS tasks (
      id INT AUTO_INCREMENT PRIMARY KEY,
      task VARCHAR(255) NOT NULL,
      priority VARCHAR(50) NOT NULL
    )
  `;

  conn.query(createTableQuery, (err) => {
    if (err) {
      console.error("❌ Error creating table:", err);
      return;
    }
    console.log(" Table 'tasks' created or already exists.");

    const initialTasks = [
      ["Learn Node.js", "High"],
      ["Write blog post", "Medium"],
      ["Walk the dog", "Low"],
    ];

    const insertQuery = "INSERT INTO tasks (task, priority) VALUES ?";

    conn.query(insertQuery, [initialTasks], (err, result) => {
      if (err) {
        console.error("❌ Error inserting data:", err);
      } else {
        console.log(`✅ Inserted ${result.affectedRows} rows.`);
      }

      // Close the conn
      conn.end((err) => {
        if (err) console.error("❌ Error closing the conn:", err);
        else console.log("✅ conn closed.");
      });
    });
  });
});
