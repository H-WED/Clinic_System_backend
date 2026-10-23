import mysql2 from "mysql2/promise";

const dbConfig = {
  database: "clinic_system",
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  namedPlaceholders: true,
};

const database = mysql2.createPool(dbConfig);

export default database;
