import FormioCalculator from './app';
import { Utils } from './app';

const calculator = new FormioCalculator();
console.log(calculator.add(2, 3)); // Output: 5
console.log(calculator.subtract(5, 2)); // Output: 3
console.log(Utils);

// export class FormIoUtils{
//     constructor(){
//       this.utils = Utils
//     }
  
//     getUtils() {
//       return this.utils;
//     }
//   }


const FormioUtils = require('formiojs/utils');

// export class DateFormatter {
//   static formatDateTimeFields(formDefinitions, format) {
//     Utils.eachComponent(formDefinitions, (component) => {
//       if (component.type === 'datetime' && component.value && component.value instanceof Date) {
//         component.value = component.value.toLocaleDateString('en-US', format);
//       }
//     });
//     return objects;
//   }
// }
