angular.module('starter.services', [])

.factory('Patients', function() {
  // Might use a resource here that returns a JSON array
//fake patients
    var patients = [{
    id: 0,
    name: 'Carlos',
    lastDose: 'Abiraterone Acetate 100ml',
    face: 'img/4.jpg'
  }, {
    id: 1,
    name: 'Massimo',
    lastDose: 'Ado-Trastuzumab Emtansine 200',
    face: 'img/5.jpg'
  }, {
    id: 2,
    name: 'Jorge',
    lastDose: 'Busulfan 300 gm',
    face: 'img/1.jpg'
  }, {
    id: 3,
    name: 'Peter',
    lastDose: 'Efudex (Fluorouracil--Topical) 500 gm',
    face: 'img/1.gif'
  }, {
    id: 4,
    name: 'Mathew',
    lastDose: 'HPV Bivalent Vaccine, Recombinant',
    face: 'img/3.jpg'
  }];

  return {
    all: function() {
      return patients;
    },
    remove: function(patient) {
      patients.splice(patients.indexOf(patient), 1);
    },
    get: function(patientId) {
      for (var i = 0; i < patients.length; i++) {
        if (patients[i].id === parseInt(patientId)) {
          return patients[i];
        }
      }
      return null;
    }
  };
});


