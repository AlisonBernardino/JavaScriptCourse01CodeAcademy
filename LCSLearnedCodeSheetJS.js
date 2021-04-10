// // Advanced objects = 02 / 06 / 2021 - 05: 02 AM

// // Code 01 = Calling object attributes using "this." method

// const robot = {
//     model: '1E78V2',
//     energyLevel: 100,
//     provideInfo() {
//         return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
//     }
// }

// console.log(robot.provideInfo());



// // Code 02 = Arrow functions and "this.exampleContent" method

// const robot = {
//     energyLevel: 100,
//     checkEnergy() {
//         console.log(`Energy is currently at ${this.energyLevel}%.`)
//     }
// }

// robot.checkEnergy();


// // Code 03 = Privacy(Attention: The code below returns a side effect causing an output error.)

// const robot = {
//     _energyLevel: 100,
//     recharge() {
//         this._energyLevel += 30;
//         console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
//     }
// };

// robot._energyLevel = 'high';
// robot.recharge();


// // Code 04 = Getter method

// const robot = {
//     _model: '1E78V2',
//     _energyLevel: 100,
//     get energyLevel() {
//         if (typeof this._energyLevel === 'number') {
//             return 'My current energy level is ' + this._energyLevel
//         } else {
//             return "System malfunction: cannot retrieve energy level"
//         }
//     }
// };

// console.log(robot.energyLevel);


// // Code 05 = Setter method

// const robot = {
//     _model: '1E78V2',
//     _energyLevel: 100,
//     _numOfSensors: 15,
//     get numOfSensors() {
//         if (typeof this._numOfSensors === 'number') {
//             return this._numOfSensors;
//         } else {
//             return 'Sensors are currently down.'
//         }
//     },
//     set numOfSensors(num) {
//         if (typeof num === 'number' && num >= 0) {
//             this._numOfSensors = num;
//         } else {
//             console.log('Pass in a number that is greater than or equal to 0')
//         }
//         robot.numOfSensors = 100;
//         console.log(robot.numOfSensors);
//     }
// };


// // Code 06 = Factory functions

// const robotFactory = (model, mobile, beep) => {
//     return {
//         model: model,
//         mobile: mobile,
//         beep() {
//             console.log('Beep Boop');
//         }
//     };
// };

// const tinCan = robotFactory('P-500', true);
// tinCan.beep();


// // Code 07 = Property value shorthand

// function robotFactory(model, mobile) {
//     return {
//         model,
//         mobile,
//         beep() {
//             console.log('Beep Boop');
//         }
//     }
// }

// // To check that the property value shorthand technique worked:
// const newRobot = robotFactory('P-501', false)

// console.log(newRobot.model)
// console.log(newRobot.mobile)


// // Code 08 = Destructured assignment

// const robot = {
//     model: '1E78V2',
//     energyLevel: 100,
//     functionality: {
//         beep() {
//             console.log('Beep Boop');
//         },
//         fireLaser() {
//             console.log('Pew Pew');
//         },
//     }
// };

// const { functionality } = robot;

// functionality.beep();


// // Code 09 = Built-in object methods

// const robot = {
//     model: 'SAL-1000',
//     mobile: true,
//     sentient: false,
//     armor: 'Steel-plated',
//     energyLevel: 75
// };

// // What is missing in the following method call?
// const robotKeys = Object.keys(robot);

// console.log(robotKeys);

// // Declare robotEntries below this line:
// const robotEntries = Object.entries(robot)
// console.log(robotEntries);

// // Declare newRobot below this line:
// const newRobot = Object.assign({ laserBlaster: true, voiceRecognition: true }, robot);

// console.log(newRobot);


// // Code 10 = Classes - Introduction

// class Dog {
//     constructor(name) {
//         this._name = name;
//         this._behavior = 0;
//     }

//     get name() {
//         return this._name;
//     }
//     get behavior() {
//         return this._behavior;
//     }

//     incrementBehavior() {
//         this._behavior++;
//     }
// }

// const halley = new Dog('Halley');
// console.log(halley.name); // Print name value to console
// console.log(halley.behavior); // Print behavior value to console
// halley.incrementBehavior(); // Add one to behavior
// console.log(halley.name); // Print name value to console
// console.log(halley.behavior); // Print behavior value to console


// // Code 11 - Class instance

// class Surgeon {
//     constructor(name, department) {
//         this.name = name;
//         this.department = department;
//     }
// }

// const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');

// const surgeonDurant = new Surgeon('Durant', 'Orthopedics');


// // Code 12 - Methods

// // Example code = 

// class Dog {
//     constructor(name) {
//         this._name = name;
//         this._behavior = 0;
//     }

//     get name() {
//         return this._name;
//     }

//     get behavior() {
//         return this._behavior;
//     }

//     incrementBehavior() {
//         this._behavior++;
//     }
// }

// // My code = 

// class Surgeon {
//     constructor(name, department) {
//         this._name = name;
//         this._department = department;
//         this._remainingVacationDays = 20;
//     }
//     get name() {
//         return this._name;
//     }

//     get department() {
//         return this._department;
//     }

//     get remainingVacationDays() {
//         return this._remainingVacationDays;
//     }
//     takeVacationDays(daysOff) {
//         this._remainingVacationDays -= daysOff;
//     }
// }

// const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
// const surgeonDurant = new Surgeon('Durant', 'Orthopedics');


// // Code 13 = Method calls

// class Surgeon {
//     constructor(name, department) {
//         this._name = name;
//         this._department = department;
//         this._remainingVacationDays = 20;
//     }
//     get name() {
//         return this._name;
//     }

//     get department() {
//         return this._department;
//     }

