const model = {};

model.table = "patient";
model.buildReadQuery = (req, variant) => {
  let table = model.table;
  let fields = [];

  table = `${table} INNER JOIN users 
              ON users.User_ID = patient.user_id`;
  fields = [...fields, "users.User_Name AS patient_name"];

  table = `${table} INNER JOIN gender 
              ON gender.id = patient.gender_id`;
  fields = [...fields, "gender.gender_name AS gender"];

  let sql = `SELECT ${fields.join(", ")} FROM ${table} `;
  if (variant === "primary") {
    sql += ` WHERE patient.id = :ID`;
  }
  return sql;
};

export default model;
