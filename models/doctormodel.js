const model = {};

model.table = "doctor";
model.buildReadQuery = (req, variant) => {
  let table = model.table;
  let fields = ["doctor.id"];

  table = `${table} INNER JOIN users 
              ON users.User_ID = doctor.user_id`;
  fields = [...fields, "users.User_Name AS doctor_name"];

  table = `${table} INNER JOIN clinic 
              ON clinic.Clinic_ID = doctor.clinic_id`;
  fields = [
    ...fields,
    "clinic.Clinic_Name AS clinic_name",
    "clinic.Clinic_Address AS clinic_address",
  ];

  table = `${table} INNER JOIN doctor_specialisation 
              ON doctor_specialisation.doctor_id = doctor.id`;

  table = `${table} INNER JOIN specialisation 
              ON specialisation.id = doctor_specialisation.specialisation_id`;
  fields = [...fields, "specialisation.name AS specialisation"];

  let sql = `SELECT ${fields.join(", ")} FROM ${table} `;
  if (variant === "primary") {
    sql += ` WHERE doctor.id = :ID`;
  }
  return sql;
};

export default model;