//     get remainingVacationDays() {
//         return this._remainingVacationDays;
//     }
//     takeVacationDays(daysOff) {
//         this._remainingVacationDays -= daysOff;
//     }
// }

// const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
// const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

// console.log(surgeonCurry.name);

// surgeonCurry.takeVacationDays(3);

// console.log(surgeonCurry.remainingVacationDays);


// // Code 14 = Inheritance

// // Example code =

// class Cat {
//     constructor(name, usesLitter) {
//         this._name = name;
//         this._usesLitter = usesLitter;
//         this._behavior = 0;
//     }

//     get name() {
//         return this._name;
//     }

//     get behavior() {
//         return this._behavior;
//     }

//     get usesLitter() {
//         return this._usesLitter;
//     }

//     incrementBehavior() {
//         this._behavior++;
//     }
// }

// // My code = 

// class HospitalEmployee {
//     constructor(name) {
//         this._name = name;
//         this._remainingVacationDays = 20;
//     }
//     get name() {
//         return this._name;
//     }
//     get remainingVacationDays() {
//         return this._remainingVacationDays;
//     }
//     takeVacationDays(daysOff) {
//         this._remainingVacationDays -= daysOff;
//     }
// }

// // Code 15 = Inheritance III 

// // Example code = 

// class Animal {
//     constructor(name) {
//         this._name;
//         this._behavior = 0;
//     }

//     get name() {
//         return this._name;
//     }

//     get behavior() {
//         return this._behavior;
//     }

//     incrementBehavior() {
//         this._behavior++;
//     }
// }

// class HospitalEmployee {
//     constructor(name) {
//         this._name = name;
//         this._remainingVacationDays = 20;
//     }

//     get name() {
//         return this._name;
//     }

//     get remainingVacationDays() {
//         return this._remainingVacationDays;
//     }

//     takeVacationDays(daysOff) {
//         this._remainingVacationDays -= daysOff;
//     }
// }

// class Nurse extends HospitalEmployee {
//     constructor(name, certifications) {
//         super(name);
//         this._certifications = certifications;
//     }
// }

// const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);


// // Code 16 = Inheritance IV

// // Example code =

// class Animal {
//     constructor(name) {
//         this._name = name;
//         this._behavior = 0;
//     }

//     get name() {
//         return this._name;
//     }

//     get behavior() {
//         return this._behavior;
//     }

//     incrementBehavior() {
//         this._behavior++;
//     }
// }

// class Cat extends Animal {
//     constructor(name, usesLitter) {
//         super(name);
//         this._usesLitter = usesLitter;
//     }
// }

// const bryceCat = new Cat('Bryce', false);
// console.log(bryceCat.name);

// // Call .incrementBehavior() on Cat instance
// bryceCat.incrementBehavior();

// // Log value saved to behavior
// console.log(bryceCat.behavior);


// // My code = 

// class HospitalEmployee {
//     constructor(name) {
//         this._name = name;
//         this._remainingVacationDays = 20;
//     }

//     get name() {
//         return this._name;
//     }

//     get remainingVacationDays() {
//         return this._remainingVacationDays;
//     }

//     takeVacationDays(daysOff) {
//         this._remainingVacationDays -= daysOff;
//     }
// }

// class Nurse extends HospitalEmployee {
//     constructor(name, certifications) {
//         super(name);
//         this._certifications = certifications;
//     }
// }

// const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

// nurseOlynyk.takeVacationDays(5);
// console.log(nurseOlynyk.remainingVacationDays);


// // Code 17 = Inheritance V

// class Cat extends Animal {
//     constructor(name, usesLitter) {
//         super(name);
//         this._usesLitter = usesLitter;
//     }

//     get usesLitter() {
//         return this._usesLitter;
//     }
// }

// class Cat {
//     constructor(name, usesLitter) {
//         this._name = name;
//         this._usesLitter = usesLitter;
//         this._behavior = 0;
//     }

//     get name() {
//         return this._name;
//     }

//     get usesLitter() {
//         return this._usesLitter;
//     }

//     get behavior() {
//         return this._behavior;
//     }

//     incrementBehavior() {
//         this._behavior++;
//     }
// }

// class Dog extends Animal {
//     constructor(name) {
//         super(name);
//     }
// }


// // My code = 

// class HospitalEmployee {
//     constructor(name) {
//         this._name = name;
//         this._remainingVacationDays = 20;
//     }

//     get name() {
//         return this._name;
//     }

//     get remainingVacationDays() {
//         return this._remainingVacationDays;
//     }

//     takeVacationDays(daysOff) {
//         this._remainingVacationDays -= daysOff;
//     }
// }

// class Nurse extends HospitalEmployee {
//     constructor(name, certifications) {
//         super(name);
//         this._certifications = certifications;
//     }

//     get certifications() {
//         return this._certifications;
//     }

//     addCertification(newCertification) {
//         this._certifications.push(newCertification);
//     }
// }

// nurseOlynyk.addCertification('Genetics');
// console.log(nurseOlynyk.certifications);


// // Code 18 = Static methods

// // Example code =

// class Animal {
//     constructor(name) {
//         this._name = name;
//         this._behavior = 0;
//     }

//     static generateName() {
//         const names = ['Angel', 'Spyke', 'Buffy', 'Willow', 'Tara'];
//         const randomNumber = Math.floor(Math.random() * 5);
//         return names[randomNumber];
//     }
// }

// // Returns a name
// console.log(Animal.generateName());

// const tyson = new Animal('Tyson');

// // TypeError
// tyson.generateName();

// // My code =

// class HospitalEmployee {
//     constructor(name) {
//         this._name = name;
//         this._remainingVacationDays = 20;
//     }

