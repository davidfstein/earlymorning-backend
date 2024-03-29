const mongoose = require('mongoose');
const patientSchema = require('./patient-schema');

const patientModel = mongoose.model('PatientModel', patientSchema);

findAllPatients = () =>
    patientModel.find({});

findPatientById = patientId => 
    patientModel.findById(patientId);

createPatient = (patient) =>
    patientModel.create({
        name: patient.name,
        temperature: patient.temperature,
        pulse: patient.pulse,
        respiration: patient.respiration,
        oxygen_saturation: patient.oxygen_saturation,
        created: new Date(),
        updated: new Date()
    });

updatePatient = (patient, id) => {
    console.log(id);
    return patientModel.findOneAndUpdate({
        '_id': id
    }, 
    {
        name: patient.name,
        temperature: patient.temperature,
        pulse: patient.pulse,
        respiration: patient.respiration,
        oxygen_saturation: patient.oxygen_saturation,
        created: patient.created,
        updated: new Date()
    });
}

deletePatient = (patientId) => {
    patientModel.remove({_id: mongoose.Types.ObjectId(String(patientId))});
}

module.exports = {
  findAllPatients,
  findPatientById,
  createPatient,
  updatePatient,
  deletePatient,
};