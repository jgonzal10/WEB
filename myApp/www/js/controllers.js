angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})


///PATIENT 
.controller('patientCtrl', function($scope, Patients) {


  $scope.patients = Patients.all();
  $scope.remove = function(patient) {
    Patients.remove(chat);
  };
})


.controller('patientDetailCtrl', function($scope, $stateParams, Patients) {
  $scope.patients = Patients.get($stateParams.patientId);
})

//*****
