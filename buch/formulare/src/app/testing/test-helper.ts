import {getDOM} from '@angular/platform-browser/src/dom/dom_adapter';

export function dispatchEvent(element: any, eventType: any) {
  getDOM().dispatchEvent(element, getDOM().createEvent(eventType));
}

export function setInputValue(input: any, value: any) {
  input.value = value;
  dispatchEvent(input, 'input');
  dispatchEvent(input, 'blur');
}