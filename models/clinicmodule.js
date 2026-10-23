const model = {};

model.table = "clinic";
model.buildReadQuery = (req, variant) => {
  let table = model.table;
  let fields = [
    "clinic.Clinic_ID",
    "clinic.Clinic_Name",
    "clinic.Clinic_Address",
    "clinic.Clinic_Status_Id",
  ];

  table = `${table} INNER JOIN clinic_status 
              ON clinic_status.Clinic_Status_Id = clinic.Clinic_Status_Id`;
  fields = [...fields, "clinic_status.Clinic_Status_Name AS Status"];

  return `SELECT ${fields.join(", ")} FROM ${table} `;
};

export default model;