//     static generatePassword() {
//         const finalPassword = Math.floor(Math.random() * 10000)
//         return finalPassword;
//     }

//     get name() {
//         return this._name;
//     }

//     get remainingVacationDays() {
//         return this._remainingVacationDays;
//     }

//     takeVacationDays(daysOff) {
//         this._remainingVacationDays -= daysOff;
//     }
// }

// class Nurse extends HospitalEmployee {
//     constructor(name, certifications) {
//         super(name);
//         this._certifications = certifications;
//     }

//     get certifications() {
//         return this._certifications;
//     }

//     addCertification(newCertification) {
//         this.certifications.push(newCertification);
//     }
// }

// const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

// nurseOlynyk.takeVacationDays(5);
// console.log(nurseOlynyk.remainingVacationDays);
// nurseOlynyk.addCertification('Genetics');
// console.log(nurseOlynyk.certifications);

// // Extra exercise - Create the "Doctor" hospital professional
// class Doctor extends HospitalEmployee {
//     constructor(name, insurance) {
//         super(name);
//         this._insurance = insurance;
//     }

//     get insurance() {
//         return this._insurance;
//     }

//     addInsurance(newInsurance) {
//         this.insurance.push(newInsurance);
//     }
// }

// // Code 19 - ES5 code model

// var pasta = "Spaghetti"; // ES5 syntax

// var meat = "Pancetta"; // ES6 syntax

// var sauce = "Eggs and cheese"; // ES6 syntax

// // Template literals, like the one below,  
// // were introduced in ES6

// var carbonara = "You can make carbonara with "
//     + pasta + ", " + meat + "and a sauce made with "
//     + sauce + ".";


// // Code 20 - Commands to install Babel, 
// // the JavaScript ES6 to ES5 converter

// // npm install babel - cli
// // npm install babel - preset - env

// // To see the ES5 code in ./lib/main.js
// // npm run build

// // To see the file structure inside my current directory
// // ls

// // // To create a new package.json
// // npm init


// // // Code 21 - Install Node packages

// // // We use the npm install command to
// // install new Node packages locally.
// // The install command creates a folder called
// // node_modules and copies the package files to it.
// // The install command also installs all
// // of the dependencies for the given package.

// // To install Babel, we need to npm install
// // two packages, babel - cli and babel - preset - env.
// //     However, npm installs over one hundred other
// // packages that are dependencies for Babel to 
// //  run properly.

// // We install Babel with the following two commands:

// // $ npm install babel - cli - D
// // $ npm install babel - preset - env - D
// // The babel - cli package includes command line Babel
// // tools, and the babel - preset - env package has the code
// // that maps any JavaScript feature, ES6 and above(ES6 +),
// //     to ES5.

// //         The - D flag instructs npm to add each package
// // to a property called devDependencies in package.json.
// // Once the project’s dependencies are listed in
// //     devDependencies, other developers can run your project
// // without installing each package separately.Instead,
// //     they can simply run npm install — it instructs npm
// // to look inside package.json and download all of the
// // packages listed in devDependencies.

// // Once you npm install packages, you can find the
// // Babel packages and all their dependencies in the
// // node_modules folder.The new directory structure
// // contains the following:

// // project
// //     | _ node_modules
// //         | ___.bin
// //         | ___ ...
// // | _ src
// //     | ___ main.js
// //         | _ package.json
// // The ... in the file structure above is a placeholder
// // for 100 + packages that npm installed.

// // Use npm with the -D flag to install the Babel 
// // command line package and add it to the devDependencies
// // property in package.json.
// // There is no space between the "-" and the commands
// // npm install babel - cli - D

// // Use npm with the -D flag to install the Babel 
// // preset environment package and add it to the 
// // devDependencies property in package.json.
// // There is no space between the "-" and the commands
// // npm install babel - preset - env

// // Enter ls into the terminal to see the file 
// // structure of your current directory. Notice
// // the addition of node_modules.

// // You can also see the new folder by clicking on the file
// // navigation button above the texteditor.


// // To create a new .babelrc file
// // touch.babelrc

// // To add a script called "build" in package.json file:
// // {
// //     scripts {
// //         "build": "babel src -d lib"
// //     }
// // }

// // Code 22 - module.exports

// let Airplane = {};
// Airplane.myAirplane = "StarJet";
// module.exports = Airplane;


// // Code 23 - require() method

// const Airplane = require('./1-airplane.js');

// function displayAirplane() {
//     console.log(Airplane.myAirplane);
// }

// displayAirplane();


// // Code 23 - module.exports II

// // Inside the first file (2-airplane.js)

// module.exports = {
//     myAirplane: "CloudJet",
//     displayAirplane: function () {
//         return this.myAirplane;
//     }
// };


// // Inside the second file (2-missionControl.js)

// const Airplane = require('./2-airplane.js');

// console.log(Airplane.displayAirplane());


// // Code 24 - export default

// let Airplane = {};

// Airplane.availableAirplanes = [
//     {
//         name: 'AeroJet',
//         fuelCapacity: 800
//     },
//     {
//         name: 'SkyJet',
//         fuelCapacity: 500
//     }
// ];

// export default Airplane;


// // Code 25 - Named exports

// let availableAirplanes = [
//     {
//         name: 'AeroJet',
//         fuelCapacity: 800,
//         availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
//     },
//     {
//         name: 'SkyJet',
//         fuelCapacity: 500,
//         availableStaff: ['pilots', 'flightAttendants']
//     }
// ];

// let flightRequirements = {
//     requiredStaff: 4,
// };

