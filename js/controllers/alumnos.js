'use strict';

MyApp.controller('AlumnosCtrl', function ($scope) {
    $scope.alumnos = [
        {
            "nocontrol": "07493258",
            "nombre": "ROGELIO",
            "apellido_paterno": "MALDONADO",
            "apellido_materno": "CEJA",
            carrera: {
                "id": 1,
                "nombre": "Ing. Industrial"
            }
        },
    
        {
            "nocontrol": "07495325",
            "nombre": "ROSALINO",
            "apellido_paterno": "GARCIA",
            "apellido_materno": "ACEBEDO",
            carrera: {
                "id": 1,
                "nombre": "Ing. Industrial"
            }
        },

        {
            "nocontrol": "07491142",
            "nombre": "ESTREBERTO",
            "apellido_paterno": "DURON",
            "apellido_materno": "MANRIQUEZ",
            carrera: {
                "id": 1,
                "nombre": "Ing. Industrial"
            }
        },
    
        {
            "nocontrol": "07498963",
            "nombre": "EVA", 
            "apellido_paterno": "PEREZ", 
            "apellido_materno": "HERNANDEZ",
            carrera: {
                "id": 2,
                "nombre": "Ing. en Logística"
            }
        },
              
        {
            "nocontrol": "99490984",
            "nombre": "JOSE", 
            "apellido_paterno": "MILLAN", 
            "apellido_materno": "RUIZ",
            carrera: {
                "id": 2,
                "nombre": "Ing. en Logística"
            }
        }, 
               
        
        {
            "nocontrol": "99490987",
            "nombre": "MARTIN", 
            "apellido_paterno": "ROBLES", 
            "apellido_materno": "ILICH",
            carrera: {
                "id": 2,
                "nombre": "Ing. en Logística"
            }
        },

        {           
            "nocontrol": "07490145",  
            "nombre": "PLACIDO", 
            "apellido_paterno": "GARCIA", 
            "apellido_materno": "RAMOS",
            carrera: {
                "id": 3,
                "nombre": "Ing. Mecatrónica"
            }                     
        },

        {  
            "nocontrol": "07490583",            
            "nombre": "PEDRO", 
            "apellido_paterno": "PEREZ", 
            "apellido_materno": "CORRALES",
            carrera: {
                "id": 3,
                "nombre": "Ing. Mecatrónica"
            } 
        },

        {
            "nocontrol": "07490682",              
            "nombre": "ADELINA", 
            "apellido_paterno": "DANIELS", 
            "apellido_materno": "GAYTAN", 
            carrera: {
                "id": 3,
                "nombre": "Ing. Mecatrónica"
            }        
        },

        {
            "nocontrol": "99490989",
            "nombre": "BRAULIO", 
            "apellido_paterno": "GALINDO", 
            "apellido_materno": "RAMIREZ",
            carrera: {
                "id": 4,
                "nombre": "Ing. Mecánica"
            } 
        }, 

        {
            "nocontrol": "99490994",
            "nombre": "MARIA", 
            "apellido_paterno": "RAMIREZ", 
            "apellido_materno": "ESTRADA",
            carrera: {
                "id": 4,
                "nombre": "Ing. Mecánica"
            } 
        }, 

        {
            "nocontrol": "99490996",
            "nombre": "AARON", 
            "apellido_paterno": "TEJEDA", 
            "apellido_materno": "OLIVAS", 
            carrera: {
                "id": 4,
                "nombre": "Ing. Mecánica"
            }
        },

        {
            "nocontrol": "99490661",
            "nombre": "MARIO", 
            "apellido_paterno": "CAMARILLO", 
            "apellido_materno": "RAMOS", 
            carrera: {
                "id": 5,
                "nombre": "Ing. en Sistemas Computacionales"
            }                
        },

        {
            "nocontrol": "99490664",        
            "nombre": "JULIO", 
            "apellido_paterno": "CORTEZ", 
            "apellido_materno": "RODRIGUEZ",   
            carrera: {
                "id": 5,
                "nombre": "Ing. en Sistemas Computacionales"
            }        
        }, 

        {
            "nocontrol": "99490670",
            "nombre": "DANIEL", 
            "apellido_paterno": "CAMPOS", 
            "apellido_materno": "FRIAS",
            carrera: {
                "id": 5,
                "nombre": "Ing. en Sistemas Computacionales"
            }          
        } 
    ];
});