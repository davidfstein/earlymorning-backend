module.exports = app => {

    const patientModel = require('../models/patient/patient-model');

    findAllPatients = (_, res) =>
        patientModel.findAllPatients()
            .then(patients => {
                res.send(patients);
            });

    createPatient = (req, res) => 
        patientModel.createPatient(req.body)
                 .then(patient => res.send(patient));

    updatePatient = (req, res) =>
        patientModel.updatePatient(req.body, req.query.patientId)
            .then(patient => res.send(patient));

    deletePatient = (req, res) => {
        const patientId = req.params.patientId;
        patientModel.deletePatient(patientId)
        res.send(200);
    }

    findPatientById = (req, res) =>
        patientModel.findPatientById(req.params.patientId)
            .then(patient => res.send(patient));
  
    app.get('/api/patient', findAllPatients);
    app.post('/api/patient', createPatient);
    app.put('/api/patient/:patientId', updatePatient);
    app.delete('/api/patient/:patientId', deletePatient);
    app.get('/api/patient/:userId', findPatientById);
};