// function meetsStaffRequirements(availableStaff, requiredStaff) {
//     if (availableStaff.length >= requiredStaff) {
//         return true;
//     } else {
//         return false;
//     }
// };

// export {
//     availableAirplanes, flightRequirements, meetsStaffRequirements
// };


// // Code 26 - Named imports

// import { availableAirplanes, flightRequirements, meetsStaffRequirements } from './airplane';

// function displayFuelCapacity() {
//     availableAirplanes.forEach(function (element) {
//         console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
//     });
// }

// displayFuelCapacity();

// function displayStaffStatus() {
//     availableAirplanes.forEach(function (element) {
//         console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
//     });
// }

// displayStaffStatus();


// // Code 27 - Export named exports

// export let availableAirplanes = [
//     {
//         name: 'AeroJet',
//         fuelCapacity: 800,
//         availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
//         maxSpeed: 1200,
//         minSpeed: 300
//     },
//     {
//         name: 'SkyJet',
//         fuelCapacity: 500,
//         availableStaff: ['pilots', 'flightAttendants'],
//         maxSpeed: 800,
//         minSpeed: 200
//     }
// ];

// export let flightRequirements = {
//     requiredStaff: 4,
//     requiredSpeedRange: 700
// };

// export function meetsStaffRequirements(availableStaff, requiredStaff) {
//     if (availableStaff.length >= requiredStaff) {
//         return true;
//     } else {
//         return false;
//     }
// };

// export {
//     availableAirplanes, flightRequirements, meetsStaffRequirements
// };

// export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
//     let range = maxSpeed - minSpeed;
//     if (range > requiredSpeedRange) {
//         return true;
//     } else {
//         return false;
//     }
// };


// // Code 28 - Import named imports

// import { availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements } from './airplane';

// function displayFuelCapacity() {
//     availableAirplanes.forEach(function (element) {
//         console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
//     });
// }

// displayFuelCapacity();

// function displayStaffStatus() {
//     availableAirplanes.forEach(function (element) {
//         console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
//     });
// }

// displayStaffStatus();

// function displaySpeedRangeStatus() {
//     availableAirplanes.forEach(function (element) {
//         console.log(element.name + ' meets speed range requirements:' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
//     });
// }

// displaySpeedRangeStatus();


// // Code 29 - Export as

// let availableAirplanes = [
//     {
//         name: 'AeroJet',
//         fuelCapacity: 800,
//         availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
//         maxSpeed: 1200,
//         minSpeed: 300
//     },
//     {
//         name: 'SkyJet',
//         fuelCapacity: 500,
//         availableStaff: ['pilots', 'flightAttendants'],
//         maxSpeed: 800,
//         minSpeed: 200
//     }
// ];

// let flightRequirements = {
//     requiredStaff: 4,
//     requiredSpeedRange: 700
// };

// function meetsStaffRequirements(availableStaff, requiredStaff) {
//     if (availableStaff.length >= requiredStaff) {
//         return true;
//     } else {
//         return false;
//     }
// };

// function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
//     let range = maxSpeed - minSpeed;
//     if (range > requiredSpeedRange) {
//         return true;
//     } else {
//         return false;
//     }
// };

// export { availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs };


// // Code 30 - Import as

// import { aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs } from './airplane';

// function displayFuelCapacity() {
//     aircrafts.forEach(function (element) {
//         console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
//     });
// }

// displayFuelCapacity();

// function displayStaffStatus() {
//     aircrafts.forEach(function (element) {
//         console.log(element.name + ' meets staff requirements: ' + meetsStaffReqs(element.availableStaff, flightReqs.requiredStaff));
//     });
// }

// displayStaffStatus();

// function displaySpeedRangeStatus() {
//     aircrafts.forEach(function (element) {
//         console.log(element.name + ' meets speed range requirements:' + meetsSpeedRangeReqs(element.maxSpeed, element.minSpeed, flightReqs.requiredSpeedRange));
//     });
// }

// displaySpeedRangeStatus();


// // Code 31 - Combined import statements

// import { availableAirplanes, flightRequirements, meetsStaffRequirements } from './airplane';

// import meetsSpeedRangeRequirements from './airplane';

// function displayFuelCapacity() {
//     availableAirplanes.forEach(function (element) {
//         console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
//     });
// }

// displayFuelCapacity();

// function displayStaffStatus() {
//     availableAirplanes.forEach(function (element) {
//         console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
//     });
// }

// displayStaffStatus();

// function displaySpeedRangeStatus() {
//     availableAirplanes.forEach(function (element) {
//         console.log(element.name + ' meets speed range requirements:' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
//     });
// }

// displaySpeedRangeStatus();


// // Code 32 - Constructing a promiss object

// const inventory = {
//     sunglasses: 1900,
//     pants: 1088,
//     bags: 1344
// };

// // Write your code below:
// const myExecutor = (resolve, reject) => {
//     if (inventory.sunglasses > 0) {
//         resolve('Sunglasses order processed.');
//     } else {
//         reject('That item is sold out.');
//     }
// };

// const orderSunglasses = () => {
//     return new Promise(myExecutor);
// };

// let orderPromise = orderSunglasses();

// console.log(orderPromise);


// // Code 33 - Node setTimeout() function

// console.log("This is the first line of code in app.js.");
// // Keep the line above as the first line of code
// // Write your code here:
// const usingSTO = () => {
//     console.log('This is the middle of the code');
// }

// setTimeout(usingSTO, 2500);

// // Keep the line below as the last line of code:
// console.log("This is the last line of code in app.js.");


// // Code 34 - Using catch() with Promises

// const { checkInventory } = require('./library.js');

// const order = [['sunglasses', 1], ['bags', 2]];

