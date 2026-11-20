const model = {};

model.table = "appointment";
model.buildReadQuery = (req, variant) => {
  let table = model.table;
  let fields = [
    "appointment.id",
    "appointment.appointment_datetime",
    "appointment.reason",
    "appointment.create_at",
  ];
  table = `${table} INNER JOIN patient 
              ON patient.id = appointment.patient_id`;

  table = `${table} INNER JOIN appointment_status 
              ON appointment_status.id = appointment.status_id`;
  table = `${table} INNER JOIN doctor 
              ON doctor.id = appointment.doctor_id`;

  table = `${table} INNER JOIN users AS patient_user
              ON patient_user.User_ID = patient.user_id`;
  table = `${table} INNER JOIN users AS doctor_user
              ON doctor_user.User_ID=doctor.user_id`;

  fields = [
    ...fields,
    "patient_user.User_Name AS patient_name",
    "doctor_user.User_Name AS doctor_name",
    "appointment_status.status_name AS status",
  ];

  let sql = `SELECT ${fields.join(", ")} FROM ${table} `;
  if (variant === "primary") {
    sql += ` WHERE appointment.id = :ID`;
  }
  return sql;
};
model.buildCreateQuery = (req) => {
  return `INSERT INTO ${model.table} SET
    patient_id=:patient_id,
    doctor_id=:doctor_id,
    appointment_datetime=:appointment_datetime,
    status_id=:status_id,
    reason=:reason
    `;
};
// Validate the incoming request body
model.validate = (body) => {
  const errors = [];
  if (!body.patient_id) errors.push("patient_id is required");
  if (!body.doctor_id) errors.push("doctor_id is required");
  if (!body.appointment_datetime)
    errors.push("appointment_datetime is required");
  if (!body.status_id) errors.push("status is required");
  return errors;
};
export default model;
