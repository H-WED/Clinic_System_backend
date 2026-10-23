const model = {};

model.table = "clinic_status";
model.buildReadQuery = (req, variant) => {
  let table = model.table;
  let fields = ["Clinic_Status_Id", "Clinic_Status_Name"];

  return `SELECT ${fields.join(", ")} FROM ${table} `;
};

export default model;