// const handleSuccess = (resolvedValue) => {
//     console.log(resolvedValue);
// };

// const handleFailure = (rejectReason) => {
//     console.log(rejectReason);
// };

// // Write your code below:
// checkInventory(order)
//     .then(handleSuccess)
//     .catch(handleFailure);

// // To run, type node app.js and press Enter or Run


// // Code 35 - Chaining multiple promises

// const { checkInventory, processPayment, shipOrder } = require('./library.js');

// const order = {
//     items: [['sunglasses', 1], ['bags', 2]],
//     giftcardBalance: 79.82
// };

// checkInventory(order)
//     .then((resolvedValueArray) => {
//         // Write the correct return statement here:
//         return processPayment(resolvedValueArray);
//     })
//     .then((resolvedValueArray) => {
//         // Write the correct return statement here:
//         return (shipOrder(resolvedValueArray));
//     })
//     .then((successMessage) => {
//         console.log(successMessage);
//     })
//     .catch((errorMessage) => {
//         console.log(errorMessage);
//     });

// // Code 36 - Avoiding common mistakes

// const { checkInventory, processPayment, shipOrder } = require('./library.js');

// const order = {
//     items: [['sunglasses', 1], ['bags', 2]],
//     giftcardBalance: 79.82
// };

// // Refactor the code below:

// checkInventory(order)
//     .then((resolvedValueArray) => {
//         return processPayment(resolvedValueArray);
//     })
//     .then((resolvedValueArray) => {
//         return shipOrder(resolvedValueArray);
//     })
//     .then((successMessage) => {
//         console.log(successMessage);
//     });


// // Code 37 - Promise.all()

// // Example code 01
// let myPromises = Promisse.all([returnsPromOne(),
// returnsPromTwo(), returnsPromThree()]);

// myPromises
//     .then((arrayOfValues) => {
//         console.log(arrayOfValues);
//     })
//     .catch((rejectionReason) => {
//         console.log(rejectioNReason);
//     })

// // My code
// const { checkAvailability } = require('./library.js');

// const onFulfill = (itemsArray) => {
//     console.log(`Items checked: ${itemsArray}`);
//     console.log(`Every item was available from the distributor. Placing order now.`);
// };

// const onReject = (rejectionReason) => {
//     console.log(rejectionReason);
// };

// // Write your code below:
// const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
// const checkPants = checkAvailability('pants', 'Favorite Supply Co.');
// const checkBags = checkAvailability('bags', 'Favorite Supply Co.');

// Promise.all([checkSunglasses, checkPants, checkBags])
//     .then(onFulfill)
//     .catch(onReject);


// // Code 38 - The async keyword

// // Code example 01
// async function myFunc() {

// };

// myFunc();

// // Code example 02
// const myFunc = async () => {
//     // Function body goes here
// }

// myFunc();


// // Code example 03
// async function tenPromise() {
//     return 10;
// }

// tenPromise()
//     .then(resolvedValue => {
//         console.log(resolvedValue);
//     }) // This code prints 10

// // My code
// function withConstructor(num) {
//     return new Promise((resolve, reject) => {
//         if (num === 0) {
//             resolve('zero');
//         } else {
//             resolve('not zero');
//         }
//     });
// }

// withConstructor(0)
//     .then((resolveValue) => {
//         console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
//     });

// // Write your code below:
// async function withAsync(num) {
//     if (num === 0) {
//         return 'zero';
//     } else {
//         return 'not zero';
//     }
// }

// withAsync(100)
//     .then((resolveValue) => {
//         console.log(` withAsync(100) returned a
//       promise which resolved to: ${resolveValue}.`);
//     });

// // Leave this commented out until step 3:
// /*
// withAsync(100)
//   .then((resolveValue) => {
//   console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
// })
// */


// // Code 39 - The await operator

// // Code example 01
// async function
//     asyncFuncExample01() {
//     let resolvedvalue = await myPromises();
//     console.log(resolvedValue);
// }

// asyncFuncExample01();
// // Prints: I am resolved now!


// // Code 40 - Writing async functions

// //Code example 01
// let myPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Yay, I resolved this code!')
//         }, 1000);
//     });
// }

// // Code example 02
// async function noAwait() {
//     let value = myPromise();
//     console.log(value);
// }

// async function yesAwait() {
//     let value = await myPromise();
//     console.log(value);
// }

// noAwait(); // This will print: Promise {<pending>}
// yesAwait(); // Prints: Yay, I resolved!


// // My code
// const shopForBeans = require('./library.js');

// async function getBeans() {
//     console.log(`1 - Heading to the
//     store to buy beans...`);
//     let value = await shopForBeans();
//     console.log(`3 - Great! Im making ${value} beans for dinner tonight!`);
// }

// getBeans();


// // Code 41 - Handling dependent promisses

// // Example code 01
// function nativePromiseVersion() {
//     returnsFirstPromise()
//         .then((firstValue) => {
//             console.log(firstValue);
//             return returnsSecondPromise(firstValue);
//         })
//         .then((secondValue) => {
//             console.log(secondValue);
//         });
// }

// // Example code 02
// async function asyncAwaitVersion() {
//     let firstValue = await returnsFirstPromise();
//     console.log(firstValue);
//     let secondValue = await returnsSecondPromise(firstValue);
//     console.log(secondValue);
// }

// // My code
// const { shopForBeans, soakTheBeans,
//     cookTheBeans } = require('./library.js');

// async function makeBeans() {
//     let type = await shopForBeans();
//     let isSoft = await soakTheBeans(type);
//     let dinner = await cookTheBeans(isSoft);
//     console.log(dinner);
// }

