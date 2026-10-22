import mysql from "mysql/promise";

const dbConfig = {
  database: "clinic_system",
  port: 3306,
  host: "locahost",
  user: "root",
  password: "",
  namedPlaceholders: true,
};

const database = mysql.createConnection(dbConfig);

export default database;
