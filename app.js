import express from "express";
import ClinicRouter from "./Router/clinic_Router.js";
import Clinic_statusRouter from "./Router/clinic_status_Router.js";
import Doctor_Router from "./Router/doctor_Router.js";
import Appointment_Router from "./Router/appointment_Router.js";
import Patient_Router from "./Router/patient_Router.js";
import cors from "cors";
const app = new express();

app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

app.use("/api/clinic", ClinicRouter);
app.use("/api/clinic_status", Clinic_statusRouter);
app.use("/api/doctor_information", Doctor_Router);
app.use("/api/appointment", Appointment_Router);
app.use("/api/patient", Patient_Router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`SERVER START ON PORT ${PORT}`));