// makeBeans();


// // Code 42 - Handling errors

// // Example code 01
// async function usingTryCatch() {
//     try {
//         let resolveValue = await asyncFunction('This will fail');
//         let secondValue = await secondAsyncFunction(resolveValue);
//     } catch (err) {
//         console.log(err);
//     }
// }

// usingTryCatch();


// // Example code 02
// async function usingPromiseCatch() {
//     let resolvedValue = await asyncFunction('This will fail - Version 02');
// }

// let rejectedPromise = usingPromiseCatch();
// rejectedPromise.catch((rejectValue) => {
//     console.log(rejectValue);
// })


// // My code
// const cookBeanSouffle = require('./library.js');

// async function hostDinnerParty() {
//     try {
//         let dinner = await cookBeanSouffle();
//         console.log(`${dinner} is served!`);
//     }
//     catch (error) {
//         console.log(error);
//         console.log('The pizza is being ordered!');
//     }
// }

// hostDinnerParty();


// // Code 43 - Handling independent functions

// // Example code 01
// async function writing() {
//     const firstValue = await firstAsyncThing();
//     const secondValue = await secondAsyncThing();
//     console.log(firstValue, secondValue);
// }

// async function concurrent() {
//     const firstPromise = firstasyncThing();
//     const secondPromise = secondAsyncThing();
//     console.log(await firstPromise, await secondPromise);
// }


// // // My code
// // let { cookBeans, steamBroccoli, cookRice, bakeChicken } = require('./library.js');

// // async function serveDinner() {
// //     const vegetablePromise = steamBroccoli();
// //     const starchPromise = cookRice();
// //     const proteinPromise = bakeChicken();
// //     const sidePromise = cookBeans();
// //     console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise
// //         }, ${await proteinPromise}, and ${await sidePromise}.`);
// // }

// // serveDinner();


// // // Code 44 - Await Promise.all()

// // // Example code 01
// // async function asyncPromAll() {
// //     const resultArray = await Promise.all([asyncTask001(), asyncTask002(),
// //     asyncTask003(), asyncTask004()]);
// //     for (let x = 0; x < resultArray.length; x++) {
// //         console.log(resultArray[x]);
// //     }
// // }

// // // Hint 01
// // // Don’t forget to await Promise.all()! 
// // // Your code may follow a similar pattern to this:

// // async function myFunction() {
// //     let myArray = await Promise.all([returnsPromise001(),
// //     returnsPromise002(), returnsPromise003()]);
// // }


// // // Hint 02
// // // Now that you have an array holding each of the promises’ 
// // // resolved values, you can use string interpolation 
// // // or concatenation to log the required string.

// // // One option is to save variable for each value:

// // let vegetable = foodArray[0];
// // let starch = foodArray[1];
// // let protein = foodArray[2];
// // let side = foodArray[3];

// // console.log(`Dinner is served. We're having ${vegetable}, ${starch},
// // ${protein}, and ${side}`);


// // // =================== Requests =================================

// // // Links

// // // Link 01 =
// // // There are many types of HTTP requests. 
// // // The four most commonly used types of HTTP requests are GET, POST, PUT, and DELETE.
// // // In this lesson, we’ll cover GET and POST requests. If you want 
// // // to learn more about the different HTTP requests, we recommend 
// // // the following documentation:
// // // https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

// // // Link 02 =
// // // We’ll use the Datamuse API for GET requests and the Rebrandly URL Shortener API 
// // // for POST requests. To complete the exercise on POST, make sure you create 
// // // a Rebrandly API Key by following the instructions in the article below:
// // // https://www.codecademy.com/articles/rebrandly-signup

// // // Code 45 
// // // Example code 01 

// // const jsonButton = document.querySelector('#generate');
// // const buttonContainer = document.querySelector('#buttonContainer');
// // const display = document.querySelector('#displayContainer');
// // const collection = ["Another", "More", "Next", "Continue", "Keep going", "Click me", "A new one"];

// // const generateJson = () => {
// //     const XR3DA = new XMLHttpRequest();
// //     XR3DA.responseType = 'json';

// //     XR3DA.onreadystatechange = () => {
// //         if (XR3DA.readyState === XMLHttpRequest.DONE) {
// //             renderResponse(X3RDA.response);
// //             changeButton();
// //         }
// //     }
// //     XR3DA.open('GET', 'https://jsonplaceholder.typicode.com/users');
// //     XR3DA.send();
// // }

// // const formatJson = (resJson) => {
// //     resJson = JSON.stringify(resJson);
// //     let counter = 0;
// //     return resJson.split('').map(char => {
// //         switch (char) {
// //             case ',':
// //                 return `,\n${''.repeat(counter * 2)}`;
// //             case '{':
// //                 counter = + 1;
// //                 return `{\n${''.repeat(counter * 2)}`;
// //             case '}':
// //                 counter -= 1;
// //                 return `\n${''.repeat(counter * 2)}}`;
// //             default:
// //                 return char;
// //         }
// //     })
// //         .join('');
// // }

// // const renderResponse = (jsonResponse) => {
// //     const jsonSelection = Math.floor(Math.random() * 15);
// //     display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</pre>`;
// // }

// // const changeButton = () => {
// //     const newText = Math.floor(Math.random() * 7);
// //     jsonButton.innerHTML = `${collection[newText]}!`;
// // }

// // jsonButton.addEventListener('click', generateJson);

// // // Code 46 - Concurrency model and event loop - Stack

// // // Example code 01
// // function foo(y) {
// //     let x = 10
// //     return x + y + 11
// // }

// // function bar(a) {
// //     let b = 3
// //     return foo(a * b)
// // }

