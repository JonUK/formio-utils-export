import Formio from 'formiojs';
export { default as Utils } from 'formiojs/utils';

//  export * as Utils from 'formiojs/utils';

export default class FormioCalculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }
  formatDateTimeFields(formDefinitions, format) {
    Utils.eachComponent(formDefinitions, (component) => {
      if (component.type === 'datetime' && component.value && component.value instanceof Date) {
        component.value = component.value.toLocaleDateString('en-US', format);
      }
    });
    return objects;
  }
}

