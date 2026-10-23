import express from "express";
import ClinicRouter from "./Router/clinic_Router.js";
import Clinic_statusRouter from "./Router/clinic_status_Router.js";

const app = new express();

app.use("/api/clinic", ClinicRouter);
app.use("/api/clinic_status", Clinic_statusRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`SERVER START ON PORT ${PORT}`));