// // console.log(bar(7)) // Returns 42


// // // Code 47 - Adding messages

// // // Code example 01
// // const sVar = new Date().getSeconds();
// // setTimeout(function () {
// //     // Prints out "2", meaning tha tthe callback is not
// //     // called immediately after 500ms (milliseconds).
// //     console.log("Ran after " + (new Date().getSeconds() - sVar) + "seconds.");
// // }, 500)

// // while (true) {
// //     if (new Date().getSeconds() - sVar >= 2) {
// //         console.log("Good, looped for 02 seconds.")
// //         break;
// //     }
// // }


// // // Code 48 - Zero delays

// // (function () {
// //     console.log('this is the start');

// //     setTimeout(function cbVar() {
// //         console.log('Callback 01 = This is a message from callback');
// //     }); // Default time value = 0

// //     console.log('this is just a message');

// //     setTimeout(function cbVar01() {
// //         console.log('Callback 02: this is a message from callback');
// //     }, 0);

// //     console.log('This is the end');

// // })();

// // // "This is the start"
// // // "This is just a message"
// // // "This is the end"
// // // "Callback 01: This is a message from callback"
// // // "Callback 02: This is a message from callback"

// // // setTimeout function
// // // My code

// // console.log('First message!');
// // setTimeout(() => {
// //     console.log('This message will always run last...');
// // }, 2500); // Or this value can be changed for 0
// // console.log('Second message!');

// // // Code 49 - XHR GET Request I

// // // Code example 01

// // //XMLHttpRequest GET

// // const xhr = new XMLHttpRequest(); // Creates a new object
// // const url = 'http://api-to-call.com/endpoint';

// // xhr.responseType = 'json';
// // xhr.onreadystatechange = () => {
// //     if (xhr.readyState === XMLHttpRequest.DONE) {
// //         // Code to execute with response
// //     }
// // };

// // // From line 1596 to line 1601 = Handles response

// // xhr.open('GET', url);   // This opens a request
// // xhr.send();             // and sends the object


// // // Code 50 - XML Get Request III

// // // My code
// // // Information to reach API
// // const url = 'https://api.datamuse.com/words?';
// // const queryParams = 'rel_rhy=';

// // // Selecting page elements
// // const inputField = document.querySelector('#input');
// // const submit = document.querySelector('#submit');
// // const responseFields = document.querySelector('#responseField');

// // // AJAX functions
// // const getSuggestions = () => {
// //     const wordQuery = inputField.value;
// //     const endpoint = `${url}${queryParams}${wordQuery}`;

// //     const xhr = new XMLHttpRequest();
// //     xhr.responseType = 'json';
// //     xhr.onreadystatechange = () => {
// //         if (xhr.readyState === XMLHttpRequest.DONE) {
// //             // renderRawResponse(xhr.response);
// //             // The line above can be replaced by:
// //             renderResponse(xhr.response);
// //         }
// //     }

// //     xhr.open('GET', endpoint);
// //     xhr.send();
// // }

// // // To clear the previous results and show
// // // the results on webpage

// // const displaySuggestion = (event) => {
// //     event.preventDefault();
// //     while (responseFields.firstChild) {
// //         responseFields.removeChild(responseField.firstChild);
// //     };
// //     getSuggestions();
// // }

// // submit.addEventListener('click', displaySuggestions);


// // // Code 51 - XML GET Requests IV

// // // Information to reach API
// // const url = 'https://api.datamuse.com/words?';
// // const queryParams = 'rel_jjb=';

// // // Selecting page elements
// // const inputField = document.querySelector('#input');
// // const topicField = document.querySelector('#topic');
// // const submit = document.querySelector('#submit');
// // const responseField = document.querySelector('#responseField');

// // // AJAX function
// // const getSuggestions = () => {
// //     const wordQuery = inputField.value;
// //     const topicQuery = topicField.value;
// //     const endpoints = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;

// //     const xhr = new XMLHttpRequest();
// //     xhr.responseType = 'json';

// //     xhr.onreadystatechange = () => {
// //         if (xhr.readyState === XMLHttpRequest.DONE) {
// //             renderResponse(xhr.response);
// //         }
// //     }

// //     xhr.open('GET', endpoint);
// //     xhr.send();
// // }

// // const additionalParams = '&topics=';

// // // Clear previous results and shows the results to webpage
// // const displaySuggestions = (event) => {
// //     event.preventDefault();
// //     while (responseField.firstChild) {
// //         responseField.removeChild(responseField.firstChild);
// //     }
// //     getSuggestions();
// // }

// // submit.addEventListener('click', displaySuggestions);


// // // Code 52 - XHR POST Requests I

// // // XMLHttpRequest POST

// // const xhr = new XMLHttpRequest();
// // const url = 'http://api-to-call.com/endpoint';
// // const data = JSON.stringify(id: '200'); // Converts data to a string

// // xhr.responseType = 'json';
// // xhr.onreadystatechange = () => {
// //     if (xhr.readyState === XMLHttpRequest.DONE) {
// //         // Code to be executed with response
// //     }
// // };

// // // From line 1707 to line 1712 = Code for response handling

// // xhr.open('POST', url);   // This code opens request
// // xhr.send(data);         // and sends object


// // // Code 53 - XHR POST Requests III

// // // Information to reach API
// // const apiKey = '<2bcd65023e6c47bca9c93efaa238b6ee>';
// // const url = 'https://api.rebrandly.com/v1/links';

// // Some page elements
// const inputField = document.querySelector('#input');
// const shortenButton = document.querySelector('#shorten');
// const responseField = document.querySelector('#responseField');

// // AJAX functions
// const shortenUrl = () => {
//     const urlToShorten = inputField.value;
//     const data = JSON.stringify({ destination: urlToShorten });
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = 'json';

//     // xhr.onreadystatechange = () => {
//     //     if (xhr.readyState === XMLHttpRequest.DONE) {
//     //         renderResponse(xhr.response);
//     //     }
//     // }

//     xhr.open('POST', url);
//     xhr.setRequestHeader('Content-type', 'application/json');
//     xhr.setRequestHeader('apikey', apiKey);
// //     xhr.send(data);
// // }

// // // Clear page and call AJAX functions
// // const displayShortUrl = (event) => {
//     event.preventDefault();
//     while (responseField.firstChild) {
//         responseField.removeChild(responseField.firstChild);
//     }
// //     shortenUrl();
// // }

// // shortenButton.addEventListener('click', displayShortUrl);


// // // Code 54 - Intro to requests

// // const jsonButton = document.querySelector('#generate');
// const buttonContainer = document.querySelector('#buttonContainer');
// const collection = ["Another", "More", "Next", "Continue", "Keep going", "Click me", "A new one"];

// const generateJson = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         // if (response.ok) {
//         //     const jsonResponse = await response.json();
//         //     renderResponse(jsonResponse);
//         //     changeButton();
//         // }
//     } catch (error) {
//         console.log(error);
//     }
// };

// // const formatJson = (resJson) => {
// //     resJson = JSON.stringify(resJson);
// //     let counter = 0;
// //     return resJson.split('').map(char => {
// //         switch (char) {
// //             case ',':
// //                 return `,\n${''.repeat(counter * 2)}`;
// //             case '{':
// //                 counter += 1;
// //                 return `{\n${''.repeat(counter * 2)}`;
// //             case '}':
// //                 counter -= 1;
// //                 return `\n${''.repeat(counter * 2)}}`;
// //             default:
// //                 return char;
// //         }
// //     })
// //         .join('');
// // };

// // const renderResponse = (jsonResponse) => {
// //     const jsonSelection = Math.floor(Math.random() * 10);
// //     display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</pre>`;
// // };

// // const changeButton = () => {
// //     const newText = Math.floor(Math.random() * 7);
// //     jsonButton.innerHTML = `${collection[newText]}!`;
// // };

// // jsonButton.addEventListener('click', generateJson);


// // // Code 55 - fetch GET

// // // This line sends the request
// // fetch('http://api-to-call.com/endpoint').then(response => {
// //     if (response.ok) {
// //         return response.json();
// //     }
// //     throw new Error('Request failed!');
// // }, networkError => console.log(networkError.message)
// // ).then(jsonResponse => {
// //     return jsonResponse;
// // });


// // // Code 56 - fetch GET request III

// // const url = 'https://api.datamuse.com/words';
// // const queryParams = '?sl=';

// // // Select page elements
// // const inputField = document.querySelector('#input');
// // const submit = document.querySelector('#submit');
// // const responseField = document.querySelector('#responseField');

// // // AJAX function
// // const getSuggestions = () => {
// //     const wordQuery = inputField.value;
// //     const endpoint = `${url}${queryParams}${wordQuery}`;
// //     fetch(endpoint, { cache: 'no-cache' }).then(response => {
// //         if (response.ok) {
// //             // renderJsonResponse(response);
// //             return response.json();
// //         }
// //         throw new Error('Request failed!');
// //     }, networkError => {
// //         console.log(networkError.message)
// //     })
// // }

// // // Clears previous results and display results to
// // // webpage
// // const displaySuggestions = (event) => {
// //     event.preventDefault();
// //     while (responseField.firstChild) {
// //         responseField.removeChild(responseField.firstChild);
// //     }
// //     getSuggestions();
// // };

// // submit.addEventListener('click', displaySuggestions);

// // // To receive an array of suggestive words =
// // const getSuggestions = () => {
// //     const wordQuery = inputField.value;
// //     const endpoint = `${url}${queryParams}${wordQuery}`;

// //     fetch(endpoint, { cache: 'no-cache' }).then(response => {
// //         if (response.ok) {
// //             return response.json();
// //         }
// //         throw new Error('Request failed!');
// //     }, networkError => {
// //         console.log(networkError.message)
// //     }).then(jsonResponse => {
// //         renderResponse(jsonResponse);
// //     })
// // }


// // // Code 57 - fetch POST request I

// // // fetch POST
// // fetch('http://api-to-call.com/endpoint', {            //
// //     method: 'POST',                                   // This block sends the request
// //     body: JSON.stringify({ id: '200' })               // 
// // }).then(response => {
// //     if (response.ok) {                                //
// //         return response.json();                       // This block converts response object to JSON
// //     }                                                 //
// //     throw new Error('Request failed!');               // This block handles the errors
// // }, networkError => console.log(networkError.message)  // 
// // ).then(jsonResponse => {                              //
// //     // Code to be executed with jsonResponse          //  This block handles the success
// // });                                                   //





// Code 44 - XHR POST Requests III

// Information to reach API
const apiKey = '<2bcd65023e6c47bca9c93efaa238b6ee>';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
    const urlToShorten = inputField.value;
    const data = JSON.stringify({destination: urlToShorten});
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
            renderResponse(xhr.response);
        }
    }

    xhr.open('POST',url);
    xhr.setRequestHeader('Content-type','application/json');
    xhr.setRequestHeader('apikey',apiKey);
    xhr.send(data);
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
    event.preventDefault();
    while(responseField.firstChild){
        responseField.removeChild(responseField.firstChild);
    }
    shortenUrl();
}

shortenButton.addEventListener('click',displayShortUrl);


